import type { DefaultTranslationsObject, Language } from '../types.js'

export const ruTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Аккаунт',
    accountOfCurrentUser: 'Аккаунт текущего пользователя',
    accountVerified: 'Учетная запись успешно подтверждена.',
    alreadyActivated: 'Уже активирован',
    alreadyLoggedIn: 'Уже вошли в систему',
    apiKey: 'API ключ',
    authenticated: 'Аутентифицирован',
    backToLogin: 'Вернуться к входу',
    beginCreateFirstUser: 'Чтобы начать - создайте первого пользователя.',
    changePassword: 'Сменить пароль',
    checkYourEmailForPasswordReset:
      'Если указанный адрес электронной почты связан с аккаунтом, вы скоро получите инструкции по сбросу пароля. Пожалуйста, проверьте папку со спамом или нежелательной почтой, если вы не видите письма во входящих.',
    confirmGeneration: 'Подтвердить генерацию',
    confirmPassword: 'Подтверждение пароля',
    createFirstUser: 'Создание первого пользователя',
    emailNotValid: 'Указанный адрес электронной почты неверен',
    emailOrUsername: 'Электронная почта или Имя пользователя',
    emailSent: 'Email отправлен',
    emailVerified: 'Электронная почта успешно подтверждена.',
    enableAPIKey: 'Активировать API ключ',
    failedToUnlock: 'Не удалось разблокировать',
    forceUnlock: 'Принудительная разблокировка',
    forgotPassword: 'Забыли пароль',
    forgotPasswordEmailInstructions:
      'Пожалуйста, введите ваш email. Вы получите письмо с инструкцией по восстановлению пароля.',
    forgotPasswordQuestion: 'Забыли пароль?',
    forgotPasswordUsernameInstructions:
      'Пожалуйста, введите ваше имя пользователя ниже. Инструкции по сбросу вашего пароля будут отправлены на адрес электронной почты, связанный с вашим именем пользователя.',
    generate: 'Сгенерировать',
    generateNewAPIKey: 'Сгенерировать новый API ключ',
    generatingNewAPIKeyWillInvalidate:
      'Генерация нового API ключа приведёт к <1>недействительности</1> предыдущего ключа. Вы уверены, что хотите продолжить?',
    lockUntil: 'Заблокировать до',
    logBackIn: 'Войти снова',
    loggedIn: 'Чтобы войти в другую учетную запись, сначала <0>выйдите</0>.',
    loggedInChangePassword:
      'Чтобы изменить пароль, зайдите в свой <0>аккаунт</0> и измените пароль там.',
    loggedOutInactivity: 'Вы вышли из системы из-за неактивности.',
    loggedOutSuccessfully: 'Вы успешно вышли из системы.',
    loggingOut: 'Выход из системы...',
    login: 'Войти',
    loginAttempts: 'Попытки входа',
    loginUser: 'Вход пользователя в систему',
    loginWithAnotherUser:
      'Чтобы войти в систему под другим пользователем, необходимо сначала <0>выйти</0>.',
    logOut: 'Выйти',
    logout: 'Выйти',
    logoutSuccessful: 'Выход выполнен успешно.',
    logoutUser: 'Вход из системы',
    newAccountCreated:
      'Новый аккаунт был создан для доступа к <a href="{{serverURL}}">{{serverURL}}</a> Пожалуйста, кликните по следующей ссылке или вставьте в адресную строку браузера чтобы подтвердить email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> После подтверждения вашего email, вы сможете успешно войти в систему.',
    newAPIKeyGenerated: 'Новый API ключ сгенерирован.',
    newPassword: 'Новый пароль',
    passed: 'Аутентификация пройдена',
    passwordResetSuccessfully: 'Сброс пароля успешно выполнен.',
    resetPassword: 'Сброс пароля',
    resetPasswordExpiration: 'Сброс пароля по истечении срока действия',
    resetPasswordToken: 'Токен сброса пароля',
    resetYourPassword: 'Сброс вашего пароля',
    stayLoggedIn: 'Остаться в системе',
    successfullyRegisteredFirstUser: 'Успешно зарегистрирован первый пользователь.',
    successfullyUnlocked: 'Успешно разблокирован',
    tokenRefreshSuccessful: 'Обновление токена прошло успешно.',
    unableToVerify: 'Невозможно подтвердить',
    username: 'Имя пользователя',
    usernameNotValid: 'Предоставленное имя пользователя недействительно.',
    verified: 'Подтверждено',
    verifiedSuccessfully: 'Успешно подтверждено',
    verify: 'Подтвердить',
    verifyUser: 'Подтвердить пользователя',
    verifyYourEmail: 'Подтвердить ваш email',
    youAreInactive:
      'Вы не были активны в течение некоторого времени и скоро автоматически выйдете из системы в целях вашей безопасности. Вы хотите остаться в системе?',
    youAreReceivingResetPassword:
      'Вы получили это сообщение, потому что вы (или кто-то другой) запросили сброс пароля для вашей учетной записи. Пожалуйста, нажмите на следующую ссылку или вставьте ее в браузер, чтобы завершить процесс:',
    youDidNotRequestPassword:
      'Если вы не запрашивали этого, пожалуйста, проигнорируйте это письмо, и ваш пароль останется неизменным.',
  },
  error: {
    accountAlreadyActivated: 'Этот аккаунт уже был активирован.',
    autosaving: 'При автосохранении этого документа возникла проблема.',
    correctInvalidFields: 'Пожалуйста, исправьте неправильные поля.',
    deletingFile: 'Произошла ошибка при удалении файла.',
    deletingTitle:
      'При удалении {{title}} произошла ошибка. Пожалуйста, проверьте соединение и повторите попытку.',
    emailOrPasswordIncorrect: 'Указанный email или пароль неверен.',
    followingFieldsInvalid_one: 'Следующее поле недействительно:',
    followingFieldsInvalid_other: 'Следующие поля недействительны:',
    incorrectCollection: 'Неправильная Коллекция',
    invalidFileType: 'Недопустимый тип файла',
    invalidFileTypeValue: 'Недопустимый тип файла: {{value}}',
    invalidRequestArgs: 'В запрос переданы недопустимые аргументы: {{args}}',
    loadingDocument: 'Возникла проблема при загрузке документа с ID {{id}}.',
    localesNotSaved_one: 'Следующую локализацию не удалось сохранить:',
    localesNotSaved_other: 'Следующие локализации не удалось сохранить:',
    logoutFailed: 'Выход не удался.',
    missingEmail: 'Отсутствует email.',
    missingIDOfDocument: 'Отсутствующий ID документа для обновления.',
    missingIDOfVersion: 'Отсутствует ID версии.',
    missingRequiredData: 'Отсутствуют необходимые данные.',
    noFilesUploaded: 'Не было загружено ни одного файла.',
    noMatchedField: 'Не найдено подходящего поля для "{{label}}"',
    notAllowedToAccessPage: 'Вы не имеете права доступа к этой странице.',
    notAllowedToPerformAction: 'У вас нет права на выполнение этого действия.',
    notFound: 'Запрашиваемый ресурс не найден.',
    noUser: 'Нет Пользователя',
    previewing: 'При предварительном просмотре этого документа возникла проблема.',
    problemUploadingFile: 'Возникла проблема при загрузке файла.',
    tokenInvalidOrExpired: 'Токен либо недействителен, либо срок его действия истек.',
    tokenNotProvided: 'Токен не предоставлен.',
    unableToDeleteCount: 'Не удалось удалить {{count}} из {{total}} {{label}}.',
    unableToReindexCollection:
      'Ошибка при переиндексации коллекции {{collection}}. Операция прервана.',
    unableToUpdateCount: 'Не удалось обновить {{count}} из {{total}} {{label}}.',
    unauthorized: 'Нет доступа, вы должны войти, чтобы сделать этот запрос.',
    unauthorizedAdmin: 'Нет доступа, этот пользователь не имеет доступа к панели администратора.',
    unknown: 'Произошла неизвестная ошибка.',
    unPublishingDocument: 'При отмене публикации этого документа возникла проблема.',
    unspecific: 'Произошла ошибка.',
    userEmailAlreadyRegistered: 'Пользователь с указанным email уже зарегистрирован.',
    userLocked:
      'Этот пользователь заблокирован из-за слишком большого количества неудачных попыток входа.',
    usernameAlreadyRegistered: 'Пользователь с данным именем пользователя уже зарегистрирован.',
    usernameOrPasswordIncorrect: 'Указанное имя пользователя или пароль неверны.',
    valueMustBeUnique: 'Значение должно быть уникальным',
    verificationTokenInvalid: 'Проверочный токен недействителен.',
  },
  fields: {
    addLabel: 'Добавить {{label}}',
    addLink: 'Добавить ссылку',
    addNew: 'Добавить новый',
    addNewLabel: 'Добавить {{label}}',
    addRelationship: 'Добавить Отношения',
    addUpload: 'Добавить загрузку',
    block: 'Блок',
    blocks: 'Блоки',
    blockType: 'Тип Блока',
    chooseBetweenCustomTextOrDocument:
      'Выберите между вводом пользовательского текстового URL и ссылкой на другой документ.',
    chooseDocumentToLink: 'Выберите документ для ссылки',
    chooseFromExisting: 'Выбрать из существующих',
    chooseLabel: 'Выбрать {{label}}',
    collapseAll: 'Свернуть все',
    customURL: 'Пользовательский URL',
    editLabelData: 'Редактировать данные {{label}}',
    editLink: 'Редактировать ссылку',
    editRelationship: 'Редактировать Отношения',
    enterURL: 'Введите URL',
    internalLink: 'Внутренняя ссылка',
    itemsAndMore: '{{items}} и ещё {{count}}',
    labelRelationship: '{{label}} Отношения',
    latitude: 'Широта',
    linkedTo: 'Связано с <0>{{label}}</0>',
    linkType: 'Тип ссылки',
    longitude: 'Долгота',
    newLabel: 'Новый {{label}}',
    openInNewTab: 'Открывать в новой вкладке',
    passwordsDoNotMatch: 'Пароли не совпадают.',
    relatedDocument: 'Связанный документ',
    relationTo: 'Отношение к',
    removeRelationship: 'Удалить связь',
    removeUpload: 'Удалить загруженное',
    saveChanges: 'Сохранить изменения',
    searchForBlock: 'Найти Блок',
    selectExistingLabel: 'Выберите существующий {{label}}',
    selectFieldsToEdit: 'Выберите поля для редактирования',
    showAll: 'Показать все',
    swapRelationship: 'Поменять отношения',
    swapUpload: 'Заменить загруженное',
    textToDisplay: 'Текст для отображения',
    toggleBlock: 'Переключить Блок',
    uploadNewLabel: 'Загрузить новый {{label}}',
  },
  general: {
    aboutToDelete: 'Вы собираетесь удалить {{label}} <1>{{title}}</1>. Вы уверены?',
    aboutToDeleteCount_many: 'Вы собираетесь удалить {{count}} {{label}}',
    aboutToDeleteCount_one: 'Вы собираетесь удалить {{count}} {{label}}',
    aboutToDeleteCount_other: 'Вы собираетесь удалить {{count}} {{label}}',
    addBelow: 'Добавить ниже',
    addFilter: 'Добавить фильтр',
    adminTheme: 'Тема Панели',
    all: 'Все',
    allCollections: 'Все Коллекции',
    and: 'А также',
    anotherUser: 'Другой пользователь',
    anotherUserTakenOver: 'Другой пользователь взял на себя редактирование этого документа.',
    applyChanges: 'Применить изменения',
    ascending: 'Восходящий',
    automatic: 'Автоматически',
    backToDashboard: 'Назад к Панели',
    cancel: 'Отмена',
    changesNotSaved:
      'Ваши изменения не были сохранены. Если вы сейчас уйдете, то потеряете свои изменения.',
    clearAll: 'Очистить все',
    close: 'Закрыть',
    collapse: 'Свернуть',
    collections: 'Коллекции',
    columns: 'Колонки',
    columnToSort: 'Колонка для сортировки',
    confirm: 'Подтвердить',
    confirmCopy: 'Подтвердить копирование',
    confirmDeletion: 'Подтвердить удаление',
    confirmDuplication: 'Подтвердить копирование',
    confirmReindex: 'Переиндексировать все {{collections}}?',
    confirmReindexAll: 'Переиндексировать все коллекции?',
    confirmReindexDescription:
      'Это удалит существующие индексы и переиндексирует документы в коллекциях {{collections}}.',
    confirmReindexDescriptionAll:
      'Это удалит существующие индексы и переиндексирует документы во всех коллекциях.',
    copied: 'Скопировано',
    copy: 'Скопировать',
    copying: 'Копирование',
    copyWarning:
      'Вы собираетесь перезаписать {{to}} на {{from}} для {{label}} {{title}}. Вы уверены?',
    create: 'Создать',
    created: 'Создано',
    createdAt: 'Дата создания',
    createNew: 'Создать',
    createNewLabel: 'Создать новый {{label}}',
    creating: 'Создание',
    creatingNewLabel: 'Создание нового {{label}}',
    currentlyEditing:
      'в настоящее время редактирует этот документ. Если вы возьмете на себя, они будут заблокированы от продолжения редактирования и могут потерять несохраненные изменения.',
    custom: 'Обычай',
    dark: 'Тёмная',
    dashboard: 'Панель',
    delete: 'Удалить',
    deletedCountSuccessfully: 'Удалено {{count}} {{label}} успешно.',
    deletedSuccessfully: 'Удален успешно.',
    deleting: 'Удаление...',
    depth: 'Глубина',
    descending: 'Уменьшение',
    deselectAllRows: 'Снять выделение со всех строк',
    document: 'Документ',
    documentLocked: 'Документ заблокирован',
    documents: 'Документы',
    duplicate: 'Дублировать',
    duplicateWithoutSaving: 'Дублирование без сохранения изменений',
    edit: 'Редактировать',
    editAll: 'Редактировать все',
    editedSince: 'Отредактировано с',
    editing: 'Редактирование',
    editingLabel_many: 'Редактирование {{count}} {{label}}',
    editingLabel_one: 'Редактирование {{count}} {{label}}',
    editingLabel_other: 'Редактирование {{count}} {{label}}',
    editingTakenOver: 'Редактирование взято под контроль',
    editLabel: 'Редактировать {{label}}',
    email: 'Email',
    emailAddress: 'Email',
    enterAValue: 'Введите значение',
    error: 'Ошибка',
    errors: 'Ошибки',
    fallbackToDefaultLocale: 'Возврат к локали по умолчанию',
    false: 'Ложь',
    filter: 'Фильтр',
    filters: 'Фильтры',
    filterWhere: 'Где фильтровать',
    globals: 'Глобальные',
    goBack: 'Назад',
    isEditing: 'редактирует',
    language: 'Язык',
    lastModified: 'Последнее изменение',
    leaveAnyway: 'Все равно уйти',
    leaveWithoutSaving: 'Выход без сохранения',
    light: 'Светлая',
    livePreview: 'Предпросмотр',
    loading: 'Загрузка',
    locale: 'Локаль',
    locales: 'Локали',
    menu: 'Меню',
    moreOptions: 'Больше вариантов',
    moveDown: 'Сдвинуть вниз',
    moveUp: 'Сдвинуть вверх',
    newPassword: 'Новый пароль',
    next: 'Следующий',
    noDateSelected: 'Дата не выбрана',
    noFiltersSet: 'Фильтры не установлены',
    noLabel: 'Без метки',
    none: 'Никто',
    noOptions: 'Нет вариантов',
    noResults:
      'Ничего не найдено. Возможно, {{label}} еще не существует или не соответствует указанным фильтрам.',
    notFound: 'Не найдено',
    nothingFound: 'Ничего не найдено',
    noUpcomingEventsScheduled: 'Нет запланированных предстоящих событий.',
    noValue: 'Нет значения',
    of: 'из',
    only: 'Только',
    open: 'Открыть',
    or: 'Или же',
    order: 'Порядок',
    overwriteExistingData: 'Перезаписать существующие данные поля',
    pageNotFound: 'Страница не найдена',
    password: 'Пароль',
    payloadSettings: 'Настройки Payload',
    perPage: 'На странице: {{limit}}',
    previous: 'Предыдущий',
    reindex: 'Переиндексировать',
    reindexingAll: 'Переиндексирование всех {{collections}}.',
    remove: 'Удалить',
    reset: 'Сброс',
    resetPreferences: 'Сбросить настройки',
    resetPreferencesDescription: 'Это сбросит все ваши настройки до значений по умолчанию.',
    resettingPreferences: 'Сброс настроек.',
    row: 'Строка',
    rows: 'Строки',
    save: 'Сохранить',
    saving: 'Сохранение...',
    schedulePublishFor: 'Запланировать публикацию для {{title}}',
    searchBy: 'Искать по',
    selectAll: 'Выбрать все {{count}} {{label}}',
    selectAllRows: 'Выбрать все строки',
    selectedCount: '{{count}} {{label}} выбрано',
    selectValue: 'Выбрать значение',
    showAllLabel: 'Показать все {{label}}',
    sorryNotFound: 'К сожалению, ничего подходящего под ваш запрос нет.',
    sort: 'Сортировать',
    sortByLabelDirection: 'Сортировать по {{label}} {{direction}}',
    stayOnThisPage: 'Остаться на этой странице',
    submissionSuccessful: 'Успешно отправлено.',
    submit: 'Отправить',
    submitting: 'Подача заявления...',
    success: 'Успех',
    successfullyCreated: '{{label}} успешно создан.',
    successfullyDuplicated: '{{label}} успешно продублирован.',
    successfullyReindexed:
      'Успешно переиндексировано {{count}} из {{total}} документов из {{collections}} коллекций.',
    takeOver: 'Взять на себя',
    thisLanguage: 'Русский',
    time: 'Время',
    timezone: 'Часовой пояс',
    titleDeleted: '{{label}} {{title}} успешно удалено.',
    true: 'Правда',
    unauthorized: 'Нет доступа',
    unsavedChanges:
      'У вас есть несохраненные изменения. Сохраните или отмените их перед продолжением.',
    unsavedChangesDuplicate:
      'У вас есть несохраненные изменения. Вы хотите продолжить дублирование?',
    untitled: 'Без названия',
    upcomingEvents: 'Предстоящие события',
    updatedAt: 'Дата правки',
    updatedCountSuccessfully: 'Обновлено {{count}} {{label}} успешно.',
    updatedSuccessfully: 'Успешно Обновлено.',
    updating: 'Обновление',
    uploading: 'Загрузка',
    uploadingBulk: 'Загрузка {{current}} из {{total}}',
    user: 'пользователь',
    username: 'Имя пользователя',
    users: 'пользователи',
    value: 'Значение',
    viewReadOnly: 'Просмотр только для чтения',
    welcome: 'Добро пожаловать',
  },
  localization: {
    cannotCopySameLocale: 'Невозможно скопировать в ту же локаль',
    copyFrom: 'Скопировать из',
    copyFromTo: 'Копирование из {{from}} в {{to}}',
    copyTo: 'Копировать в',
    copyToLocale: 'Копировать в локаль',
    localeToPublish: 'Локаль для публикации',
    selectLocaleToCopy: 'Выберите локаль для копирования',
  },
  operators: {
    contains: 'содержит',
    equals: 'равно',
    exists: 'существует',
    intersects: 'пересекает',
    isGreaterThan: 'больше чем',
    isGreaterThanOrEqualTo: 'больше или равно',
    isIn: 'находится',
    isLessThan: 'меньше чем',
    isLessThanOrEqualTo: 'меньше или равно',
    isLike: 'похоже',
    isNotEqualTo: 'не равно',
    isNotIn: 'нет в',
    isNotLike: 'не похож',
    near: 'рядом',
    within: 'в пределах',
  },
  upload: {
    addFile: 'Добавить файл',
    addFiles: 'Добавить файлы',
    bulkUpload: 'Массовая загрузка',
    crop: 'Обрезать',
    cropToolDescription:
      'Перетащите углы выбранной области, нарисуйте новую область или отрегулируйте значения ниже.',
    dragAndDrop: 'Перетащите файл',
    dragAndDropHere: 'или перетащите файл сюда',
    editImage: 'Редактировать изображение',
    fileName: 'Имя файла',
    fileSize: 'Размер файла',
    filesToUpload: 'Файлы для загрузки',
    fileToUpload: 'Файл для загрузки',
    focalPoint: 'Центральная точка',
    focalPointDescription:
      'Перетащите фокусное расстояние прямо на предварительный просмотр или отрегулируйте значения ниже.',
    height: 'Высота',
    lessInfo: 'Меньше информации',
    moreInfo: 'Больше информации',
    noFile: 'Нет файла',
    pasteURL: 'Вставить URL',
    previewSizes: 'Предварительный просмотр размеров',
    selectCollectionToBrowse: 'Выберите Коллекцию для просмотра',
    selectFile: 'Выберите файл',
    setCropArea: 'Установите область обрезки',
    setFocalPoint: 'Установить фокусное расстояние',
    sizes: 'Размеры',
    sizesFor: 'Размеры для {{label}}',
    width: 'Ширина',
  },
  validation: {
    emailAddress: 'Пожалуйста, введите корректный адрес email.',
    enterNumber: 'Пожалуйста, введите корректный номер.',
    fieldHasNo: 'У этого поля нет {{label}}',
    greaterThanMax: '{{value}} больше максимально допустимого значения {{label}} {{max}}.',
    invalidInput: 'Это поле имеет недопустимое значение.',
    invalidSelection: 'В этом поле выбран недопустимый вариант.',
    invalidSelections: "'Это поле содержит следующие неправильные варианты:'",
    lessThanMin: '{{value}} меньше минимально допустимого значения {{label}} {{min}}.',
    limitReached: 'Достигнут лимит, можно добавить только {{max}} элементов.',
    longerThanMin: 'Это значение должно быть больше минимальной длины символов: {{minLength}}.',
    notValidDate: '"{{value}}" это не действительная дата.',
    required: 'Это обязательное поле.',
    requiresAtLeast: 'Это поле требует не менее {{count}} {{label}}',
    requiresNoMoreThan: 'Это поле требует не более {{count}} {{label}}',
    requiresTwoNumbers: 'В этом поле требуется два числа.',
    shorterThanMax: 'Это значение должно быть короче максимальной длины символов {{maxLength}}.',
    timezoneRequired: 'Требуется указать часовой пояс.',
    trueOrFalse: 'Это поле может быть равно только true или false.',
    username:
      'Пожалуйста, введите действительное имя пользователя. Может содержать буквы, цифры, дефисы, точки и подчёркивания.',
    validUploadID: "'Это поле не является действительным ID загрузки.'",
  },
  version: {
    type: 'Тип',
    aboutToPublishSelection: 'Вы собираетесь опубликовать все {{label}} в выборе. Вы уверены?',
    aboutToRestore:
      'Вы собираетесь восстановить этот документ {{label}} в состояние, в котором он находился {{versionDate}}.',
    aboutToRestoreGlobal:
      'Вы собираетесь восстановить глобальную запись {{label}} в состояние, в котором она находилась {{versionDate}}.',
    aboutToRevertToPublished:
      'Вы собираетесь вернуть изменения этого документа к его опубликованному состоянию. Вы уверены?',
    aboutToUnpublish: 'Вы собираетесь отменить публикацию этого документа. Вы уверены?',
    aboutToUnpublishSelection:
      'Вы собираетесь отменить публикацию всех выбранных {{label}}. Вы уверены?',
    autosave: 'Автосохранение',
    autosavedSuccessfully: 'Автосохранение успешно.',
    autosavedVersion: 'Автоматически сохраненная версия',
    changed: 'Изменено',
    changedFieldsCount_one: '{{count}} изменил поле',
    changedFieldsCount_other: '{{count}} измененных полей',
    compareVersion: 'Сравнить версию с:',
    confirmPublish: 'Подтвердить публикацию',
    confirmRevertToSaved: 'Подтвердить возврат к сохраненному',
    confirmUnpublish: 'Подтвердить отмену публикации',
    confirmVersionRestoration: 'Подтвердить восстановление версии',
    currentDocumentStatus: 'Текущий статус {{docStatus}} документа',
    currentDraft: 'Текущий проект',
    currentPublishedVersion: 'Текущая опубликованная версия',
    draft: 'Черновик',
    draftSavedSuccessfully: 'Черновик успешно сохранен.',
    lastSavedAgo: 'Последний раз сохранено {{distance}} назад',
    modifiedOnly: 'Модифицирован только',
    noFurtherVersionsFound: 'Другие версии не найдены',
    noRowsFound: 'Не найдено {{label}}',
    noRowsSelected: 'Не выбран {{label}}',
    preview: 'Предпросмотр',
    previouslyPublished: 'Ранее опубликовано',
    problemRestoringVersion: 'Возникла проблема с восстановлением этой версии',
    publish: 'Публиковать',
    publishAllLocales: 'Опубликовать все локали',
    publishChanges: 'Опубликовать изменения',
    published: 'Опубликовано',
    publishIn: 'Опубликовать на {{locale}}',
    publishing: 'Публикация',
    restoreAsDraft: 'Восстановить как черновик',
    restoredSuccessfully: 'Восстановлен успешно.',
    restoreThisVersion: 'Восстановить эту версию',
    restoring: 'Восстановление...',
    reverting: 'Возврат...',
    revertToPublished: 'Вернуться к опубликованному',
    saveDraft: 'Сохранить черновик',
    scheduledSuccessfully: 'Успешно запланировано.',
    schedulePublish: 'Планирование публикации',
    selectLocales: 'Выберите локали для отображения',
    selectVersionToCompare: 'Выбрать версию для сравнения',
    showingVersionsFor: 'Показаны версии для:',
    showLocales: 'Показать локали:',
    status: 'Статус',
    unpublish: 'Отменить публикацию',
    unpublishing: 'Отмена публикации...',
    version: 'Версия',
    versionCount_many: '{{count}} версий найдено',
    versionCount_none: 'Версий не найдено',
    versionCount_one: '{{count}} версия найдена',
    versionCount_other: 'Найдено {{count}} версий',
    versionCreatedOn: '{{version}} создана:',
    versionID: 'ID версии',
    versions: 'Версии',
    viewingVersion: 'Просмотр версии для {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: '`Просмотр версии для глобальной Коллекции {{entityLabel}}',
    viewingVersions: 'Просмотр версий для {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: '`Просмотр версии для глобальной Коллекции {{entityLabel}}',
  },
}

export const ru: Language = {
  dateFNSKey: 'ru',
  translations: ruTranslations,
}
