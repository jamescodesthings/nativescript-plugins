declare const enum AppEntryAction {
  NOTIFICATION_CLICK = 0,

  APP_OPEN = 1,

  APP_CLOSE = 2,
}

declare const enum FocusAttributionState {
  ATTRIBUTED = 0,

  NOT_ATTRIBUTED = 1,
}

declare const enum FocusEventType {
  BACKGROUND = 0,

  END_SESSION = 1,
}

declare const enum HTTPMethod {
  GET = 0,

  POST = 1,

  HEAD = 2,

  PUT = 3,

  DELETE = 4,

  OPTIONS = 5,

  CONNECT = 6,

  TRACE = 7,
}

declare const enum ONE_S_LOG_LEVEL {
  L_NONE = 0,

  L_FATAL = 1,

  L_ERROR = 2,

  L_WARN = 3,

  L_INFO = 4,

  L_DEBUG = 5,

  L_VERBOSE = 6,
}

interface OSJSONDecodable {}
declare var OSJSONDecodable: {
  prototype: OSJSONDecodable;

  instancePreviewFromNotification(notification: OSNotification): OSJSONDecodable;

  instanceWithData(data: NSData): OSJSONDecodable;

  instanceWithJson(json: NSDictionary<any, any>): OSJSONDecodable;
};

interface OSJSONEncodable {
  jsonRepresentation(): NSDictionary<any, any>;
}
declare var OSJSONEncodable: {
  prototype: OSJSONEncodable;
};

declare class OSNotification extends NSObject {
  static alloc(): OSNotification; // inherited from NSObject

  static new(): OSNotification; // inherited from NSObject

  static parseWithApns(message: NSDictionary<any, any>): OSNotification;

  readonly actionButtons: NSArray<any>;

  readonly additionalData: NSDictionary<any, any>;

  readonly attachments: NSDictionary<any, any>;

  readonly badge: number;

  readonly badgeIncrement: number;

  readonly body: string;

  readonly category: string;

  readonly collapseId: string;

  readonly contentAvailable: boolean;

  readonly interruptionLevel: string;

  readonly launchURL: string;

  readonly mutableContent: boolean;

  readonly notificationId: string;

  readonly rawPayload: NSDictionary<any, any>;

  readonly relevanceScore: number;

  readonly sound: string;

  readonly subtitle: string;

  readonly templateId: string;

  readonly templateName: string;

  readonly threadId: string;

  readonly title: string;

  complete(notification: OSNotification): void;

  jsonRepresentation(): NSDictionary<any, any>;

  setCompletionBlock(completion: (p1: OSNotification) => void): void;

  startTimeoutTimer(): void;

  stringify(): string;
}

declare class OSNotificationAction extends NSObject {
  static alloc(): OSNotificationAction; // inherited from NSObject

  static new(): OSNotificationAction; // inherited from NSObject

  readonly actionId: string;

  readonly type: OSNotificationActionType;
}

declare const enum OSNotificationActionType {
  Opened = 0,

  ActionTaken = 1,
}

declare class OSNotificationOpenedResult extends NSObject {
  static alloc(): OSNotificationOpenedResult; // inherited from NSObject

  static new(): OSNotificationOpenedResult; // inherited from NSObject

  readonly action: OSNotificationAction;

  readonly notification: OSNotification;

  jsonRepresentation(): NSDictionary<any, any>;

  stringify(): string;
}

declare class OSPrivacyConsentController extends NSObject {
  static alloc(): OSPrivacyConsentController; // inherited from NSObject

  static consentGranted(granted: boolean): void;

  static new(): OSPrivacyConsentController; // inherited from NSObject

  static requiresUserPrivacyConsent(): boolean;

  static shouldLogMissingPrivacyConsentErrorWithMethodName(methodName: string): boolean;
}

declare class OSRequestBadgeCount extends OneSignalRequest {
  static alloc(): OSRequestBadgeCount; // inherited from NSObject

  static new(): OSRequestBadgeCount; // inherited from NSObject

  static withUserIdAppIdBadgeCountEmailAuthTokenExternalIdAuthToken(userId: string, appId: string, badgeCount: number, emailAuthHash: string, externalIdAuthToken: string): OSRequestBadgeCount;

  static withUserIdAppIdBadgeCountSmsAuthTokenExternalIdAuthToken(userId: string, appId: string, badgeCount: number, smsAuthToken: string, externalIdAuthToken: string): OSRequestBadgeCount;
}

