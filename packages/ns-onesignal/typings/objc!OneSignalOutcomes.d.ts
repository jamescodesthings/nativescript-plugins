declare var DEFAULT_INDIRECT_ATTRIBUTION_WINDOW: number;

declare var DEFAULT_INDIRECT_NOTIFICATION_LIMIT: number;

declare class OSCachedUniqueOutcome extends NSObject {
  static alloc(): OSCachedUniqueOutcome; // inherited from NSObject

  static new(): OSCachedUniqueOutcome; // inherited from NSObject

  readonly channel: OSInfluenceChannel;

  readonly name: string;

  readonly timestamp: number;

  readonly uniqueId: string;

  constructor(o: { paramsName: string; uniqueId: string; channel: OSInfluenceChannel });

  constructor(o: { paramsName: string; uniqueId: string; timestamp: number; channel: OSInfluenceChannel });

  initWithParamsNameUniqueIdChannel(name: string, uniqueId: string, channel: OSInfluenceChannel): this;

  initWithParamsNameUniqueIdTimestampChannel(name: string, uniqueId: string, timestamp: number, channel: OSInfluenceChannel): this;
}

declare class OSChannelTracker extends NSObject {
  static alloc(): OSChannelTracker; // inherited from NSObject

  static new(): OSChannelTracker; // inherited from NSObject

  readonly dataRepository: OSInfluenceDataRepository;

  directId: string;

  indirectIds: NSArray<any>;

  influenceType: OSInfluenceType;

  constructor(o: { repository: OSInfluenceDataRepository });

  cacheState(): void;

  currentSessionInfluence(): OSInfluence;

  idTag(): string;

  initInfluencedTypeFromCache(): void;

  initWithRepository(dataRepository: OSInfluenceDataRepository): this;

  lastReceivedIds(): NSArray<any>;

  resetAndInitInfluence(): void;

  saveLastId(lastId: string): void;
}

declare class OSInAppMessageOutcome extends NSObject implements OSJSONDecodable {
  static alloc(): OSInAppMessageOutcome; // inherited from NSObject

  static instancePreviewFromNotification(notification: OSNotification): OSInAppMessageOutcome;

  static instanceWithData(data: NSData): OSInAppMessageOutcome;

  static instanceWithJson(json: NSDictionary<any, any>): OSInAppMessageOutcome;

  static new(): OSInAppMessageOutcome; // inherited from NSObject

  name: string;

  unique: boolean;

  weight: number;

  jsonRepresentation(): NSDictionary<any, any>;
}

declare class OSIndirectInfluence extends NSObject implements NSCoding, OSJSONDecodable, OSJSONEncodable {
  static alloc(): OSIndirectInfluence; // inherited from NSObject

  static instancePreviewFromNotification(notification: OSNotification): OSIndirectInfluence;

  static instanceWithData(data: NSData): OSIndirectInfluence;

  static instanceWithJson(json: NSDictionary<any, any>): OSIndirectInfluence;

  static new(): OSIndirectInfluence; // inherited from NSObject

  readonly channelIdTag: string;

  readonly influenceId: string;

  readonly timestamp: number;

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  constructor(o: { paramsInfluenceId: string; forChannel: string; timestamp: number });

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  initWithParamsInfluenceIdForChannelTimestamp(influenceId: string, channelIdTag: string, timestamp: number): this;

  jsonRepresentation(): NSDictionary<any, any>;
}

declare class OSInfluence extends NSObject {
  static alloc(): OSInfluence; // inherited from NSObject

  static new(): OSInfluence; // inherited from NSObject

  ids: NSArray<any>;

  readonly influenceChannel: OSInfluenceChannel;

  readonly influenceType: OSInfluenceType;

  constructor(o: { builder: OSInfluenceBuilder });

  copy(): OSInfluence;

  initWithBuilder(builder: OSInfluenceBuilder): this;

  isAttributedInfluence(): boolean;

  isDirectInfluence(): boolean;

  isIndirectInfluence(): boolean;

  isUnattributedInfluence(): boolean;
}

declare class OSInfluenceBuilder extends NSObject {
  static alloc(): OSInfluenceBuilder; // inherited from NSObject

  static new(): OSInfluenceBuilder; // inherited from NSObject

  ids: NSArray<any>;

  influenceChannel: OSInfluenceChannel;

  influenceType: OSInfluenceType;
}

declare const enum OSInfluenceChannel {
  IN_APP_MESSAGE = 0,

  NOTIFICATION = 1,
}

declare class OSInfluenceDataRepository extends NSObject {
  static alloc(): OSInfluenceDataRepository; // inherited from NSObject

  static new(): OSInfluenceDataRepository; // inherited from NSObject

  static sharedInfluenceDataRepository(): OSInfluenceDataRepository;

  cacheIAMInfluenceType(influenceType: OSInfluenceType): void;

  cacheIndirectNotifications(notifications: NSArray<any> | any[]): void;

  cacheNotificationInfluenceType(influenceType: OSInfluenceType): void;

  cacheNotificationOpenId(notificationId: string): void;

