/* eslint-disable no-param-reassign */
import type { GraphQLInfo } from 'payload/config'
import type { Collection, Field, SanitizedCollectionConfig, SanitizedConfig } from 'payload/types'

import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { fieldAffectsData } from 'payload/types'
import { flattenTopLevelFields, formatNames, toWords } from 'payload/utilities'
import { buildVersionCollectionFields } from 'payload/versions'

import type { ObjectTypeConfig } from './buildObjectType.js'

import forgotPassword from '../resolvers/auth/forgotPassword.js'
import init from '../resolvers/auth/init.js'
import login from '../resolvers/auth/login.js'
import logout from '../resolvers/auth/logout.js'
import me from '../resolvers/auth/me.js'
import refresh from '../resolvers/auth/refresh.js'
import resetPassword from '../resolvers/auth/resetPassword.js'
import unlock from '../resolvers/auth/unlock.js'
import verifyEmail from '../resolvers/auth/verifyEmail.js'
import createResolver from '../resolvers/collections/create.js'
import getDeleteResolver from '../resolvers/collections/delete.js'
import { docAccessResolver } from '../resolvers/collections/docAccess.js'
import findResolver from '../resolvers/collections/find.js'
import findByIDResolver from '../resolvers/collections/findByID.js'
import findVersionByIDResolver from '../resolvers/collections/findVersionByID.js'
import findVersionsResolver from '../resolvers/collections/findVersions.js'
import restoreVersionResolver from '../resolvers/collections/restoreVersion.js'
import updateResolver from '../resolvers/collections/update.js'
import formatName from '../utilities/formatName.js'
import { buildMutationInputType, getCollectionIDType } from './buildMutationInputType.js'
import buildObjectType from './buildObjectType.js'
import buildPaginatedListType from './buildPaginatedListType.js'
import { buildPolicyType } from './buildPoliciesType.js'
import buildWhereInputType from './buildWhereInputType.js'

