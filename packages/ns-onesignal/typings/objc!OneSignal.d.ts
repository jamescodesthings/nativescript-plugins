declare class OSDeviceState extends NSObject {
  static alloc(): OSDeviceState; // inherited from NSObject

  static new(): OSDeviceState; // inherited from NSObject

  readonly emailAddress: string;

  readonly emailUserId: string;

  readonly hasNotificationPermission: boolean;

  readonly isEmailSubscribed: boolean;

  readonly isPushDisabled: boolean;

  readonly isSMSSubscribed: boolean;

  readonly isSubscribed: boolean;

  readonly notificationPermissionStatus: OSNotificationPermission;

  readonly pushToken: string;

  readonly smsNumber: string;

  readonly smsUserId: string;

  readonly userId: string;

  jsonRepresentation(): NSDictionary<any, any>;
}

interface OSEmailSubscriptionObserver extends NSObjectProtocol {
  onOSEmailSubscriptionChanged(stateChanges: OSEmailSubscriptionStateChanges): void;
}
declare var OSEmailSubscriptionObserver: {
  prototype: OSEmailSubscriptionObserver;
};

declare class OSEmailSubscriptionState extends NSObject {
  static alloc(): OSEmailSubscriptionState; // inherited from NSObject

  static new(): OSEmailSubscriptionState; // inherited from NSObject

  readonly emailAddress: string;

  readonly emailUserId: string;

  readonly isSubscribed: boolean;

  toDictionary(): NSDictionary<any, any>;
}

declare class OSEmailSubscriptionStateChanges extends NSObject {
  static alloc(): OSEmailSubscriptionStateChanges; // inherited from NSObject

  static new(): OSEmailSubscriptionStateChanges; // inherited from NSObject

  readonly from: OSEmailSubscriptionState;

  readonly to: OSEmailSubscriptionState;

  toDictionary(): NSDictionary<any, any>;
}

declare class OSInAppMessage extends NSObject {
  static alloc(): OSInAppMessage; // inherited from NSObject

  static new(): OSInAppMessage; // inherited from NSObject

  messageId: string;

  jsonRepresentation(): NSDictionary<any, any>;
}

declare class OSInAppMessageAction extends NSObject {
  static alloc(): OSInAppMessageAction; // inherited from NSObject

  static new(): OSInAppMessageAction; // inherited from NSObject

  clickName: string;

  clickUrl: NSURL;

  closesMessage: boolean;

  firstClick: boolean;

  outcomes: NSArray<OSInAppMessageOutcome>;

  pageId: string;

  tags: OSInAppMessageTag;

  jsonRepresentation(): NSDictionary<any, any>;
}

interface OSInAppMessageDelegate extends NSObjectProtocol {
  handleMessageAction?(action: OSInAppMessageAction): void;
}
declare var OSInAppMessageDelegate: {
  prototype: OSInAppMessageDelegate;
};

interface OSInAppMessageLifecycleHandler extends NSObjectProtocol {
  onDidDismissInAppMessage?(message: OSInAppMessage): void;

  onDidDisplayInAppMessage?(message: OSInAppMessage): void;

  onWillDismissInAppMessage?(message: OSInAppMessage): void;

  onWillDisplayInAppMessage?(message: OSInAppMessage): void;
}
declare var OSInAppMessageLifecycleHandler: {
  prototype: OSInAppMessageLifecycleHandler;
};

declare class OSInAppMessageTag extends NSObject {
  static alloc(): OSInAppMessageTag; // inherited from NSObject

  static new(): OSInAppMessageTag; // inherited from NSObject

  tagsToAdd: NSDictionary<any, any>;

  tagsToRemove: NSArray<any>;

  jsonRepresentation(): NSDictionary<any, any>;
}

declare const enum OSNotificationPermission {
  NotDetermined = 0,

  Denied = 1,

  Authorized = 2,

  Provisional = 3,

  Ephemeral = 4,
}

interface OSPermissionObserver extends NSObjectProtocol {
  onOSPermissionChanged(stateChanges: OSPermissionStateChanges): void;
}
declare var OSPermissionObserver: {
  prototype: OSPermissionObserver;
};

declare class OSPermissionState extends NSObject {
  static alloc(): OSPermissionState; // inherited from NSObject

  static new(): OSPermissionState; // inherited from NSObject

  readonly hasPrompted: boolean;