  cachedIndirectNotifications(): NSArray<any>;

  cachedNotificationOpenId(): string;

  iamCachedInfluenceType(): OSInfluenceType;

  iamIndirectAttributionWindow(): number;

  iamLimit(): number;

  isDirectInfluenceEnabled(): boolean;

  isIndirectInfluenceEnabled(): boolean;

  isUnattributedInfluenceEnabled(): boolean;

  lastIAMsReceivedData(): NSArray<any>;

  lastNotificationsReceivedData(): NSArray<any>;

  notificationCachedInfluenceType(): OSInfluenceType;

  notificationIndirectAttributionWindow(): number;

  notificationLimit(): number;

  saveIAMs(iams: NSArray<any> | any[]): void;

  saveInfluenceParams(params: NSDictionary<any, any>): void;

  saveNotifications(notifications: NSArray<any> | any[]): void;
}

declare const enum OSInfluenceType {
  DIRECT = 0,

  INDIRECT = 1,

  UNATTRIBUTED = 2,

  DISABLED = 3,
}

declare class OSOutcomeEvent extends NSObject implements OSJSONEncodable {
  static alloc(): OSOutcomeEvent; // inherited from NSObject

  static new(): OSOutcomeEvent; // inherited from NSObject

  name: string;

  notificationIds: NSArray<any>;

  session: OSInfluenceType;

  timestamp: number;

  weight: NSDecimalNumber;

  constructor(o: { fromOutcomeEventParams: OSOutcomeEventParams });

  constructor(o: { session: OSInfluenceType; notificationIds: NSArray<any> | any[]; name: string; timestamp: number; weight: number });

  initFromOutcomeEventParams(eventParams: OSOutcomeEventParams): this;

  initWithSessionNotificationIdsNameTimestampWeight(session: OSInfluenceType, notificationIds: NSArray<any> | any[], name: string, timestamp: number, value: number): this;

  jsonRepresentation(): NSDictionary<any, any>;
}

declare class OSOutcomeEventParams extends NSObject {
  static alloc(): OSOutcomeEventParams; // inherited from NSObject

  static new(): OSOutcomeEventParams; // inherited from NSObject

  outcomeId: string;

  outcomeSource: OSOutcomeSource;

  timestamp: number;

  weight: number;

  constructor(o: { outcomeId: string; outcomeSource: OSOutcomeSource; weight: number; timestamp: number });

  initWithOutcomeIdOutcomeSourceWeightTimestamp(outcomeId: string, outcomeSource: OSOutcomeSource, weight: number, timestamp: number): this;

  toDictionaryObject(): NSDictionary<any, any>;
}

declare class OSOutcomeEventsCache extends NSObject {
  static alloc(): OSOutcomeEventsCache; // inherited from NSObject

  static new(): OSOutcomeEventsCache; // inherited from NSObject

  static sharedOutcomeEventsCache(): OSOutcomeEventsCache;

  getAttributedUniqueOutcomeEventSent(): NSArray<any>;

  getUnattributedUniqueOutcomeEventsSent(): NSSet<any>;

  isOutcomesV2ServiceEnabled(): boolean;

  saveAttributedUniqueOutcomeEventNotificationIds(attributedUniqueOutcomeEventNotificationIdsSent: NSArray<any> | any[]): void;

  saveOutcomesV2ServiceEnabled(isEnabled: boolean): void;

  saveUnattributedUniqueOutcomeEventsSent(unattributedUniqueOutcomeEventsSentSet: NSSet<any>): void;
}

declare class OSOutcomeEventsFactory extends NSObject {
  static alloc(): OSOutcomeEventsFactory; // inherited from NSObject

  static new(): OSOutcomeEventsFactory; // inherited from NSObject

  constructor(o: { cache: OSOutcomeEventsCache });

  initWithCache(cache: OSOutcomeEventsCache): this;

  repository(): OSOutcomeEventsRepository;
}

declare class OSOutcomeEventsRepository extends NSObject {
  static alloc(): OSOutcomeEventsRepository; // inherited from NSObject

  static new(): OSOutcomeEventsRepository; // inherited from NSObject

  readonly outcomeEventsCache: OSOutcomeEventsCache;

  constructor(o: { cache: OSOutcomeEventsCache });

  getNotCachedUniqueInfluencesForOutcomeInfluences(name: string, influences: NSArray<OSInfluence> | OSInfluence[]): NSArray<any>;

  getUnattributedUniqueOutcomeEventsSent(): NSSet<any>;

  initWithCache(outcomeEventsCache: OSOutcomeEventsCache): this;

  requestMeasureOutcomeEventWithAppIdDeviceTypeEventOnSuccessOnFailure(appId: string, deviceType: number, event: OSOutcomeEventParams, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

  saveUnattributedUniqueOutcomeEventsSent(unattributedUniqueOutcomeEventsSentSet: NSSet<any>): void;

  saveUniqueOutcomeEventParams(eventParams: OSOutcomeEventParams): void;
}

declare class OSOutcomeSource extends NSObject {
  static alloc(): OSOutcomeSource; // inherited from NSObject