declare class OSRequestCreateDevice extends OneSignalRequest {
  static alloc(): OSRequestCreateDevice; // inherited from NSObject

  static new(): OSRequestCreateDevice; // inherited from NSObject

  static withAppIdWithDeviceTypeWithEmailWithPlayerIdWithEmailAuthHashWithExternalUserIdWithExternalIdAuthToken(appId: string, deviceType: number, email: string, playerId: string, emailAuthHash: string, externalUserId: string, externalIdAuthToken: string): OSRequestCreateDevice;

  static withAppIdWithDeviceTypeWithSMSNumberWithPlayerIdWithSMSAuthHashWithExternalUserIdWithExternalIdAuthToken(appId: string, deviceType: number, smsNumber: string, playerId: string, smsAuthHash: string, externalUserId: string, externalIdAuthToken: string): OSRequestCreateDevice;
}

declare class OSRequestGetIosParams extends OneSignalRequest {
  static alloc(): OSRequestGetIosParams; // inherited from NSObject

  static new(): OSRequestGetIosParams; // inherited from NSObject

  static withUserIdAppId(userId: string, appId: string): OSRequestGetIosParams;
}

declare class OSRequestGetTags extends OneSignalRequest {
  static alloc(): OSRequestGetTags; // inherited from NSObject

  static new(): OSRequestGetTags; // inherited from NSObject

  static withUserIdAppId(userId: string, appId: string): OSRequestGetTags;
}

declare class OSRequestLogoutEmail extends OneSignalRequest {
  static alloc(): OSRequestLogoutEmail; // inherited from NSObject

  static new(): OSRequestLogoutEmail; // inherited from NSObject

  static withAppIdEmailPlayerIdDevicePlayerIdEmailAuthHash(appId: string, emailPlayerId: string, devicePlayerId: string, emailAuthHash: string): OSRequestLogoutEmail;
}

declare class OSRequestLogoutSMS extends OneSignalRequest {
  static alloc(): OSRequestLogoutSMS; // inherited from NSObject

  static new(): OSRequestLogoutSMS; // inherited from NSObject

  static withAppIdSmsPlayerIdSmsAuthHashDevicePlayerId(appId: string, smsPlayerId: string, smsAuthHash: string, devicePlayerId: string): OSRequestLogoutSMS;
}

declare class OSRequestPostNotification extends OneSignalRequest {
  static alloc(): OSRequestPostNotification; // inherited from NSObject

  static new(): OSRequestPostNotification; // inherited from NSObject

  static withAppIdWithJson(appId: string, json: NSMutableDictionary<any, any>): OSRequestPostNotification;
}

declare class OSRequestRegisterUser extends OneSignalRequest {
  static alloc(): OSRequestRegisterUser; // inherited from NSObject

  static new(): OSRequestRegisterUser; // inherited from NSObject

  static withDataUserId(registrationData: NSDictionary<any, any>, userId: string): OSRequestRegisterUser;
}

declare class OSRequestSendPurchases extends OneSignalRequest {
  static alloc(): OSRequestSendPurchases; // inherited from NSObject

  static new(): OSRequestSendPurchases; // inherited from NSObject

  static withUserIdEmailAuthTokenAppIdWithPurchases(userId: string, emailAuthToken: string, appId: string, purchases: NSArray<any> | any[]): OSRequestSendPurchases;

  static withUserIdExternalIdAuthTokenAppIdWithPurchases(userId: string, externalIdAuthToken: string, appId: string, purchases: NSArray<any> | any[]): OSRequestSendPurchases;
}

declare class OSRequestSendTagsToServer extends OneSignalRequest {
  static alloc(): OSRequestSendTagsToServer; // inherited from NSObject

  static new(): OSRequestSendTagsToServer; // inherited from NSObject

  static withUserIdAppIdTagsNetworkTypeWithEmailAuthHashTokenWithExternalIdAuthHashToken(userId: string, appId: string, tags: NSDictionary<any, any>, netType: number, emailAuthToken: string, externalIdAuthToken: string): OSRequestSendTagsToServer;

  static withUserIdAppIdTagsNetworkTypeWithSMSAuthHashTokenWithExternalIdAuthHashToken(userId: string, appId: string, tags: NSDictionary<any, any>, netType: number, smsAuthToken: string, externalIdAuthToken: string): OSRequestSendTagsToServer;
}

declare class OSRequestSubmitNotificationOpened extends OneSignalRequest {
  static alloc(): OSRequestSubmitNotificationOpened; // inherited from NSObject

  static new(): OSRequestSubmitNotificationOpened; // inherited from NSObject

