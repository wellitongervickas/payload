import { lazy } from 'react'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { useAuth } from '../../../utilities/Auth'
import { useConfig } from '../../../utilities/Config'
import { type Props } from '../types'
import { CustomGlobalComponent } from './CustomComponent'
import { globalCustomRoutes } from './custom'

// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Unauthorized = lazy(() => import('../../Unauthorized'))

export const GlobalRoutes: React.FC<Props> = (props) => {
  const { global, permissions } = props

  const match = useRouteMatch()

  const {
    routes: { admin: adminRoute },
  } = useConfig()

  const { user } = useAuth()

  return (
    <Switch>
      <Route
        exact
        key={`${global.slug}-versions`}
        path={`${adminRoute}/globals/${global.slug}/versions`}
      >
        {permissions?.readVersions?.permission ? (
          <CustomGlobalComponent view="Versions" {...props} />
        ) : (
          <Unauthorized />
        )}
      </Route>
      <Route
        exact
        key={`${global.slug}-view-version`}
        path={`${adminRoute}/globals/${global.slug}/versions/:versionID`}
      >
        {permissions?.readVersions?.permission ? (
          <CustomGlobalComponent view="Version" {...props} />
        ) : (
          <Unauthorized />
        )}
      </Route>
      {globalCustomRoutes({
        global,
        match,
        permissions,
        user,
      })}
      <Route>
        <CustomGlobalComponent view="Default" {...props} />
      </Route>
    </Switch>
  )
}