  static new(): OSOutcomeSource; // inherited from NSObject

  directBody: OSOutcomeSourceBody;

  indirectBody: OSOutcomeSourceBody;

  constructor(o: { directBody: OSOutcomeSourceBody; indirectBody: OSOutcomeSourceBody });

  initWithDirectBodyIndirectBody(directBody: OSOutcomeSourceBody, indirectBody: OSOutcomeSourceBody): this;

  toDictionaryObject(): NSDictionary<any, any>;
}

declare class OSOutcomeSourceBody extends NSObject {
  static alloc(): OSOutcomeSourceBody; // inherited from NSObject

  static new(): OSOutcomeSourceBody; // inherited from NSObject

  inAppMessagesIds: NSArray<any>;

  notificationIds: NSArray<any>;

  constructor(o: { notificationIds: NSArray<any> | any[]; inAppMessagesIds: NSArray<any> | any[] });

  initWithNotificationIdsInAppMessagesIds(notificationIds: NSArray<any> | any[], inAppMessagesIds: NSArray<any> | any[]): this;

  toDictionaryObject(): NSDictionary<any, any>;
}

declare class OSSessionManager extends NSObject {
  static alloc(): OSSessionManager; // inherited from NSObject

  static new(): OSSessionManager; // inherited from NSObject

  static resetSharedSessionManager(): void;

  static sharedSessionManager(): OSSessionManager;

  delegate: SessionStatusDelegate;

  constructor(o: { withTrackerFactory: typeof NSObject });

  attemptSessionUpgrade(entryAction: AppEntryAction): void;

  getInfluences(): NSArray<OSInfluence>;

  getSessionInfluences(): NSArray<OSInfluence>;

  initSessionFromCache(): void;

  initWithTrackerFactory(delegate: typeof NSObject, trackerFactory: OSTrackerFactory): this;

  onDirectInfluenceFromIAMClick(directIAMId: string): void;

  onDirectInfluenceFromIAMClickFinished(): void;

  onDirectInfluenceFromNotificationOpenWithNotificationId(entryAction: AppEntryAction, directNotificationId: string): void;

  onInAppMessageReceived(messageId: string): void;

  onNotificationReceived(notificationId: string): void;

  restartSessionIfNeeded(entryAction: AppEntryAction): void;
}

declare class OSTrackerFactory extends NSObject {
  static alloc(): OSTrackerFactory; // inherited from NSObject

  static new(): OSTrackerFactory; // inherited from NSObject

  static sharedTrackerFactory(): OSTrackerFactory;

  constructor(o: { repository: OSInfluenceDataRepository });

  channelByEntryAction(entryAction: AppEntryAction): OSChannelTracker;

  channels(): NSArray<OSChannelTracker>;

  channelsToResetByEntryAction(entryAction: AppEntryAction): NSArray<OSChannelTracker>;

  iamChannelTracker(): OSChannelTracker;

  influences(): NSArray<OSInfluence>;

  initFromCache(): void;

  initWithRepository(dataRepository: OSInfluenceDataRepository): this;

  notificationChannelTracker(): OSChannelTracker;

  saveInfluenceParams(params: NSDictionary<any, any>): void;

  sessionInfluences(): NSArray<OSInfluence>;
}

declare class OneSignalOutcomeEventsController extends NSObject {
  static alloc(): OneSignalOutcomeEventsController; // inherited from NSObject

  static new(): OneSignalOutcomeEventsController; // inherited from NSObject

  constructor(o: { sessionManager: OSSessionManager; outcomeEventsFactory: OSOutcomeEventsFactory });

  clearOutcomes(): void;

  initWithSessionManagerOutcomeEventsFactory(sessionManager: OSSessionManager, outcomeEventsFactory: OSOutcomeEventsFactory): this;

  sendClickActionOutcomesAppIdDeviceType(outcomes: NSArray<OSInAppMessageOutcome> | OSInAppMessageOutcome[], appId: string, deviceType: number): void;

  sendOutcomeEventAppIdDeviceTypeSuccessBlock(name: string, appId: string, deviceType: number, success: (p1: OSOutcomeEvent) => void): void;

  sendOutcomeEventWithValueValueAppIdDeviceTypeSuccessBlock(name: string, weight: number, appId: string, deviceType: number, success: (p1: OSOutcomeEvent) => void): void;

  sendUniqueOutcomeEventAppIdDeviceTypeSuccessBlock(name: string, appId: string, deviceType: number, success: (p1: OSOutcomeEvent) => void): void;
}

declare class OneSignalOutcomes extends NSObject {
  static alloc(): OneSignalOutcomes; // inherited from NSObject

  static migrate(): void;

  static new(): OneSignalOutcomes; // inherited from NSObject
}

interface SessionStatusDelegate extends NSObjectProtocol {}
declare var SessionStatusDelegate: {
  prototype: SessionStatusDelegate;

  onSessionEnding(lastInfluences: NSArray<OSInfluence> | OSInfluence[]): void;
};