  static withUserIdAppIdWasOpenedMessageIdWithDeviceType(userId: string, appId: string, opened: boolean, messageId: string, deviceType: number): OSRequestSubmitNotificationOpened;
}

declare class OSRequestSyncHashedEmail extends OneSignalRequest {
  static alloc(): OSRequestSyncHashedEmail; // inherited from NSObject

  static new(): OSRequestSyncHashedEmail; // inherited from NSObject

  static withUserIdAppIdEmailNetworkType(userId: string, appId: string, email: string, netType: number): OSRequestSyncHashedEmail;
}

declare class OSRequestTrackV1 extends OneSignalRequest {
  static alloc(): OSRequestTrackV1; // inherited from NSObject

  static new(): OSRequestTrackV1; // inherited from NSObject

  static trackUsageDataAppId(osUsageData: string, appId: string): OSRequestTrackV1;
}

declare class OSRequestUpdateDeviceToken extends OneSignalRequest {
  static alloc(): OSRequestUpdateDeviceToken; // inherited from NSObject

  static new(): OSRequestUpdateDeviceToken; // inherited from NSObject

  static withUserIdAppIdDeviceTokenNotificationTypesExternalIdAuthToken(userId: string, appId: string, identifier: string, notificationTypes: number, externalIdAuthToken: string): OSRequestUpdateDeviceToken;

  static withUserIdAppIdDeviceTokenSmsAuthTokenExternalIdAuthToken(userId: string, appId: string, identifier: string, smsAuthToken: string, externalIdAuthToken: string): OSRequestUpdateDeviceToken;

  static withUserIdAppIdDeviceTokenWithParentIdEmailAuthTokenEmailExternalIdAuthToken(userId: string, appId: string, identifier: string, parentId: string, emailAuthHash: string, email: string, externalIdAuthToken: string): OSRequestUpdateDeviceToken;
}

declare class OSRequestUpdateExternalUserId extends OneSignalRequest {
  static alloc(): OSRequestUpdateExternalUserId; // inherited from NSObject

  static new(): OSRequestUpdateExternalUserId; // inherited from NSObject

  static withUserIdWithUserIdHashTokenWithOneSignalUserIdAppId(externalId: string, hashToken: string, userId: string, appId: string): OSRequestUpdateExternalUserId;

  static withUserIdWithUserIdHashTokenWithOneSignalUserIdWithEmailHashTokenAppId(externalId: string, hashToken: string, userId: string, emailHashToken: string, appId: string): OSRequestUpdateExternalUserId;

  static withUserIdWithUserIdHashTokenWithOneSignalUserIdWithSMSHashTokenAppId(externalId: string, hashToken: string, userId: string, smsHashToken: string, appId: string): OSRequestUpdateExternalUserId;
}

declare class OSRequestUpdateLanguage extends OneSignalRequest {
  static alloc(): OSRequestUpdateLanguage; // inherited from NSObject

  static new(): OSRequestUpdateLanguage; // inherited from NSObject

  static withUserIdAppIdLanguageEmailAuthTokenExternalIdAuthToken(userId: string, appId: string, language: string, emailAuthHash: string, externalIdAuthToken: string): OSRequestUpdateLanguage;

  static withUserIdAppIdLanguageSmsAuthTokenExternalIdAuthToken(userId: string, appId: string, language: string, smsAuthToken: string, externalIdAuthToken: string): OSRequestUpdateLanguage;
}

declare class OSRequestUpdateNotificationTypes extends OneSignalRequest {
  static alloc(): OSRequestUpdateNotificationTypes; // inherited from NSObject

  static new(): OSRequestUpdateNotificationTypes; // inherited from NSObject

  static withUserIdAppIdNotificationTypes(userId: string, appId: string, notificationTypes: number): OSRequestUpdateNotificationTypes;
}

declare class OneSignalClient extends NSObject {
  static alloc(): OneSignalClient; // inherited from NSObject

  static new(): OneSignalClient; // inherited from NSObject

  static sharedClient(): OneSignalClient;

  executeDataRequestOnSuccessOnFailure(request: OneSignalRequest, successBlock: (p1: NSData) => void, failureBlock: (p1: NSError) => void): void;