type InitCollectionsGraphQLArgs = {
  config: SanitizedConfig
  graphqlResult: GraphQLInfo
}
function initCollectionsGraphQL({ config, graphqlResult }: InitCollectionsGraphQLArgs): void {
  Object.keys(graphqlResult.collections).forEach((slug) => {
    const collection: Collection = graphqlResult.collections[slug]
    const {
      config: collectionConfig,
      config: { fields, graphQL = {} as SanitizedCollectionConfig['graphQL'], versions },
    } = collection

    if (!graphQL) return

    let singularName
    let pluralName
    const fromSlug = formatNames(collection.config.slug)
    if (graphQL.singularName) {
      singularName = toWords(graphQL.singularName, true)
    } else {
      singularName = fromSlug.singular
    }
    if (graphQL.pluralName) {
      pluralName = toWords(graphQL.pluralName, true)
    } else {
      pluralName = fromSlug.plural
    }

    // For collections named 'Media' or similar,
    // there is a possibility that the singular name
    // will equal the plural name. Append `all` to the beginning
    // of potential conflicts
    if (singularName === pluralName) {
      pluralName = `all${singularName}`
    }

    collection.graphQL = {} as Collection['graphQL']

    const hasIDField =
      flattenTopLevelFields(fields).findIndex(
        (field) => fieldAffectsData(field) && field.name === 'id',
      ) > -1

    const idType = getCollectionIDType(config.db.defaultIDType, collectionConfig)

    const baseFields: ObjectTypeConfig = {}

    const whereInputFields = [...fields]

    if (!hasIDField) {
      baseFields.id = { type: idType }
      whereInputFields.push({
        name: 'id',
        type: config.db.defaultIDType as 'text',
      })
    }

    const forceNullableObjectType = Boolean(versions?.drafts)

    collection.graphQL.type = buildObjectType({
      name: singularName,
      baseFields,
      config,
      fields,
      forceNullable: forceNullableObjectType,
      graphqlResult,
      parentName: singularName,
    })

    collection.graphQL.paginatedType = buildPaginatedListType(pluralName, collection.graphQL.type)

    collection.graphQL.whereInputType = buildWhereInputType({
      name: singularName,
      fields: whereInputFields,
      parentName: singularName,
    })

    if (collectionConfig.auth && !collectionConfig.auth.disableLocalStrategy) {
      fields.push({
        name: 'password',
        type: 'text',
        label: 'Password',
        required: true,
      })
    }

    const createMutationInputType = buildMutationInputType({
      name: singularName,
      config,
      fields,
      graphqlResult,
      parentName: singularName,
    })
    if (createMutationInputType) {
      collection.graphQL.mutationInputType = new GraphQLNonNull(createMutationInputType)
    }

    const updateMutationInputType = buildMutationInputType({
      name: `${singularName}Update`,
      config,
      fields: fields.filter((field) => !(fieldAffectsData(field) && field.name === 'id')),
      forceNullable: true,
      graphqlResult,
      parentName: `${singularName}Update`,
    })
    if (updateMutationInputType) {
      collection.graphQL.updateMutationInputType = new GraphQLNonNull(updateMutationInputType)
    }

    graphqlResult.Query.fields[singularName] = {
      type: collection.graphQL.type,
      args: {
        id: { type: new GraphQLNonNull(idType) },
        draft: { type: GraphQLBoolean },
        ...(config.localization
          ? {
              fallbackLocale: { type: graphqlResult.types.fallbackLocaleInputType },
              locale: { type: graphqlResult.types.localeInputType },
            }
          : {}),
      },
      resolve: findByIDResolver(collection),
    }

    graphqlResult.Query.fields[pluralName] = {
      type: buildPaginatedListType(pluralName, collection.graphQL.type),
      args: {
        draft: { type: GraphQLBoolean },
        where: { type: collection.graphQL.whereInputType },
        ...(config.localization
          ? {
              fallbackLocale: { type: graphqlResult.types.fallbackLocaleInputType },
              locale: { type: graphqlResult.types.localeInputType },
            }
          : {}),
        limit: { type: GraphQLInt },
        page: { type: GraphQLInt },
        sort: { type: GraphQLString },
      },
      resolve: findResolver(collection),
    }

    graphqlResult.Query.fields[`docAccess${singularName}`] = {
      type: buildPolicyType({
        type: 'collection',
        entity: collectionConfig,
        scope: 'docAccess',
        typeSuffix: 'DocAccess',
      }),
      args: {
        id: { type: new GraphQLNonNull(idType) },
      },
      resolve: docAccessResolver(collection),
    }

    graphqlResult.Mutation.fields[`create${singularName}`] = {
      type: collection.graphQL.type,
      args: {
        ...(createMutationInputType
          ? { data: { type: collection.graphQL.mutationInputType } }
          : {}),
        draft: { type: GraphQLBoolean },
        ...(config.localization
          ? {
              locale: { type: graphqlResult.types.localeInputType },
            }
          : {}),
      },
      resolve: createResolver(collection),
    }

    graphqlResult.Mutation.fields[`update${singularName}`] = {
      type: collection.graphQL.type,
      args: {
        id: { type: new GraphQLNonNull(idType) },
        autosave: { type: GraphQLBoolean },
        ...(updateMutationInputType
          ? { data: { type: collection.graphQL.updateMutationInputType } }
          : {}),
        draft: { type: GraphQLBoolean },
        ...(config.localization
          ? {
              locale: { type: graphqlResult.types.localeInputType },
            }
          : {}),
      },
      resolve: updateResolver(collection),
    }

    graphqlResult.Mutation.fields[`delete${singularName}`] = {
      type: collection.graphQL.type,
      args: {
        id: { type: new GraphQLNonNull(idType) },
      },
      resolve: getDeleteResolver(collection),
    }

    if (collectionConfig.versions) {
      const versionIDType = config.db.defaultIDType === 'text' ? GraphQLString : GraphQLInt
      const versionCollectionFields: Field[] = [
        ...buildVersionCollectionFields(collectionConfig),
        {
          name: 'id',
          type: config.db.defaultIDType as 'text',
        },
        {
          name: 'createdAt',
          type: 'date',
          label: 'Created At',
        },
        {
          name: 'updatedAt',
          type: 'date',
          label: 'Updated At',
        },
      ]

      collection.graphQL.versionType = buildObjectType({
        name: `${singularName}Version`,
        config,
        fields: versionCollectionFields,
        forceNullable: forceNullableObjectType,
        graphqlResult,
        parentName: `${singularName}Version`,
      })

      graphqlResult.Query.fields[`version${formatName(singularName)}`] = {
        type: collection.graphQL.versionType,
        args: {
          id: { type: versionIDType },
          ...(config.localization
            ? {
                fallbackLocale: { type: graphqlResult.types.fallbackLocaleInputType },
                locale: { type: graphqlResult.types.localeInputType },
              }
            : {}),
        },
        resolve: findVersionByIDResolver(collection),
      }
      graphqlResult.Query.fields[`versions${pluralName}`] = {
        type: buildPaginatedListType(
          `versions${formatName(pluralName)}`,
          collection.graphQL.versionType,
        ),
        args: {
          where: {
            type: buildWhereInputType({
              name: `versions${singularName}`,
              fields: versionCollectionFields,
              parentName: `versions${singularName}`,
            }),
          },
          ...(config.localization
            ? {
                fallbackLocale: { type: graphqlResult.types.fallbackLocaleInputType },
                locale: { type: graphqlResult.types.localeInputType },
              }
            : {}),
          limit: { type: GraphQLInt },
          page: { type: GraphQLInt },
          sort: { type: GraphQLString },
        },
        resolve: findVersionsResolver(collection),
      }
      graphqlResult.Mutation.fields[`restoreVersion${formatName(singularName)}`] = {
        type: collection.graphQL.type,
        args: {
          id: { type: versionIDType },
        },
        resolve: restoreVersionResolver(collection),
      }
    }

    if (collectionConfig.auth) {
      const authFields: Field[] = collectionConfig.auth.disableLocalStrategy
        ? []
        : [
            {
              name: 'email',
              type: 'email',
              required: true,
            },
          ]
      collection.graphQL.JWT = buildObjectType({
        name: formatName(`${slug}JWT`),
        config,
        fields: [
          ...collectionConfig.fields.filter((field) => fieldAffectsData(field) && field.saveToJWT),
          ...authFields,
          {
            name: 'collection',
            type: 'text',
            required: true,
          },
        ],
        graphqlResult,
        parentName: formatName(`${slug}JWT`),
      })

      graphqlResult.Query.fields[`me${singularName}`] = {
        type: new GraphQLObjectType({
          name: formatName(`${slug}Me`),
          fields: {
            collection: {
              type: GraphQLString,
            },
            exp: {
              type: GraphQLInt,
            },
            token: {
              type: GraphQLString,
            },
            user: {
              type: collection.graphQL.type,
            },
          },
        }),
        resolve: me(collection),
      }

      graphqlResult.Query.fields[`initialized${singularName}`] = {
        type: GraphQLBoolean,
        resolve: init(collection.config.slug),
      }

      graphqlResult.Mutation.fields[`refreshToken${singularName}`] = {
        type: new GraphQLObjectType({
          name: formatName(`${slug}Refreshed${singularName}`),
          fields: {
            exp: {
              type: GraphQLInt,
            },
            refreshedToken: {
              type: GraphQLString,
            },
            user: {
              type: collection.graphQL.JWT,
            },
          },
        }),
        args: {
          token: { type: GraphQLString },
        },
        resolve: refresh(collection),
      }

      graphqlResult.Mutation.fields[`logout${singularName}`] = {
        type: GraphQLString,
        resolve: logout(collection),
      }

      if (!collectionConfig.auth.disableLocalStrategy) {
        if (collectionConfig.auth.maxLoginAttempts > 0) {
          graphqlResult.Mutation.fields[`unlock${singularName}`] = {
            type: new GraphQLNonNull(GraphQLBoolean),
            args: {
              email: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: unlock(collection),
          }
        }

        graphqlResult.Mutation.fields[`login${singularName}`] = {
          type: new GraphQLObjectType({
            name: formatName(`${slug}LoginResult`),
            fields: {
              exp: {
                type: GraphQLInt,
              },
              token: {
                type: GraphQLString,
              },
              user: {
                type: collection.graphQL.type,
              },
            },
          }),
          args: {
            email: { type: GraphQLString },
            password: { type: GraphQLString },
          },
          resolve: login(collection),
        }

        graphqlResult.Mutation.fields[`forgotPassword${singularName}`] = {
          type: new GraphQLNonNull(GraphQLBoolean),
          args: {
            disableEmail: { type: GraphQLBoolean },
            email: { type: new GraphQLNonNull(GraphQLString) },
            expiration: { type: GraphQLInt },
          },
          resolve: forgotPassword(collection),
        }

        graphqlResult.Mutation.fields[`resetPassword${singularName}`] = {
          type: new GraphQLObjectType({
            name: formatName(`${slug}ResetPassword`),
            fields: {
              token: { type: GraphQLString },
              user: { type: collection.graphQL.type },
            },
          }),
          args: {
            password: { type: GraphQLString },
            token: { type: GraphQLString },
          },
          resolve: resetPassword(collection),
        }

        graphqlResult.Mutation.fields[`verifyEmail${singularName}`] = {
          type: GraphQLBoolean,
          args: {
            token: { type: GraphQLString },
          },
          resolve: verifyEmail(collection),
        }
      }
    }
  })
}

export default initCollectionsGraphQL