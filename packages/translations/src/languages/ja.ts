import type { DefaultTranslationsObject, Language } from '../types.js'

export const jaTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'アカウント',
    accountOfCurrentUser: '現在のユーザーアカウント',
    accountVerified: 'アカウントが正常に確認されました。',
    alreadyActivated: 'すでに有効です',
    alreadyLoggedIn: 'すでにログインしています',
    apiKey: 'API Key',
    authenticated: '認証済み',
    backToLogin: 'ログイン画面へ戻る',
    beginCreateFirstUser: 'まずは、最初のユーザーを作成します。',
    changePassword: 'パスワードを変更',
    checkYourEmailForPasswordReset:
      'そのメールアドレスがアカウントに関連付けられている場合、すぐにパスワードをリセットするための指示が送信されます。メールが受信トレイにない場合は、迷惑メールフォルダまたはジャンクメールフォルダを確認してください。',
    confirmGeneration: '生成の確認',
    confirmPassword: 'パスワードの確認',
    createFirstUser: '最初のユーザーを作成',
    emailNotValid: '入力されたメールアドレスは無効です。',
    emailOrUsername: 'メールまたはユーザー名',
    emailSent: 'Emailが送信されました。',
    emailVerified: 'メールが正常に確認されました。',
    enableAPIKey: 'API Keyを許可',
    failedToUnlock: 'ロックの解除に失敗しました。',
    forceUnlock: '強制的にロックを解除',
    forgotPassword: 'パスワード再設定',
    forgotPasswordEmailInstructions:
      'アカウントのメールアドレスを以下に入力してください。パスワードの再設定方法が記載されたメールが届きます。',
    forgotPasswordQuestion: 'パスワードをお忘れですか？',
    forgotPasswordUsernameInstructions:
      '以下にユーザー名を入力してください。パスワードのリセット方法については、ユーザー名に関連付けられたメールアドレスに送信されます。',
    generate: '生成',
    generateNewAPIKey: '新しいAPI Keyを生成',
    generatingNewAPIKeyWillInvalidate:
      '新しいAPI Keyを生成すると、以前のAPI Keyは<1>無効</1>になります。よろしいですか？',
    lockUntil: 'ロック期限',
    logBackIn: '改めてログイン',
    loggedIn: '他のユーザーでログインするには、まず<0>ログアウト</0>する必要があります。',
    loggedInChangePassword:
      'パスワードを変更するには、<0>アカウント</0>にアクセスしてパスワードを編集してください。',
    loggedOutInactivity: 'しばらく操作を行わなかったため、管理画面からログアウトしました。',
    loggedOutSuccessfully: '管理画面からログアウトしました。',
    loggingOut: 'ログアウト中...',
    login: 'ログイン',
    loginAttempts: 'ログイン試行回数',
    loginUser: 'ログインユーザー',
    loginWithAnotherUser:
      '他のユーザーでログインするには、まず<0>ログアウト</0>する必要があります。',
    logOut: 'ログアウト',
    logout: 'ログアウト',
    logoutSuccessful: 'ログアウト成功。',
    logoutUser: 'ログアウトユーザー',
    newAccountCreated:
      '<a href="{{serverURL}}">{{serverURL}}</a>にアクセスするための新しいアカウントが作成されました。以下のリンクをクリックするか、ブラウザに以下のURLを貼り付けて、メールアドレスの確認を行ってください。<a href="{{verificationURL}}">{{verificationURL}}</a><br>メールアドレスの確認後に、正常にログインできるようになります。',
    newAPIKeyGenerated: '新しいAPI Keyを生成しました。',
    newPassword: '新しいパスワード',
    passed: '認証が通りました',
    passwordResetSuccessfully: 'パスワードが正常にリセットされました。',
    resetPassword: 'パスワード再発行',
    resetPasswordExpiration: 'パスワードの有効期限をリセット',
    resetPasswordToken: 'パスワードのトークンをリセット',
    resetYourPassword: 'パスワードの再設定',
    stayLoggedIn: 'ログイン状態を維持',
    successfullyRegisteredFirstUser: '最初のユーザーの登録が成功しました。',
    successfullyUnlocked: 'ロックの解除に成功しました。',
    tokenRefreshSuccessful: 'トークンの更新が成功しました。',
    unableToVerify: '検証ができません',
    username: 'ユーザー名',
    usernameNotValid: '提供されたユーザーネームは無効です',
    verified: '検証済み',
    verifiedSuccessfully: '検証が成功しました',
    verify: '検証',
    verifyUser: 'ユーザーの確認',
    verifyYourEmail: 'メールアドレスの確認',
    youAreInactive:
      'しばらく操作を行わなかったため、セキュリティのために自動的にログアウトします。ログイン状態を維持しますか？',
    youAreReceivingResetPassword:
      'アカウントのパスワードリセットがリクエストされました。次のリンクをクリックする、または、ブラウザにリンクを貼り付けて、手続きを行ってください:',
    youDidNotRequestPassword:
      'もし望まない場合は、このメールを無視してください。パスワードは変更されません。',
  },
  error: {
    accountAlreadyActivated: 'このアカウントはすでに有効です。',
    autosaving: 'このデータを自動保存する際に問題が発生しました。',
    correctInvalidFields: '無効なフィールドを修正してください。',
    deletingFile: 'ファイルの削除中にエラーが発生しました。',
    deletingTitle:
      '{{title}} を削除する際にエラーが発生しました。接続を確認してからもう一度お試しください。',
    emailOrPasswordIncorrect: 'メールアドレス、または、パスワードが正しくありません。',
    followingFieldsInvalid_one: '次のフィールドは無効です:',
    followingFieldsInvalid_other: '次のフィールドは無効です:',
    incorrectCollection: '不正なコレクション',
    invalidFileType: '無効なファイル形式',
    invalidFileTypeValue: '無効なファイル形式: {{value}}',
    invalidRequestArgs: 'リクエストに無効な引数が渡されました: {{args}}',
    loadingDocument: 'IDが {{id}} のデータを読み込む際に問題が発生しました。',
    localesNotSaved_one: '次のロケールを保存できませんでした：',
    localesNotSaved_other: '次のロケールを保存できませんでした：',
    logoutFailed: 'ログアウトに失敗しました。',
    missingEmail: 'メールアドレスが不足しています。',
    missingIDOfDocument: '更新するデータのIDが不足しています。',
    missingIDOfVersion: 'バージョンIDが不足しています。',
    missingRequiredData: '必須データが不足しています。',
    noFilesUploaded: 'ファイルがアップロードされていません。',
    noMatchedField: '"{{label}}" に該当するフィールドがありません。',
    notAllowedToAccessPage: 'この画面へのアクセスは許可されていません。',
    notAllowedToPerformAction: 'このアクションは許可されていません。',
    notFound: 'リクエストされたリソースは見つかりませんでした。',
    noUser: 'ユーザーなし',
    previewing: 'このデータをプレビューする際に問題が発生しました。',
    problemUploadingFile: 'ファイルのアップロード中に問題が発生しました。',
    tokenInvalidOrExpired: 'トークンが無効、または、有効期限が切れています。',
    tokenNotProvided: 'トークンが提供されていません。',
    unableToDeleteCount: '{{total}} {{label}} から {{count}} を削除できません。',
    unableToReindexCollection:
      'コレクション {{collection}} の再インデックス中にエラーが発生しました。操作は中止されました。',
    unableToUpdateCount: '{{total}} {{label}} のうち {{count}} 個を更新できません。',
    unauthorized: '認証されていません。このリクエストを行うにはログインが必要です。',
    unauthorizedAdmin: '管理画面へのアクセス権がないため、認証されていません。',
    unknown: '不明なエラーが発生しました。',
    unPublishingDocument: 'このデータを非公開する際に問題が発生しました。',
    unspecific: 'エラーが発生しました。',
    userEmailAlreadyRegistered: '指定されたメールのユーザーはすでに登録されています。',
    userLocked: 'このユーザーは、ログイン試行回数が多すぎるため、ロックされています。',
    usernameAlreadyRegistered: '指定されたユーザーネームのユーザーはすでに登録されています。',
    usernameOrPasswordIncorrect: '提供されたユーザー名またはパスワードが間違っています。',
    valueMustBeUnique: 'ユニークな値である必要があります。',
    verificationTokenInvalid: '認証トークンが無効です。',
  },
  fields: {
    addLabel: '{{label}} を追加',
    addLink: 'リンクを追加',
    addNew: '新規追加',
    addNewLabel: '{{label}} を新規追加',
    addRelationship: 'リレーションシップを追加',
    addUpload: 'アップロードを追加',
    block: 'ブロック',
    blocks: 'ブロック',
    blockType: 'ブロックタイプ',
    chooseBetweenCustomTextOrDocument:
      'カスタムテキストのURLを入力するか、他のドキュメントにリンクするかを選択してください。',
    chooseDocumentToLink: 'リンクするドキュメントを選択してください。',
    chooseFromExisting: '既存から選択',
    chooseLabel: '{{label}} を選択',
    collapseAll: 'すべて閉じる',
    customURL: 'カスタムURL',
    editLabelData: '{{label}} データを編集',
    editLink: 'リンクを編集',
    editRelationship: 'リレーションシップを編集',
    enterURL: 'URL を入力してください',
    internalLink: '内部リンク',
    itemsAndMore: '{{items}} 他{{count}}件',
    labelRelationship: '{{label}} リレーションシップ',
    latitude: '緯度',
    linkedTo: '<0>{{label}}</0> にリンク',
    linkType: 'リンクタイプ',
    longitude: '経度',
    newLabel: '新規 {{label}}',
    openInNewTab: '新しいタブで開く',
    passwordsDoNotMatch: 'パスワードが一致しません',
    relatedDocument: 'リレーションデータ',
    relationTo: 'リレーション',
    removeRelationship: '関係を削除',
    removeUpload: '削除',
    saveChanges: '変更を保存',
    searchForBlock: 'ブロックを検索',
    selectExistingLabel: '既存 {{label}} を選択',
    selectFieldsToEdit: '編集するフィールドを選択',
    showAll: 'すべて開く',
    swapRelationship: 'スワップ関係',
    swapUpload: '差し替え',
    textToDisplay: '表示するテキスト',
    toggleBlock: 'ブロックを切り替え',
    uploadNewLabel: '新規 {{label}} アップロード',
  },
  general: {
    aboutToDelete: '{{label}} <1>{{title}}</1> を削除します。よろしいですか？',
    aboutToDeleteCount_many: '{{label}}を{{count}}つ削除しようとしています',
    aboutToDeleteCount_one: '{{label}}を{{count}}つ削除しようとしています',
    aboutToDeleteCount_other: '{{label}}を{{count}}つ削除しようとしています',
    addBelow: '下に追加',
    addFilter: '絞り込みを追加',
    adminTheme: '管理画面のテーマ',
    all: 'すべて',
    allCollections: 'すべてのコレクション',
    and: 'かつ',
    anotherUser: '別のユーザー',
    anotherUserTakenOver: '別のユーザーがこのドキュメントの編集を引き継ぎました。',
    applyChanges: '変更を適用する',
    ascending: '昇順',
    automatic: '自動設定',
    backToDashboard: 'ダッシュボードに戻る',
    cancel: 'キャンセル',
    changesNotSaved: '未保存の変更があります。このまま画面を離れると内容が失われます。',
    clearAll: 'すべてクリア',
    close: '閉じる',
    collapse: '閉じる',
    collections: 'コレクション',
    columns: '行の表示',
    columnToSort: '並び替え対象の行',
    confirm: '実行',
    confirmCopy: 'コピーを確認します',
    confirmDeletion: '削除の確認',
    confirmDuplication: '複製の確認',
    confirmReindex: 'すべての{{collections}}を再インデックスしますか？',
    confirmReindexAll: 'すべてのコレクションを再インデックスしますか？',
    confirmReindexDescription:
      'これにより既存のインデックスが削除され、{{collections}}コレクション内のドキュメントが再インデックスされます。',
    confirmReindexDescriptionAll:
      'これにより既存のインデックスが削除され、すべてのコレクション内のドキュメントが再インデックスされます。',
    copied: 'コピーしました',
    copy: 'コピー',
    copying: 'コピーする',
    copyWarning:
      'あなたは{{label}} {{title}}の{{to}}を{{from}}で上書きしようとしています。よろしいですか？',
    create: '作成',
    created: '作成',
    createdAt: '作成日',
    createNew: '新規作成',
    createNewLabel: '{{label}} を新規作成',
    creating: '作成中',
    creatingNewLabel: '{{label}} を新規作成しています',
    currentlyEditing:
      'このドキュメントを編集中です。あなたが引き継ぐと、編集を続けることができなくなり、未保存の変更が失われる可能性があります。',
    custom: 'カスタム',
    dark: 'ダークモード',
    dashboard: 'ダッシュボード',
    delete: '削除',
    deletedCountSuccessfully: '{{count}}つの{{label}}を正常に削除しました。',
    deletedSuccessfully: '正常に削除されました。',
    deleting: '削除しています...',
    depth: '深さ',
    descending: '降順',
    deselectAllRows: 'すべての行の選択を解除します',
    document: 'ドキュメント',
    documentLocked: 'ドキュメントがロックされました',
    documents: 'ドキュメント',
    duplicate: '複製',
    duplicateWithoutSaving: '変更を保存せずに複製',
    edit: '編集',
    editAll: 'すべてを編集',
    editedSince: 'から編集',
    editing: '編集',
    editingLabel_many: '{{count}}つの{{label}}を編集しています',
    editingLabel_one: '{{count}}つの{{label}}を編集しています',
    editingLabel_other: '{{count}}つの{{label}}を編集しています',
    editingTakenOver: '編集が引き継がれました',
    editLabel: '{{label}} を編集',
    email: 'メールアドレス',
    emailAddress: 'メールアドレス',
    enterAValue: '値を入力',
    error: 'エラー',
    errors: 'エラー',
    fallbackToDefaultLocale: 'デフォルトロケールへのフォールバック',
    false: '偽',
    filter: '絞り込み',
    filters: '絞り込み',
    filterWhere: '{{label}} の絞り込み',
    globals: 'グローバル',
    goBack: '戻る',
    isEditing: '編集中',
    language: '言語',
    lastModified: '最終更新',
    leaveAnyway: 'すぐに画面を離れる',
    leaveWithoutSaving: '内容が保存されていません',
    light: 'ライトモード',
    livePreview: 'プレビュー',
    loading: 'ローディング中',
    locale: 'ロケール',
    locales: 'ロケール',
    menu: 'メニュー',
    moreOptions: 'より多くのオプション',
    moveDown: '下へ移動',
    moveUp: '上へ移動',
    newPassword: '新しいパスワード',
    next: '次',
    noDateSelected: '日付が選択されていません',
    noFiltersSet: '絞り込みが未設定です。',
    noLabel: '<No {{label}}>',
    none: 'なし',
    noOptions: '選択肢なし',
    noResults:
      '{{label}} データが見つかりませんでした。データが存在しない、または、絞り込みに一致するものがありません。',
    notFound: 'Not Found',
    nothingFound: 'Nothing found',
    noUpcomingEventsScheduled: '予定されているイベントはありません。',
    noValue: '未設定',
    of: '/',
    only: 'のみ',
    open: '開く',
    or: 'または',
    order: '表示順',
    overwriteExistingData: '既存のフィールドデータを上書きする',
    pageNotFound: 'ページが見つかりません',
    password: 'パスワード',
    payloadSettings: 'Payload 設定',
    perPage: '表示件数: {{limit}}',
    previous: '前の',
    reindex: '再インデックス',
    reindexingAll: 'すべての{{collections}}を再インデックスしています。',
    remove: '削除',
    reset: 'リセット',
    resetPreferences: '設定をリセット',
    resetPreferencesDescription: 'これにより、すべての設定がデフォルト設定にリセットされます。',
    resettingPreferences: '設定をリセットしています。',
    row: '列',
    rows: '列',
    save: '保存',
    saving: '保存しています...',
    schedulePublishFor: '{{title}}の公開を予定する',
    searchBy: '{{label}} で検索',
    selectAll: 'すべての{{count}}つの{{label}}を選択',
    selectAllRows: 'すべての行を選択します',
    selectedCount: '{{count}}つの{{label}}を選択中',
    selectValue: '値を選択',
    showAllLabel: 'すべての{{label}}を表示する',
    sorryNotFound: '申し訳ありません。リクエストに対応する内容が見つかりませんでした。',
    sort: '並び替え',
    sortByLabelDirection: '{{label}}により並べ替え {{direction}}',
    stayOnThisPage: 'この画面にとどまる',
    submissionSuccessful: '送信が成功しました。',
    submit: '送信',
    submitting: '提出中...',
    success: '成功',
    successfullyCreated: '{{label}} が作成されました。',
    successfullyDuplicated: '{{label}} が複製されました。',
    successfullyReindexed:
      '{{collections}} コレクションから {{total}} 件中 {{count}} 件のドキュメントが正常に再インデックスされました。',
    takeOver: '引き継ぐ',
    thisLanguage: 'Japanese',
    time: '時間',
    timezone: 'タイムゾーン',
    titleDeleted: '{{label}} "{{title}}" が削除されました。',
    true: '真実',
    unauthorized: '未認証',
    unsavedChanges: '保存されていない変更があります。続行する前に保存または破棄してください。',
    unsavedChangesDuplicate: '未保存の変更があります。複製を続けますか？',
    untitled: 'Untitled',
    upcomingEvents: '今後のイベント',
    updatedAt: '更新日',
    updatedCountSuccessfully: '{{count}}つの{{label}}を正常に更新しました。',
    updatedSuccessfully: '更新成功。',
    updating: '更新中',
    uploading: 'アップロード中',
    uploadingBulk: '{{current}} / {{total}} をアップロード中',
    user: 'ユーザー',
    username: 'ユーザーネーム',
    users: 'ユーザー',
    value: '値',
    viewReadOnly: '読み取り専用で表示',
    welcome: 'ようこそ',
  },
  localization: {
    cannotCopySameLocale: '同じロケールにはコピーできません',
    copyFrom: 'からコピーする',
    copyFromTo: '{{from}}から{{to}}へのコピー',
    copyTo: 'コピー先',
    copyToLocale: 'ロケールにコピー',
    localeToPublish: '公開する場所',
    selectLocaleToCopy: 'コピーするロケールを選択してください',
  },
  operators: {
    contains: '含む',
    equals: '等しい',
    exists: '存在す',
    intersects: '交差する',
    isGreaterThan: 'より大きい',
    isGreaterThanOrEqualTo: '以上',
    isIn: 'あります',
    isLessThan: 'より小さい',
    isLessThanOrEqualTo: '以下',
    isLike: 'のような',
    isNotEqualTo: '等しくない',
    isNotIn: '入っていません',
    isNotLike: 'ではない',
    near: '近く',
    within: '内で',
  },
  upload: {
    addFile: 'ファイルを追加',
    addFiles: 'ファイルを追加する',
    bulkUpload: '一括アップロード',
    crop: 'クロップ',
    cropToolDescription:
      '選択したエリアのコーナーをドラッグしたり、新たなエリアを描画したり、下記の値を調整してください。',
    dragAndDrop: 'ファイルをドラッグ アンド ドロップする',
    dragAndDropHere: 'または、このエリアにファイルをドラッグ & ドロップ',
    editImage: '画像を編集する',
    fileName: 'ファイル名',
    fileSize: 'ファイル容量',
    filesToUpload: 'アップロードするファイル',
    fileToUpload: 'アップロードするファイル',
    focalPoint: '焦点',
    focalPointDescription: 'プレビュー上で焦点を直接ドラッグするか、下の値を調整してください。',
    height: '高さ',
    lessInfo: '詳細を隠す',
    moreInfo: '詳細を表示',
    noFile: 'ファイルなし',
    pasteURL: 'URLを貼り付け',
    previewSizes: 'プレビューサイズ',
    selectCollectionToBrowse: '閲覧するコレクションを選択',
    selectFile: 'ファイルを選択',
    setCropArea: 'クロップエリアを設定する',
    setFocalPoint: '焦点を設定する',
    sizes: '容量',
    sizesFor: '{{label}}のサイズ',
    width: '横幅',
  },
  validation: {
    emailAddress: '有効なメールアドレスを入力してください。',
    enterNumber: '有効な数値を入力してください。',
    fieldHasNo: '{{label}} が必要です。',
    greaterThanMax: '{{value}}は許容最大{{label}}の{{max}}を超えています。',
    invalidInput: '無効な入力値です。',
    invalidSelection: '無効な選択です。',
    invalidSelections: '次の無効な選択があります: ',
    lessThanMin: '{{value}}は許容最小{{label}}の{{min}}未満です。',
    limitReached: '制限に達しました、{{max}}個以上のアイテムを追加することはできません。',
    longerThanMin: '{{minLength}} 文字以上にする必要があります。',
    notValidDate: '"{{value}}" は有効な日付ではありません。',
    required: '必須フィールドです。',
    requiresAtLeast: '少なくとも {{count}} {{label}} 以上が必要です。',
    requiresNoMoreThan: '最大で {{count}} {{label}} 以下にする必要があります。',
    requiresTwoNumbers: '2つの数値が必要です。',
    shorterThanMax: '{{maxLength}} 文字以下にする必要があります。',
    timezoneRequired: 'タイムゾーンが必要です。',
    trueOrFalse: '"true" または "false" の値にする必要があります。',
    username:
      '有効なユーザーネームを入力してください。文字、数字、ハイフン、ピリオド、アンダースコアを使用できます。',
    validUploadID: '有効なアップロードIDではありません。',
  },
  version: {
    type: 'タイプ',
    aboutToPublishSelection: '選択中のすべての{{label}}を公開しようとしています。よろしいですか？',
    aboutToRestore:
      'この {{label}} データを {{versionDate}} 時点のバージョンに復元しようとしています。',
    aboutToRestoreGlobal:
      'グローバルな {{label}} データを {{versionDate}} 時点のバージョンに復元しようとしています。',
    aboutToRevertToPublished:
      'このデータの変更を公開時の状態に戻そうとしています。よろしいですか？',
    aboutToUnpublish: 'このデータを非公開にしようとしています。よろしいですか？',
    aboutToUnpublishSelection:
      '選択したすべての{{label}}の公開を取り消そうとしています。よろしいですか？',
    autosave: '自動保存',
    autosavedSuccessfully: '自動保存に成功しました。',
    autosavedVersion: '自動保存されたバージョン',
    changed: '変更済み',
    changedFieldsCount_one: '{{count}} 変更されたフィールド',
    changedFieldsCount_other: '{{count}}つの変更されたフィールド',
    compareVersion: 'バージョンを比較:',
    confirmPublish: '公開を確認する',
    confirmRevertToSaved: '保存された状態に戻す確認',
    confirmUnpublish: '非公開の確認',
    confirmVersionRestoration: 'バージョン復元の確認',
    currentDocumentStatus: '現在の {{docStatus}} データ',
    currentDraft: '現行の草案',
    currentPublishedVersion: '現在公開されているバージョン',
    draft: 'ドラフト',
    draftSavedSuccessfully: '下書きは正常に保存されました。',
    lastSavedAgo: '{{distance}}前に最後に保存されました',
    modifiedOnly: '変更済みのみ',
    noFurtherVersionsFound: 'その他のバージョンは見つかりませんでした。',
    noRowsFound: '{{label}} は未設定です',
    noRowsSelected: '選択された{{label}}はありません',
    preview: 'プレビュー',
    previouslyPublished: '以前に公開された',
    problemRestoringVersion: 'このバージョンの復元に問題がありました。',
    publish: '公開する',
    publishAllLocales: 'すべてのロケールを公開する',
    publishChanges: '変更内容を公開',
    published: '公開済み',
    publishIn: '{{locale}}で公開する',
    publishing: '公開',
    restoreAsDraft: '下書きとして復元',
    restoredSuccessfully: '正常に復元されました。',
    restoreThisVersion: 'このバージョンを復元',
    restoring: '復元しています...',
    reverting: '内容を戻しています...',
    revertToPublished: '公開時の内容に戻す',
    saveDraft: 'ドラフトを保存',
    scheduledSuccessfully: '正常にスケジュールされました。',
    schedulePublish: 'スケジュール公開',
    selectLocales: '表示するロケールを選択',
    selectVersionToCompare: '比較するバージョンを選択',
    showingVersionsFor: '次のバージョンを表示します：',
    showLocales: 'ロケールを表示:',
    status: 'ステータス',
    unpublish: '非公開',
    unpublishing: '非公開中...',
    version: 'バージョン',
    versionCount_many: '{{count}} バージョンがあります',
    versionCount_none: 'バージョンがありません',
    versionCount_one: '{{count}} バージョンがあります',
    versionCount_other: '{{count}}バージョンが見つかりました',
    versionCreatedOn: '{{version}} 作成日時:',
    versionID: 'バージョンID',
    versions: 'バージョン',
    viewingVersion: '表示バージョン: {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: '表示バージョン: グローバルな {{entityLabel}}',
    viewingVersions: '表示バージョン: {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: '表示バージョン: グローバルな {{entityLabel}}',
  },
}

export const ja: Language = {
  dateFNSKey: 'ja',
  translations: jaTranslations,
}
