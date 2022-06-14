declare class OneSignalAttachmentHandler extends NSObject {
  static addActionButtonsToNotificationContent(notification: OSNotification, content: UNMutableNotificationContent): void;

  static addAttachmentsToNotificationContent(notification: OSNotification, content: UNMutableNotificationContent): void;

  static alloc(): OneSignalAttachmentHandler; // inherited from NSObject

  static createActionForButton(button: NSDictionary<any, any>): UNNotificationAction;

  static new(): OneSignalAttachmentHandler; // inherited from NSObject
}

declare class OneSignalExtension extends NSObject {
  static alloc(): OneSignalExtension; // inherited from NSObject

  static didReceiveNotificationExtensionRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;

  static didReceiveNotificationExtensionRequestWithMutableNotificationContentWithContentHandler(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent, contentHandler: (p1: UNNotificationContent) => void): UNMutableNotificationContent;

  static new(): OneSignalExtension; // inherited from NSObject

  static serviceExtensionTimeWillExpireRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;
}

declare class OneSignalExtensionBadgeHandler extends NSObject {
  static alloc(): OneSignalExtensionBadgeHandler; // inherited from NSObject

  static currentCachedBadgeValue(): number;

  static handleBadgeCountWithNotificationRequestWithNotificationWithMutableNotificationContent(request: UNNotificationRequest, notification: OSNotification, replacementContent: UNMutableNotificationContent): void;

  static new(): OneSignalExtensionBadgeHandler; // inherited from NSObject

  static updateCachedBadgeValue(value: number): void;
}

declare class OneSignalNotificationServiceExtensionHandler extends NSObject {
  static alloc(): OneSignalNotificationServiceExtensionHandler; // inherited from NSObject

  static didReceiveNotificationExtensionRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;

  static didReceiveNotificationExtensionRequestWithMutableNotificationContentWithContentHandler(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent, contentHandler: (p1: UNNotificationContent) => void): UNMutableNotificationContent;

  static new(): OneSignalNotificationServiceExtensionHandler; // inherited from NSObject

  static serviceExtensionTimeWillExpireRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;
}

declare class OneSignalReceiveReceiptsController extends NSObject {
  static alloc(): OneSignalReceiveReceiptsController; // inherited from NSObject

  static new(): OneSignalReceiveReceiptsController; // inherited from NSObject

  sendReceiveReceiptWithNotificationId(notificationId: string): void;

  sendReceiveReceiptWithPlayerIdNotificationIdAppId(playerId: string, notificationId: string, appId: string): void;

  sendReceiveReceiptWithPlayerIdNotificationIdAppIdDelaySuccessBlockFailureBlock(playerId: string, notificationId: string, appId: string, delay: number, success: (p1: NSDictionary<any, any>) => void, failure: (p1: NSError) => void): void;

  sendReceiveReceiptWithPlayerIdNotificationIdAppIdSuccessBlockFailureBlock(playerId: string, notificationId: string, appId: string, success: (p1: NSDictionary<any, any>) => void, failure: (p1: NSError) => void): void;
}