  executeRequestOnSuccessOnFailure(request: OneSignalRequest, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  executeSimultaneousRequestsWithCompletion(requests: NSDictionary<string, OneSignalRequest>, completionBlock: (p1: NSDictionary<any, any>) => void): void;

  executeSimultaneousRequestsWithSuccessOnFailure(requests: NSDictionary<string, OneSignalRequest>, successBlock: (p1: NSDictionary<string, NSDictionary<any, any>>) => void, failureBlock: (p1: NSDictionary<string, NSError>) => void): void;

  executeSynchronousRequestOnSuccessOnFailure(request: OneSignalRequest, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;
}

declare class OneSignalCore extends NSObject {
  static alloc(): OneSignalCore; // inherited from NSObject

  static new(): OneSignalCore; // inherited from NSObject
}

declare class OneSignalCoreHelper extends NSObject {
  static alloc(): OneSignalCoreHelper; // inherited from NSObject

  static dispatch_async_on_main_queue(block: () => void): void;

  static hashUsingMD5(string: string): string;

  static hashUsingSha1(string: string): string;

  static new(): OneSignalCoreHelper; // inherited from NSObject

  static performSelectorOnMainThreadOnObjectWithObjectAfterDelay(aSelector: string, targetObj: any, anArgument: any, delay: number): void;

  static runOnMainThread(block: () => void): void;

  static trimURLSpacing(url: string): string;
}

declare class OneSignalLog extends NSObject {
  static alloc(): OneSignalLog; // inherited from NSObject

  static new(): OneSignalLog; // inherited from NSObject

  static onesignalLogMessage(logLevel: ONE_S_LOG_LEVEL, message: string): void;

  static setLogLevel(logLevel: ONE_S_LOG_LEVEL): void;
}

declare class OneSignalRequest extends NSObject {
  static alloc(): OneSignalRequest; // inherited from NSObject

  static new(): OneSignalRequest; // inherited from NSObject

  additionalHeaders: NSDictionary<string, string>;

  dataRequest: boolean;

  disableLocalCaching: boolean;

  method: HTTPMethod;

  parameters: NSDictionary<any, any>;

  path: string;

  reattemptCount: number;

  missingAppId(): boolean;

  urlRequest(): NSMutableURLRequest;
}

declare class OneSignalTrackFirebaseAnalytics extends NSObject {
  static alloc(): OneSignalTrackFirebaseAnalytics; // inherited from NSObject

  static init(): void;

  static libraryExists(): boolean;

  static new(): OneSignalTrackFirebaseAnalytics; // inherited from NSObject

  static trackInfluenceOpenEvent(): void;

  static trackOpenEvent(results: OSNotificationOpenedResult): void;

  static trackReceivedEvent(notification: OSNotification): void;

  static updateFromDownloadParams(params: NSDictionary<any, any>): void;
}

declare class OneSignalUserDefaults extends NSObject {
  static alloc(): OneSignalUserDefaults; // inherited from NSObject

  static appGroupName(): string;

  static initShared(): OneSignalUserDefaults;

  static initStandard(): OneSignalUserDefaults;

  static new(): OneSignalUserDefaults; // inherited from NSObject

  userDefaults: NSUserDefaults;

  getSavedBoolForKeyDefaultValue(key: string, value: boolean): boolean;

  getSavedCodeableDataForKeyDefaultValue(key: string, value: any): any;

  getSavedDictionaryForKeyDefaultValue(key: string, value: NSDictionary<any, any>): NSDictionary<any, any>;

  getSavedDoubleForKeyDefaultValue(key: string, value: number): number;

  getSavedIntegerForKeyDefaultValue(key: string, value: number): number;

  getSavedObjectForKeyDefaultValue(key: string, value: any): any;

  getSavedSetForKeyDefaultValue(key: string, value: NSSet<any>): NSSet<any>;

  getSavedStringForKeyDefaultValue(key: string, value: string): string;

  keyExists(key: string): boolean;

  removeValueForKey(key: string): void;

  saveBoolForKeyWithValue(key: string, value: boolean): void;

  saveCodeableDataForKeyWithValue(key: string, value: any): void;

  saveDictionaryForKeyWithValue(key: string, value: NSDictionary<any, any>): void;

  saveDoubleForKeyWithValue(key: string, value: number): void;

  saveIntegerForKeyWithValue(key: string, value: number): void;

  saveObjectForKeyWithValue(key: string, value: any): void;

  saveSetForKeyWithValue(key: string, value: NSSet<any>): void;

  saveStringForKeyWithValue(key: string, value: string): void;
}

declare const enum PromptActionResult {
  PERMISSION_GRANTED = 0,

  PERMISSION_DENIED = 1,

  LOCATION_PERMISSIONS_MISSING_INFO_PLIST = 2,

  ERROR = 3,
}