  readonly providesAppNotificationSettings: boolean;

  readonly reachable: boolean;

  readonly status: OSNotificationPermission;

  toDictionary(): NSDictionary<any, any>;
}

declare class OSPermissionStateChanges extends NSObject {
  static alloc(): OSPermissionStateChanges; // inherited from NSObject

  static new(): OSPermissionStateChanges; // inherited from NSObject

  readonly from: OSPermissionState;

  readonly to: OSPermissionState;

  toDictionary(): NSDictionary<any, any>;
}

interface OSSMSSubscriptionObserver extends NSObjectProtocol {
  onOSSMSSubscriptionChanged(stateChanges: OSSMSSubscriptionStateChanges): void;
}
declare var OSSMSSubscriptionObserver: {
  prototype: OSSMSSubscriptionObserver;
};

declare class OSSMSSubscriptionState extends NSObject {
  static alloc(): OSSMSSubscriptionState; // inherited from NSObject

  static new(): OSSMSSubscriptionState; // inherited from NSObject

  readonly isSubscribed: boolean;

  readonly smsNumber: string;

  readonly smsUserId: string;

  toDictionary(): NSDictionary<any, any>;
}

declare class OSSMSSubscriptionStateChanges extends NSObject {
  static alloc(): OSSMSSubscriptionStateChanges; // inherited from NSObject

  static new(): OSSMSSubscriptionStateChanges; // inherited from NSObject

  readonly from: OSSMSSubscriptionState;

  readonly to: OSSMSSubscriptionState;

  toDictionary(): NSDictionary<any, any>;
}

interface OSSubscriptionObserver extends NSObjectProtocol {
  onOSSubscriptionChanged(stateChanges: OSSubscriptionStateChanges): void;
}
declare var OSSubscriptionObserver: {
  prototype: OSSubscriptionObserver;
};

declare class OSSubscriptionState extends NSObject {
  static alloc(): OSSubscriptionState; // inherited from NSObject

  static new(): OSSubscriptionState; // inherited from NSObject

  readonly isPushDisabled: boolean;

  readonly isSubscribed: boolean;

  readonly pushToken: string;

  readonly userId: string;

  toDictionary(): NSDictionary<any, any>;
}

declare class OSSubscriptionStateChanges extends NSObject {
  static alloc(): OSSubscriptionStateChanges; // inherited from NSObject

  static new(): OSSubscriptionStateChanges; // inherited from NSObject

  readonly from: OSSubscriptionState;

  readonly to: OSSubscriptionState;

  toDictionary(): NSDictionary<any, any>;
}

declare class OneSignal extends NSObject {
  static addEmailSubscriptionObserver(observer: NSObject): void;

  static addPermissionObserver(observer: NSObject): void;

  static addSMSSubscriptionObserver(observer: NSObject): void;

  static addSubscriptionObserver(observer: NSObject): void;

  static addTriggerWithValue(key: string, value: any): void;

  static addTriggers(triggers: NSDictionary<string, any>): void;

  static alloc(): OneSignal; // inherited from NSObject

  static appId(): string;

  static consentGranted(granted: boolean): void;

  static deleteTag(key: string): void;

  static deleteTagOnSuccessOnFailure(key: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static deleteTags(keys: NSArray<string> | string[]): void;

  static deleteTagsOnSuccessOnFailure(keys: NSArray<any> | any[], successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static deleteTagsWithJsonString(jsonString: string): void;

  static didReceiveNotificationExtensionRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;

  static didReceiveNotificationExtensionRequestWithMutableNotificationContentWithContentHandler(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent, contentHandler: (p1: UNNotificationContent) => void): UNMutableNotificationContent;

  static disablePush(disable: boolean): void;

  static getDeviceState(): OSDeviceState;

  static getTags(successBlock: (p1: NSDictionary<any, any>) => void): void;

  static getTagsOnFailure(successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static getTriggerValueForKey(key: string): any;

  static getTriggers(): NSDictionary<string, any>;

  static initWithLaunchOptions(launchOptions: NSDictionary<any, any>): void;

  static isInAppMessagingPaused(): boolean;

  static isLocationShared(): boolean;

  static logoutEmail(): void;

  static logoutEmailWithSuccessWithFailure(successBlock: () => void, failureBlock: (p1: NSError) => void): void;

  static logoutSMSNumber(): void;

  static logoutSMSNumberWithSuccessWithFailure(successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static new(): OneSignal; // inherited from NSObject

  static onesignalLogMessage(logLevel: ONE_S_LOG_LEVEL, message: string): void;

  static pauseInAppMessages(pause: boolean): void;

  static postNotification(jsonData: NSDictionary<any, any>): void;

  static postNotificationOnSuccessOnFailure(jsonData: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static postNotificationWithJsonStringOnSuccessOnFailure(jsonData: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static promptForPushNotificationsWithUserResponse(block: (p1: boolean) => void): void;

  static promptForPushNotificationsWithUserResponseFallbackToSettings(block: (p1: boolean) => void, fallback: boolean): void;

  static promptLocation(): void;

  static registerForProvisionalAuthorization(block: (p1: boolean) => void): void;

  static removeEmailSubscriptionObserver(observer: NSObject): void;

  static removeExternalUserId(): void;

  static removeExternalUserIdWithFailure(successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static removePermissionObserver(observer: NSObject): void;

  static removeSMSSubscriptionObserver(observer: NSObject): void;

  static removeSubscriptionObserver(observer: NSObject): void;

  static removeTriggerForKey(key: string): void;

  static removeTriggersForKeys(keys: NSArray<string> | string[]): void;

  static requiresUserPrivacyConsent(): boolean;

  static sdkSemanticVersion(): string;

  static sdkVersionRaw(): string;

  static sendOutcome(name: string): void;

  static sendOutcomeOnSuccess(name: string, success: (p1: OSOutcomeEvent) => void): void;

  static sendOutcomeWithValueValue(name: string, value: number): void;

  static sendOutcomeWithValueValueOnSuccess(name: string, value: number, success: (p1: OSOutcomeEvent) => void): void;

  static sendTagValue(key: string, value: string): void;

  static sendTagValueOnSuccessOnFailure(key: string, value: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static sendTags(keyValuePair: NSDictionary<any, any>): void;

  static sendTagsOnSuccessOnFailure(keyValuePair: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static sendTagsWithJsonString(jsonString: string): void;

  static sendUniqueOutcome(name: string): void;

  static sendUniqueOutcomeOnSuccess(name: string, success: (p1: OSOutcomeEvent) => void): void;

  static serviceExtensionTimeWillExpireRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;

  static setAppId(newAppId: string): void;

  static setEmail(email: string): void;

  static setEmailWithEmailAuthHashToken(email: string, hashToken: string): void;

  static setEmailWithEmailAuthHashTokenWithSuccessWithFailure(email: string, hashToken: string, successBlock: () => void, failureBlock: (p1: NSError) => void): void;

  static setEmailWithSuccessWithFailure(email: string, successBlock: () => void, failureBlock: (p1: NSError) => void): void;

  static setExternalUserId(externalId: string): void;

  static setExternalUserIdWithExternalIdAuthHashTokenWithSuccessWithFailure(externalId: string, hashToken: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static setExternalUserIdWithSuccessWithFailure(externalId: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static setInAppMessageClickHandler(block: (p1: OSInAppMessageAction) => void): void;

  static setInAppMessageLifecycleHandler(delegate: NSObject): void;

  static setLanguage(language: string): void;

  static setLanguageWithSuccessWithFailure(language: string, successBlock: () => void, failureBlock: (p1: NSError) => void): void;

  static setLaunchURLsInApp(launchInApp: boolean): void;

  static setLocationShared(enable: boolean): void;

  static setLogLevelVisualLevel(logLevel: ONE_S_LOG_LEVEL, visualLogLevel: ONE_S_LOG_LEVEL): void;

  static setMSDKType(type: string): void;

  static setNotificationOpenedHandler(block: (p1: OSNotificationOpenedResult) => void): void;

  static setNotificationWillShowInForegroundHandler(block: (p1: OSNotification, p2: (p1: OSNotification) => void) => void): void;

  static setProvidesNotificationSettingsView(providesView: boolean): void;

  static setRequiresUserPrivacyConsent(required: boolean): void;

  static setSMSNumber(smsNumber: string): void;

  static setSMSNumberWithSMSAuthHashToken(smsNumber: string, hashToken: string): void;

  static setSMSNumberWithSMSAuthHashTokenWithSuccessWithFailure(smsNumber: string, hashToken: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  static setSMSNumberWithSuccessWithFailure(smsNumber: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;
}
