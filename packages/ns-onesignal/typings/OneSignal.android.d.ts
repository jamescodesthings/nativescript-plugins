/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module onesignal {
    export class ADMMessageHandler {
      public static class: java.lang.Class<com.onesignal.ADMMessageHandler>;
      public onRegistrationError(param0: string): void;
      public onUnregistered(param0: string): void;
      public onMessage(param0: globalAndroid.content.Intent): void;
      public constructor();
      public onRegistered(param0: string): void;
    }
    export module ADMMessageHandler {
      export class Receiver {
        public static class: java.lang.Class<com.onesignal.ADMMessageHandler.Receiver>;
        public constructor();
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class ADMMessageHandlerJob {
      public static class: java.lang.Class<com.onesignal.ADMMessageHandlerJob>;
      public onMessage(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
      public onUnregistered(param0: globalAndroid.content.Context, param1: string): void;
      public onRegistered(param0: globalAndroid.content.Context, param1: string): void;
      public constructor();
      public onRegistrationError(param0: globalAndroid.content.Context, param1: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class ActivityLifecycleHandler extends com.onesignal.OSSystemConditionController.OSSystemConditionHandler {
      public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler>;
      public removeSystemConditionObserver(param0: string, param1: com.onesignal.ActivityLifecycleHandler.KeyboardListener): void;
      public getCurActivity(): globalAndroid.app.Activity;
      public setCurActivity(param0: globalAndroid.app.Activity): void;
      public constructor(param0: com.onesignal.OSFocusHandler);
    }
    export module ActivityLifecycleHandler {
      export abstract class ActivityAvailableListener {
        public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener>;
      }
      export class KeyboardListener {
        public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler.KeyboardListener>;
        public onGlobalLayout(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class ActivityLifecycleListener {
      public static class: java.lang.Class<com.onesignal.ActivityLifecycleListener>;
      public static getActivityLifecycleHandler(): com.onesignal.ActivityLifecycleHandler;
      public onActivityResumed(param0: globalAndroid.app.Activity): void;
      public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
      public onActivityPaused(param0: globalAndroid.app.Activity): void;
      public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
      public onActivityStarted(param0: globalAndroid.app.Activity): void;
      public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
      public onActivityStopped(param0: globalAndroid.app.Activity): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class AlertDialogPrepromptForAndroidSettings {
      public static class: java.lang.Class<com.onesignal.AlertDialogPrepromptForAndroidSettings>;
      public static INSTANCE: com.onesignal.AlertDialogPrepromptForAndroidSettings;
      public show(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: com.onesignal.AlertDialogPrepromptForAndroidSettings.Callback): void;
    }
    export module AlertDialogPrepromptForAndroidSettings {
      export class Callback {
        public static class: java.lang.Class<com.onesignal.AlertDialogPrepromptForAndroidSettings.Callback>;
        /**
         * Constructs a new instance of the com.onesignal.AlertDialogPrepromptForAndroidSettings$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onAccept(): void; onDecline(): void });
        public constructor();
        public onDecline(): void;
        public onAccept(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class AndroidSupportV4Compat {
      public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat>;
    }
    export module AndroidSupportV4Compat {
      export class ActivityCompat {
        public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.ActivityCompat>;
      }
      export class ActivityCompatApi23 {
        public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.ActivityCompatApi23>;
      }
      export class ContextCompat {
        public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.ContextCompat>;
      }
      export class RequestPermissionsRequestCodeValidator {
        public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.RequestPermissionsRequestCodeValidator>;
        /**
         * Constructs a new instance of the com.onesignal.AndroidSupportV4Compat$RequestPermissionsRequestCodeValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { validateRequestPermissionsRequestCode(param0: number): void });
        public constructor();
        public validateRequestPermissionsRequestCode(param0: number): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class BackgroundRunnable {
      public static class: java.lang.Class<com.onesignal.BackgroundRunnable>;
      public run(): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class BadgeCountUpdater {
      public static class: java.lang.Class<com.onesignal.BadgeCountUpdater>;
    }
  }
}

declare module com {
  export module onesignal {
    export class BootUpReceiver {
      public static class: java.lang.Class<com.onesignal.BootUpReceiver>;
      public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class BuildConfig {
      public static class: java.lang.Class<com.onesignal.BuildConfig>;
      public static DEBUG: boolean;
      public static LIBRARY_PACKAGE_NAME: string;
      public static BUILD_TYPE: string;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class BundleCompat<T> extends java.lang.Object {
      public static class: java.lang.Class<com.onesignal.BundleCompat<any>>;
      /**
       * Constructs a new instance of the com.onesignal.BundleCompat<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { putString(param0: string, param1: string): void; putInt(param0: string, param1: java.lang.Integer): void; putLong(param0: string, param1: java.lang.Long): void; putBoolean(param0: string, param1: java.lang.Boolean): void; getString(param0: string): string; getInt(param0: string): java.lang.Integer; getLong(param0: string): java.lang.Long; getBoolean(param0: string): boolean; getBoolean(param0: string, param1: boolean): boolean; containsKey(param0: string): boolean; getBundle(): T; setBundle(param0: globalAndroid.os.Parcelable): void });
      public constructor();
      public putBoolean(param0: string, param1: java.lang.Boolean): void;
      public getInt(param0: string): java.lang.Integer;
      public putLong(param0: string, param1: java.lang.Long): void;
      public putString(param0: string, param1: string): void;
      public getBoolean(param0: string): boolean;
      public getBoolean(param0: string, param1: boolean): boolean;
      public getString(param0: string): string;
      public putInt(param0: string, param1: java.lang.Integer): void;
      public setBundle(param0: globalAndroid.os.Parcelable): void;
      public containsKey(param0: string): boolean;
      public getBundle(): T;
      public getLong(param0: string): java.lang.Long;
    }
  }
}

declare module com {
  export module onesignal {
    export class BundleCompatBundle extends com.onesignal.BundleCompat<globalAndroid.os.Bundle> {
      public static class: java.lang.Class<com.onesignal.BundleCompatBundle>;
      public getInt(param0: string): java.lang.Integer;
      public getBundle(): any;
      public putString(param0: string, param1: string): void;
      public getBoolean(param0: string): boolean;
      public getBundle(): globalAndroid.os.Bundle;
      public getString(param0: string): string;
      public putInt(param0: string, param1: java.lang.Integer): void;
      public getLong(param0: string): java.lang.Long;
      public putBoolean(param0: string, param1: java.lang.Boolean): void;
      public putLong(param0: string, param1: java.lang.Long): void;
      public getBoolean(param0: string, param1: boolean): boolean;
      public setBundle(param0: globalAndroid.os.Parcelable): void;
      public containsKey(param0: string): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class BundleCompatFactory {
      public static class: java.lang.Class<com.onesignal.BundleCompatFactory>;
    }
  }
}

declare module com {
  export module onesignal {
    export class BundleCompatPersistableBundle extends com.onesignal.BundleCompat<any> {
      public static class: java.lang.Class<com.onesignal.BundleCompatPersistableBundle>;
      public putBoolean(param0: string, param1: java.lang.Boolean): void;
      public getInt(param0: string): java.lang.Integer;
      public putLong(param0: string, param1: java.lang.Long): void;
      public getBundle(): any;
      public putString(param0: string, param1: string): void;
      public getBoolean(param0: string): boolean;
      public getBoolean(param0: string, param1: boolean): boolean;
      public getString(param0: string): string;
      public putInt(param0: string, param1: java.lang.Integer): void;
      public setBundle(param0: globalAndroid.os.Parcelable): void;
      public containsKey(param0: string): boolean;
      public getLong(param0: string): java.lang.Long;
    }
  }
}

declare module com {
  export module onesignal {
    export class DelayedConsentInitializationParameters {
      public static class: java.lang.Class<com.onesignal.DelayedConsentInitializationParameters>;
    }
  }
}

declare module com {
  export module onesignal {
    export class DraggableRelativeLayout {
      public static class: java.lang.Class<com.onesignal.DraggableRelativeLayout>;
      public computeScroll(): void;
      public dismiss(): void;
      public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
      public constructor(param0: globalAndroid.content.Context);
    }
    export module DraggableRelativeLayout {
      export class DraggableListener {
        public static class: java.lang.Class<com.onesignal.DraggableRelativeLayout.DraggableListener>;
        /**
         * Constructs a new instance of the com.onesignal.DraggableRelativeLayout$DraggableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onDismiss(): void; onDragStart(): void; onDragEnd(): void });
        public constructor();
        public onDragStart(): void;
        public onDismiss(): void;
        public onDragEnd(): void;
      }
      export class Params {
        public static class: java.lang.Class<com.onesignal.DraggableRelativeLayout.Params>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class FCMBroadcastReceiver {
      public static class: java.lang.Class<com.onesignal.FCMBroadcastReceiver>;
      public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class FCMIntentJobService extends com.onesignal.JobIntentService {
      public static class: java.lang.Class<com.onesignal.FCMIntentJobService>;
      public static BUNDLE_EXTRA: string;
      public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
      public onHandleWork(param0: globalAndroid.content.Intent): void;
      public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number, param3: globalAndroid.content.Intent, param4: boolean): void;
      public static enqueueWork(param0: globalAndroid.content.Context, param1: java.lang.Class, param2: number, param3: globalAndroid.content.Intent, param4: boolean): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class FCMIntentService {
      public static class: java.lang.Class<com.onesignal.FCMIntentService>;
      public onHandleIntent(param0: globalAndroid.content.Intent): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class FocusTimeController {
      public static class: java.lang.Class<com.onesignal.FocusTimeController>;
    }
    export module FocusTimeController {
      export class FocusEventType {
        public static class: java.lang.Class<com.onesignal.FocusTimeController.FocusEventType>;
        public static BACKGROUND: com.onesignal.FocusTimeController.FocusEventType;
        public static END_SESSION: com.onesignal.FocusTimeController.FocusEventType;
        public static values(): androidNative.Array<com.onesignal.FocusTimeController.FocusEventType>;
        public static valueOf(param0: string): com.onesignal.FocusTimeController.FocusEventType;
      }
      export class FocusTimeProcessorAttributed extends com.onesignal.FocusTimeController.FocusTimeProcessorBase {
        public static class: java.lang.Class<com.onesignal.FocusTimeController.FocusTimeProcessorAttributed>;
        public getInfluences(): java.util.List<com.onesignal.influence.domain.OSInfluence>;
        public sendTime(param0: com.onesignal.FocusTimeController.FocusEventType): void;
        public additionalFieldsToAddToOnFocusPayload(param0: org.json.JSONObject): void;
        public saveInfluences(param0: java.util.List<com.onesignal.influence.domain.OSInfluence>): void;
      }
      export abstract class FocusTimeProcessorBase {
        public static class: java.lang.Class<com.onesignal.FocusTimeController.FocusTimeProcessorBase>;
        public MIN_ON_FOCUS_TIME_SEC: number;
        public PREF_KEY_FOR_UNSENT_TIME: string;
        public getInfluences(): java.util.List<com.onesignal.influence.domain.OSInfluence>;
        public sendTime(param0: com.onesignal.FocusTimeController.FocusEventType): void;
        public additionalFieldsToAddToOnFocusPayload(param0: org.json.JSONObject): void;
        public syncUnsentTimeOnBackgroundEvent(): void;
        public saveInfluences(param0: java.util.List<com.onesignal.influence.domain.OSInfluence>): void;
        public syncOnFocusTime(): void;
      }
      export class FocusTimeProcessorUnattributed extends com.onesignal.FocusTimeController.FocusTimeProcessorBase {
        public static class: java.lang.Class<com.onesignal.FocusTimeController.FocusTimeProcessorUnattributed>;
        public getInfluences(): java.util.List<com.onesignal.influence.domain.OSInfluence>;
        public sendTime(param0: com.onesignal.FocusTimeController.FocusEventType): void;
        public saveInfluences(param0: java.util.List<com.onesignal.influence.domain.OSInfluence>): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class GMSLocationController extends com.onesignal.LocationController {
      public static class: java.lang.Class<com.onesignal.GMSLocationController>;
    }
    export module GMSLocationController {
      export class FusedLocationApiWrapper {
        public static class: java.lang.Class<com.onesignal.GMSLocationController.FusedLocationApiWrapper>;
      }
      export class GoogleApiClientListener {
        public static class: java.lang.Class<com.onesignal.GMSLocationController.GoogleApiClientListener>;
        public onConnected(param0: globalAndroid.os.Bundle): void;
        public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
        public onConnectionSuspended(param0: number): void;
      }
      export class LocationUpdateListener {
        public static class: java.lang.Class<com.onesignal.GMSLocationController.LocationUpdateListener>;
        public onLocationChanged(param0: globalAndroid.location.Location): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class GenerateNotification {
      public static class: java.lang.Class<com.onesignal.GenerateNotification>;
      public static OS_SHOW_NOTIFICATION_THREAD: string;
      public static BUNDLE_KEY_ANDROID_NOTIFICATION_ID: string;
      public static BUNDLE_KEY_ACTION_ID: string;
      public static BUNDLE_KEY_ONESIGNAL_DATA: string;
    }
    export module GenerateNotification {
      export class OneSignalNotificationBuilder {
        public static class: java.lang.Class<com.onesignal.GenerateNotification.OneSignalNotificationBuilder>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class GenerateNotificationOpenIntent {
      public static class: java.lang.Class<com.onesignal.GenerateNotificationOpenIntent>;
      public getNewActionPendingIntent(param0: number, param1: globalAndroid.content.Intent): globalAndroid.app.PendingIntent;
      public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: boolean);
      public getNewBaseIntent(param0: number): globalAndroid.content.Intent;
    }
  }
}

declare module com {
  export module onesignal {
    export class GenerateNotificationOpenIntentFromPushPayload {
      public static class: java.lang.Class<com.onesignal.GenerateNotificationOpenIntentFromPushPayload>;
      public static INSTANCE: com.onesignal.GenerateNotificationOpenIntentFromPushPayload;
      public create(param0: globalAndroid.content.Context, param1: org.json.JSONObject): com.onesignal.GenerateNotificationOpenIntent;
    }
  }
}

declare module com {
  export module onesignal {
    export class GoogleApiClientCompatProxy {
      public static class: java.lang.Class<com.onesignal.GoogleApiClientCompatProxy>;
    }
  }
}

declare module com {
  export module onesignal {
    export class GooglePlayServicesUpgradePrompt {
      public static class: java.lang.Class<com.onesignal.GooglePlayServicesUpgradePrompt>;
    }
  }
}

declare module com {
  export module onesignal {
    export class HMSLocationController extends com.onesignal.LocationController {
      public static class: java.lang.Class<com.onesignal.HMSLocationController>;
    }
    export module HMSLocationController {
      export class LocationUpdateListener {
        public static class: java.lang.Class<com.onesignal.HMSLocationController.LocationUpdateListener>;
        public onLocationResult(param0: com.huawei.hms.location.LocationResult): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class HmsMessageServiceOneSignal {
      public static class: java.lang.Class<com.onesignal.HmsMessageServiceOneSignal>;
      public onMessageReceived(param0: com.huawei.hms.push.RemoteMessage): void;
      public onNewToken(param0: string, param1: globalAndroid.os.Bundle): void;
      public constructor();
      /** @deprecated */
      public onNewToken(param0: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class ImmutableJSONObject {
      public static class: java.lang.Class<com.onesignal.ImmutableJSONObject>;
      public getLong(param0: string): number;
      public optBoolean(param0: string, param1: boolean): boolean;
      public optLong(param0: string): number;
      public constructor();
      public optJSONObject(param0: string): org.json.JSONObject;
      public optBoolean(param0: string): boolean;
      public toString(): string;
      public optString(param0: string): string;
      public optString(param0: string, param1: string): string;
      public optInt(param0: string): number;
      public constructor(param0: org.json.JSONObject);
      public optInt(param0: string, param1: number): number;
      public opt(param0: string): any;
      public has(param0: string): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class InAppMessageView {
      public static class: java.lang.Class<com.onesignal.InAppMessageView>;
      public toString(): string;
    }
    export module InAppMessageView {
      export class InAppMessageViewListener {
        public static class: java.lang.Class<com.onesignal.InAppMessageView.InAppMessageViewListener>;
        /**
         * Constructs a new instance of the com.onesignal.InAppMessageView$InAppMessageViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onMessageWasShown(): void; onMessageWillDismiss(): void; onMessageWasDismissed(): void });
        public constructor();
        public onMessageWillDismiss(): void;
        public onMessageWasDismissed(): void;
        public onMessageWasShown(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class JSONUtils {
      public static class: java.lang.Class<com.onesignal.JSONUtils>;
      public static normalizeType(param0: any): any;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class JobIntentService {
      public static class: java.lang.Class<com.onesignal.JobIntentService>;
      public isStopped(): boolean;
      public onHandleWork(param0: globalAndroid.content.Intent): void;
      public onStopCurrentWork(): boolean;
      public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
      public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number, param3: globalAndroid.content.Intent, param4: boolean): void;
      public static enqueueWork(param0: globalAndroid.content.Context, param1: java.lang.Class, param2: number, param3: globalAndroid.content.Intent, param4: boolean): void;
      public onCreate(): void;
      public setInterruptIfStopped(param0: boolean): void;
      public constructor();
      public onDestroy(): void;
      public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
    }
    export module JobIntentService {
      export class CommandProcessor extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.lang.Void> {
        public static class: java.lang.Class<com.onesignal.JobIntentService.CommandProcessor>;
        public doInBackground(param0: androidNative.Array<java.lang.Void>): java.lang.Void;
        public onPostExecute(param0: java.lang.Void): void;
        public onCancelled(param0: java.lang.Void): void;
      }
      export class CompatJobEngine {
        public static class: java.lang.Class<com.onesignal.JobIntentService.CompatJobEngine>;
        /**
         * Constructs a new instance of the com.onesignal.JobIntentService$CompatJobEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { compatGetBinder(): globalAndroid.os.IBinder; dequeueWork(): com.onesignal.JobIntentService.GenericWorkItem });
        public constructor();
        public dequeueWork(): com.onesignal.JobIntentService.GenericWorkItem;
        public compatGetBinder(): globalAndroid.os.IBinder;
      }
      export class CompatWorkEnqueuer extends com.onesignal.JobIntentService.WorkEnqueuer {
        public static class: java.lang.Class<com.onesignal.JobIntentService.CompatWorkEnqueuer>;
        public serviceProcessingFinished(): void;
        public serviceStartReceived(): void;
        public serviceProcessingStarted(): void;
      }
      export class CompatWorkItem extends com.onesignal.JobIntentService.GenericWorkItem {
        public static class: java.lang.Class<com.onesignal.JobIntentService.CompatWorkItem>;
        public complete(): void;
        public getIntent(): globalAndroid.content.Intent;
      }
      export class ComponentNameWithWakeful {
        public static class: java.lang.Class<com.onesignal.JobIntentService.ComponentNameWithWakeful>;
      }
      export class GenericWorkItem {
        public static class: java.lang.Class<com.onesignal.JobIntentService.GenericWorkItem>;
        /**
         * Constructs a new instance of the com.onesignal.JobIntentService$GenericWorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getIntent(): globalAndroid.content.Intent; complete(): void });
        public constructor();
        public complete(): void;
        public getIntent(): globalAndroid.content.Intent;
      }
      export class JobServiceEngineImpl implements com.onesignal.JobIntentService.CompatJobEngine {
        public static class: java.lang.Class<com.onesignal.JobIntentService.JobServiceEngineImpl>;
        public onStartJob(param0: any): boolean;
        public dequeueWork(): com.onesignal.JobIntentService.GenericWorkItem;
        public compatGetBinder(): globalAndroid.os.IBinder;
        public onStopJob(param0: any): boolean;
      }
      export module JobServiceEngineImpl {
        export class WrapperWorkItem extends com.onesignal.JobIntentService.GenericWorkItem {
          public static class: java.lang.Class<com.onesignal.JobIntentService.JobServiceEngineImpl.WrapperWorkItem>;
          public getIntent(): globalAndroid.content.Intent;
          public complete(): void;
        }
      }
      export class JobWorkEnqueuer extends com.onesignal.JobIntentService.WorkEnqueuer {
        public static class: java.lang.Class<com.onesignal.JobIntentService.JobWorkEnqueuer>;
      }
      export abstract class WorkEnqueuer {
        public static class: java.lang.Class<com.onesignal.JobIntentService.WorkEnqueuer>;
        public serviceProcessingFinished(): void;
        public serviceStartReceived(): void;
        public serviceProcessingStarted(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class LocationController {
      public static class: java.lang.Class<com.onesignal.LocationController>;
      public static fireCompleteForLocation(param0: globalAndroid.location.Location): void;
    }
    export module LocationController {
      export class LocationHandler {
        public static class: java.lang.Class<com.onesignal.LocationController.LocationHandler>;
        /**
         * Constructs a new instance of the com.onesignal.LocationController$LocationHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getType(): com.onesignal.LocationController.PermissionType; onComplete(param0: com.onesignal.LocationController.LocationPoint): void });
        public constructor();
        public onComplete(param0: com.onesignal.LocationController.LocationPoint): void;
        public getType(): com.onesignal.LocationController.PermissionType;
      }
      export class LocationHandlerThread {
        public static class: java.lang.Class<com.onesignal.LocationController.LocationHandlerThread>;
      }
      export class LocationPoint {
        public static class: java.lang.Class<com.onesignal.LocationController.LocationPoint>;
        public toString(): string;
      }
      export abstract class LocationPromptCompletionHandler extends com.onesignal.LocationController.LocationHandler {
        public static class: java.lang.Class<com.onesignal.LocationController.LocationPromptCompletionHandler>;
        public onComplete(param0: com.onesignal.LocationController.LocationPoint): void;
        public getType(): com.onesignal.LocationController.PermissionType;
      }
      export class PermissionType {
        public static class: java.lang.Class<com.onesignal.LocationController.PermissionType>;
        public static STARTUP: com.onesignal.LocationController.PermissionType;
        public static PROMPT_LOCATION: com.onesignal.LocationController.PermissionType;
        public static SYNC_SERVICE: com.onesignal.LocationController.PermissionType;
        public static values(): androidNative.Array<com.onesignal.LocationController.PermissionType>;
        public static valueOf(param0: string): com.onesignal.LocationController.PermissionType;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class LocationPermissionController extends com.onesignal.PermissionsActivity.PermissionCallback {
      public static class: java.lang.Class<com.onesignal.LocationPermissionController>;
      public static INSTANCE: com.onesignal.LocationPermissionController;
      public onReject(param0: boolean): void;
      public onAccept(): void;
      public prompt(param0: boolean, param1: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NavigateToAndroidSettingsForLocation {
      public static class: java.lang.Class<com.onesignal.NavigateToAndroidSettingsForLocation>;
      public static INSTANCE: com.onesignal.NavigateToAndroidSettingsForLocation;
      public show(param0: globalAndroid.content.Context): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NavigateToAndroidSettingsForNotifications {
      public static class: java.lang.Class<com.onesignal.NavigateToAndroidSettingsForNotifications>;
      public static INSTANCE: com.onesignal.NavigateToAndroidSettingsForNotifications;
      public show(param0: globalAndroid.content.Context): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationBundleProcessor {
      public static class: java.lang.Class<com.onesignal.NotificationBundleProcessor>;
      public static PUSH_ADDITIONAL_DATA_KEY: string;
      public static PUSH_MINIFIED_BUTTONS_LIST: string;
      public static PUSH_MINIFIED_BUTTON_ID: string;
      public static PUSH_MINIFIED_BUTTON_TEXT: string;
      public static PUSH_MINIFIED_BUTTON_ICON: string;
    }
    export module NotificationBundleProcessor {
      export class NotificationProcessingCallback {
        public static class: java.lang.Class<com.onesignal.NotificationBundleProcessor.NotificationProcessingCallback>;
        /**
         * Constructs a new instance of the com.onesignal.NotificationBundleProcessor$NotificationProcessingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onResult(param0: boolean): void });
        public constructor();
        public onResult(param0: boolean): void;
      }
      export class ProcessBundleReceiverCallback {
        public static class: java.lang.Class<com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback>;
        /**
         * Constructs a new instance of the com.onesignal.NotificationBundleProcessor$ProcessBundleReceiverCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onBundleProcessed(param0: com.onesignal.NotificationBundleProcessor.ProcessedBundleResult): void });
        public constructor();
        public onBundleProcessed(param0: com.onesignal.NotificationBundleProcessor.ProcessedBundleResult): void;
      }
      export class ProcessedBundleResult {
        public static class: java.lang.Class<com.onesignal.NotificationBundleProcessor.ProcessedBundleResult>;
        public setInAppPreviewShown(param0: boolean): void;
        public setWorkManagerProcessing(param0: boolean): void;
        public isWorkManagerProcessing(): boolean;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationChannelManager {
      public static class: java.lang.Class<com.onesignal.NotificationChannelManager>;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationDismissReceiver {
      public static class: java.lang.Class<com.onesignal.NotificationDismissReceiver>;
      public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationLimitManager {
      public static class: java.lang.Class<com.onesignal.NotificationLimitManager>;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationOpenedActivityHMS {
      public static class: java.lang.Class<com.onesignal.NotificationOpenedActivityHMS>;
      public onCreate(param0: globalAndroid.os.Bundle): void;
      public constructor();
      public onNewIntent(param0: globalAndroid.content.Intent): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationOpenedProcessor {
      public static class: java.lang.Class<com.onesignal.NotificationOpenedProcessor>;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationOpenedReceiver extends com.onesignal.NotificationOpenedReceiverBase {
      public static class: java.lang.Class<com.onesignal.NotificationOpenedReceiver>;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationOpenedReceiverAndroid22AndOlder extends com.onesignal.NotificationOpenedReceiverBase {
      public static class: java.lang.Class<com.onesignal.NotificationOpenedReceiverAndroid22AndOlder>;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class NotificationOpenedReceiverBase {
      public static class: java.lang.Class<com.onesignal.NotificationOpenedReceiverBase>;
      public onCreate(param0: globalAndroid.os.Bundle): void;
      public constructor();
      public onNewIntent(param0: globalAndroid.content.Intent): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationPayloadProcessorHMS {
      public static class: java.lang.Class<com.onesignal.NotificationPayloadProcessorHMS>;
      public static processDataMessageReceived(param0: globalAndroid.content.Context, param1: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationPermissionController extends com.onesignal.PermissionsActivity.PermissionCallback {
      public static class: java.lang.Class<com.onesignal.NotificationPermissionController>;
      public static INSTANCE: com.onesignal.NotificationPermissionController;
      public onReject(param0: boolean): void;
      public onAccept(): void;
      public prompt(param0: boolean): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class NotificationSummaryManager {
      public static class: java.lang.Class<com.onesignal.NotificationSummaryManager>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSBackgroundManager {
      public static class: java.lang.Class<com.onesignal.OSBackgroundManager>;
      public runRunnableOnThread(param0: java.lang.Runnable, param1: string): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class OSBackgroundSync {
      public static class: java.lang.Class<com.onesignal.OSBackgroundSync>;
      public static LOCK: any;
      public needsJobReschedule: boolean;
      public scheduleSyncTask(param0: globalAndroid.content.Context): void;
      public cancelBackgroundSyncTask(param0: globalAndroid.content.Context): void;
      public getSyncServicePendingIntentClass(): java.lang.Class;
      public getSyncTaskId(): number;
      public getSyncTaskThreadId(): string;
      public scheduleBackgroundSyncTask(param0: globalAndroid.content.Context, param1: number): void;
      public getSyncServiceJobClass(): java.lang.Class;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSDeviceState {
      public static class: java.lang.Class<com.onesignal.OSDeviceState>;
      public isPushDisabled(): boolean;
      public isSMSSubscribed(): boolean;
      public getPushToken(): string;
      public getSMSUserId(): string;
      public getEmailUserId(): string;
      public getEmailAddress(): string;
      public areNotificationsEnabled(): boolean;
      public isSubscribed(): boolean;
      public getSMSNumber(): string;
      public isEmailSubscribed(): boolean;
      public getUserId(): string;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSDynamicTriggerController {
      public static class: java.lang.Class<com.onesignal.OSDynamicTriggerController>;
    }
    export module OSDynamicTriggerController {
      export class OSDynamicTriggerControllerObserver {
        public static class: java.lang.Class<com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver>;
        /**
         * Constructs a new instance of the com.onesignal.OSDynamicTriggerController$OSDynamicTriggerControllerObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { messageDynamicTriggerCompleted(param0: string): void; messageTriggerConditionChanged(): void });
        public constructor();
        public messageDynamicTriggerCompleted(param0: string): void;
        public messageTriggerConditionChanged(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSDynamicTriggerTimer {
      public static class: java.lang.Class<com.onesignal.OSDynamicTriggerTimer>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSEmailSubscriptionChangedInternalObserver {
      public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionChangedInternalObserver>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSEmailSubscriptionObserver {
      public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionObserver>;
      /**
       * Constructs a new instance of the com.onesignal.OSEmailSubscriptionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onOSEmailSubscriptionChanged(param0: com.onesignal.OSEmailSubscriptionStateChanges): void });
      public constructor();
      public onOSEmailSubscriptionChanged(param0: com.onesignal.OSEmailSubscriptionStateChanges): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSEmailSubscriptionState {
      public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionState>;
      public getObservable(): com.onesignal.OSObservable<any, com.onesignal.OSEmailSubscriptionState>;
      public clone(): any;
      public toString(): string;
      public getEmailUserId(): string;
      public getEmailAddress(): string;
      public isSubscribed(): boolean;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSEmailSubscriptionStateChanges {
      public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionStateChanges>;
      public toString(): string;
      public constructor(param0: com.onesignal.OSEmailSubscriptionState, param1: com.onesignal.OSEmailSubscriptionState);
      public getTo(): com.onesignal.OSEmailSubscriptionState;
      public getFrom(): com.onesignal.OSEmailSubscriptionState;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSFocusHandler {
      public static class: java.lang.Class<com.onesignal.OSFocusHandler>;
      public static Companion: com.onesignal.OSFocusHandler.Companion;
      public startOnLostFocusWorker(param0: string, param1: number, param2: globalAndroid.content.Context): void;
      public hasCompleted(): boolean;
      public startOnStartFocusWork(): void;
      public startOnFocusWork(): void;
      public startOnStopFocusWork(): void;
      public constructor();
      public cancelOnLostFocusWorker(param0: string, param1: globalAndroid.content.Context): void;
      public hasBackgrounded(): boolean;
    }
    export module OSFocusHandler {
      export class Companion {
        public static class: java.lang.Class<com.onesignal.OSFocusHandler.Companion>;
        public onLostFocusDoWork(): void;
      }
      export class OnLostFocusWorker {
        public static class: java.lang.Class<com.onesignal.OSFocusHandler.OnLostFocusWorker>;
        public doWork(): androidx.work.ListenableWorker.Result;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSFocusTimeProcessorFactory {
      public static class: java.lang.Class<com.onesignal.OSFocusTimeProcessorFactory>;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessage {
      public static class: java.lang.Class<com.onesignal.OSInAppMessage>;
      public static IAM_ID: string;
      public messageId: string;
      public getMessageId(): string;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageAction {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageAction>;
      public doesCloseMessage(): boolean;
      public isFirstClick(): boolean;
      public getClickName(): string;
      public getUrlTarget(): com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
      public getOutcomes(): java.util.List<com.onesignal.OSInAppMessageOutcome>;
      public getPrompts(): java.util.List<com.onesignal.OSInAppMessagePrompt>;
      public getClickUrl(): string;
      public toJSONObject(): org.json.JSONObject;
      public getTags(): com.onesignal.OSInAppMessageTag;
    }
    export module OSInAppMessageAction {
      export class OSInAppMessageActionUrlType {
        public static class: java.lang.Class<com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType>;
        public static IN_APP_WEBVIEW: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
        public static BROWSER: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
        public static REPLACE_CONTENT: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
        public toJSONObject(): org.json.JSONObject;
        public static values(): androidNative.Array<com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType>;
        public toString(): string;
        public static fromString(param0: string): com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
        public static valueOf(param0: string): com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageContent {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageContent>;
      public getContentHtml(): string;
      public setUseHeightMargin(param0: boolean): void;
      public getDisplayDuration(): java.lang.Double;
      public setPageHeight(param0: number): void;
      public getDisplayLocation(): com.onesignal.WebViewManager.Position;
      public setDisplayDuration(param0: java.lang.Double): void;
      public setDisplayLocation(param0: com.onesignal.WebViewManager.Position): void;
      public setFullBleed(param0: boolean): void;
      public isFullBleed(): boolean;
      public getUseHeightMargin(): boolean;
      public setContentHtml(param0: string): void;
      public getUseWidthMargin(): boolean;
      public setUseWidthMargin(param0: boolean): void;
      public constructor(param0: org.json.JSONObject);
      public getPageHeight(): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageContentKt {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageContentKt>;
      public static HTML: string;
      public static STYLES: string;
      public static DISPLAY_DURATION: string;
      public static REMOVE_HEIGHT_MARGIN: string;
      public static REMOVE_WIDTH_MARGIN: string;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageController extends com.onesignal.OSBackgroundManager implements com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver, com.onesignal.OSSystemConditionController.OSSystemConditionObserver {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageController>;
      public static IN_APP_MESSAGES_JSON_KEY: string;
      public getInAppMessageDisplayQueue(): java.util.ArrayList<com.onesignal.OSInAppMessageInternal>;
      public initRedisplayData(): void;
      public messageTriggerConditionChanged(): void;
      public systemConditionChanged(): void;
      public constructor();
      public constructor(param0: com.onesignal.OneSignalDbHelper, param1: com.onesignal.OSTaskController, param2: com.onesignal.OSLogger, param3: com.onesignal.OSSharedPreferences, param4: com.onesignal.language.LanguageContext);
      public messageDynamicTriggerCompleted(param0: string): void;
      public getRedisplayedInAppMessages(): java.util.List<com.onesignal.OSInAppMessageInternal>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageControllerFactory {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageControllerFactory>;
      public getController(param0: com.onesignal.OneSignalDbHelper, param1: com.onesignal.OSTaskController, param2: com.onesignal.OSLogger, param3: com.onesignal.OSSharedPreferences, param4: com.onesignal.language.LanguageContext): com.onesignal.OSInAppMessageController;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageDummyController extends com.onesignal.OSInAppMessageController {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageDummyController>;
      public initRedisplayData(): void;
      public messageTriggerConditionChanged(): void;
      public messageWasDismissed(param0: com.onesignal.OSInAppMessageInternal): void;
      public systemConditionChanged(): void;
      public messageDynamicTriggerCompleted(param0: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageInternal extends com.onesignal.OSInAppMessage {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageInternal>;
      public variants: java.util.HashMap<string, java.util.HashMap<string, string>>;
      public triggers: java.util.ArrayList<java.util.ArrayList<com.onesignal.OSTrigger>>;
      public equals(param0: any): boolean;
      public toString(): string;
      public setDisplayedInSession(param0: boolean): void;
      public isFinished(): boolean;
      public isDisplayedInSession(): boolean;
      public parseTriggerJson(param0: org.json.JSONArray): java.util.ArrayList<java.util.ArrayList<com.onesignal.OSTrigger>>;
      public toJSONObject(): org.json.JSONObject;
      public hashCode(): number;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class OSInAppMessageLifecycleHandler {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageLifecycleHandler>;
      public onWillDismissInAppMessage(param0: com.onesignal.OSInAppMessage): void;
      public onDidDismissInAppMessage(param0: com.onesignal.OSInAppMessage): void;
      public onWillDisplayInAppMessage(param0: com.onesignal.OSInAppMessage): void;
      public constructor();
      public onDidDisplayInAppMessage(param0: com.onesignal.OSInAppMessage): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageLocationPrompt extends com.onesignal.OSInAppMessagePrompt {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageLocationPrompt>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageOutcome {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageOutcome>;
      public isUnique(): boolean;
      public toString(): string;
      public getName(): string;
      public setWeight(param0: number): void;
      public getWeight(): number;
      public setUnique(param0: boolean): void;
      public toJSONObject(): org.json.JSONObject;
      public setName(param0: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessagePage {
      public static class: java.lang.Class<com.onesignal.OSInAppMessagePage>;
      public setPageIndex(param0: string): void;
      public constructor(param0: org.json.JSONObject);
      public getPageId(): string;
      public setPageId(param0: string): void;
      public getPageIndex(): string;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessagePageKt {
      public static class: java.lang.Class<com.onesignal.OSInAppMessagePageKt>;
      public static PAGE_ID: string;
      public static PAGE_INDEX: string;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessagePreviewHandler {
      public static class: java.lang.Class<com.onesignal.OSInAppMessagePreviewHandler>;
      public static INSTANCE: com.onesignal.OSInAppMessagePreviewHandler;
      public static inAppPreviewPushUUID(param0: org.json.JSONObject): string;
      public static inAppMessagePreviewHandled(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class OSInAppMessagePrompt {
      public static class: java.lang.Class<com.onesignal.OSInAppMessagePrompt>;
      public toString(): string;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageRedisplayStats {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageRedisplayStats>;
      public toString(): string;
      public isRedisplayEnabled(): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageRepository {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageRepository>;
    }
    export module OSInAppMessageRepository {
      export class OSInAppMessageRequestResponse {
        public static class: java.lang.Class<com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse>;
        /**
         * Constructs a new instance of the com.onesignal.OSInAppMessageRepository$OSInAppMessageRequestResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: string): void });
        public constructor();
        public onSuccess(param0: string): void;
        public onFailure(param0: string): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSInAppMessageTag {
      public static class: java.lang.Class<com.onesignal.OSInAppMessageTag>;
      public setTagsToRemove(param0: org.json.JSONArray): void;
      public getTagsToRemove(): org.json.JSONArray;
      public toString(): string;
      public getTagsToAdd(): org.json.JSONObject;
      public setTagsToAdd(param0: org.json.JSONObject): void;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSLogWrapper extends com.onesignal.OSLogger {
      public static class: java.lang.Class<com.onesignal.OSLogWrapper>;
      public debug(param0: string): void;
      public info(param0: string): void;
      public verbose(param0: string): void;
      public error(param0: string, param1: java.lang.Throwable): void;
      public error(param0: string): void;
      public warning(param0: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSLogger {
      public static class: java.lang.Class<com.onesignal.OSLogger>;
      /**
       * Constructs a new instance of the com.onesignal.OSLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { verbose(param0: string): void; debug(param0: string): void; info(param0: string): void; warning(param0: string): void; error(param0: string): void; error(param0: string, param1: java.lang.Throwable): void });
      public constructor();
      public debug(param0: string): void;
      public info(param0: string): void;
      public verbose(param0: string): void;
      public error(param0: string, param1: java.lang.Throwable): void;
      public error(param0: string): void;
      public warning(param0: string): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSMutableNotification extends com.onesignal.OSNotification {
      public static class: java.lang.Class<com.onesignal.OSMutableNotification>;
      public setAndroidNotificationId(param0: number): void;
      public setExtender(param0: androidx.core.app.NotificationCompat.Extender): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotification {
      public static class: java.lang.Class<com.onesignal.OSNotification>;
      public getLaunchURL(): string;
      public getLedColor(): string;
      public getTemplateId(): string;
      public getSound(): string;
      public getTtl(): number;
      public setAndroidNotificationId(param0: number): void;
      public getCollapseId(): string;
      public getBody(): string;
      public getGroupKey(): string;
      public getSentTime(): number;
      public getLockScreenVisibility(): number;
      public getTitle(): string;
      public getRawPayload(): string;
      public getLargeIcon(): string;
      public getAndroidNotificationId(): number;
      public getNotificationExtender(): androidx.core.app.NotificationCompat.Extender;
      public constructor();
      public mutableCopy(): com.onesignal.OSMutableNotification;
      public getSmallIconAccentColor(): string;
      public getGroupMessage(): string;
      public toJSONObject(): org.json.JSONObject;
      public setNotificationExtender(param0: androidx.core.app.NotificationCompat.Extender): void;
      public getFromProjectNumber(): string;
      public getPriority(): number;
      public toString(): string;
      public constructor(param0: com.onesignal.OSNotification);
      public getBigPicture(): string;
      public getSmallIcon(): string;
      public getTemplateName(): string;
      public getAdditionalData(): org.json.JSONObject;
      public getActionButtons(): java.util.List<com.onesignal.OSNotification.ActionButton>;
      public getGroupedNotifications(): java.util.List<com.onesignal.OSNotification>;
      public getNotificationId(): string;
      public getBackgroundImageLayout(): com.onesignal.OSNotification.BackgroundImageLayout;
    }
    export module OSNotification {
      export class ActionButton {
        public static class: java.lang.Class<com.onesignal.OSNotification.ActionButton>;
        public getIcon(): string;
        public constructor(param0: org.json.JSONObject);
        public getId(): string;
        public toJSONObject(): org.json.JSONObject;
        public constructor(param0: string, param1: string, param2: string);
        public constructor();
        public getText(): string;
      }
      export class BackgroundImageLayout {
        public static class: java.lang.Class<com.onesignal.OSNotification.BackgroundImageLayout>;
        public getTitleTextColor(): string;
        public getBodyTextColor(): string;
        public constructor();
        public getImage(): string;
      }
      export class OSNotificationBuilder {
        public static class: java.lang.Class<com.onesignal.OSNotification.OSNotificationBuilder>;
        public setLaunchURL(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setLedColor(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setFromProjectNumber(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setRawPayload(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setSound(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setPriority(param0: number): com.onesignal.OSNotification.OSNotificationBuilder;
        public setCollapseId(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setLockScreenVisibility(param0: number): com.onesignal.OSNotification.OSNotificationBuilder;
        public constructor();
        public setSmallIconAccentColor(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setGroupKey(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setNotificationExtender(param0: androidx.core.app.NotificationCompat.Extender): com.onesignal.OSNotification.OSNotificationBuilder;
        public setTemplateId(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setTitle(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setBigPicture(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setActionButtons(param0: java.util.List<com.onesignal.OSNotification.ActionButton>): com.onesignal.OSNotification.OSNotificationBuilder;
        public setAndroidNotificationId(param0: number): com.onesignal.OSNotification.OSNotificationBuilder;
        public setAdditionalData(param0: org.json.JSONObject): com.onesignal.OSNotification.OSNotificationBuilder;
        public setGroupMessage(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setNotificationId(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setTTL(param0: number): com.onesignal.OSNotification.OSNotificationBuilder;
        public setLargeIcon(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setBody(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setSmallIcon(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setSenttime(param0: number): com.onesignal.OSNotification.OSNotificationBuilder;
        public setGroupedNotifications(param0: java.util.List<com.onesignal.OSNotification>): com.onesignal.OSNotification.OSNotificationBuilder;
        public build(): com.onesignal.OSNotification;
        public setTemplateName(param0: string): com.onesignal.OSNotification.OSNotificationBuilder;
        public setBackgroundImageLayout(param0: com.onesignal.OSNotification.BackgroundImageLayout): com.onesignal.OSNotification.OSNotificationBuilder;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationAction {
      public static class: java.lang.Class<com.onesignal.OSNotificationAction>;
      public getType(): com.onesignal.OSNotificationAction.ActionType;
      public constructor(param0: com.onesignal.OSNotificationAction.ActionType, param1: string);
      public getActionId(): string;
      public toJSONObject(): org.json.JSONObject;
    }
    export module OSNotificationAction {
      export class ActionType {
        public static class: java.lang.Class<com.onesignal.OSNotificationAction.ActionType>;
        public static Opened: com.onesignal.OSNotificationAction.ActionType;
        public static ActionTaken: com.onesignal.OSNotificationAction.ActionType;
        public static valueOf(param0: string): com.onesignal.OSNotificationAction.ActionType;
        public static values(): androidNative.Array<com.onesignal.OSNotificationAction.ActionType>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationController {
      public static class: java.lang.Class<com.onesignal.OSNotificationController>;
      public isRestoring(): boolean;
      public getNotificationJob(): com.onesignal.OSNotificationGenerationJob;
      public toString(): string;
      public isNotificationWithinTTL(): boolean;
      public getNotificationReceivedEvent(): com.onesignal.OSNotificationReceivedEvent;
      public setFromBackgroundLogic(param0: boolean): void;
      public setRestoring(param0: boolean): void;
      public isFromBackgroundLogic(): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationDataController extends com.onesignal.OSBackgroundManager {
      public static class: java.lang.Class<com.onesignal.OSNotificationDataController>;
      public constructor(param0: com.onesignal.OneSignalDbHelper, param1: com.onesignal.OSLogger);
      public constructor();
    }
    export module OSNotificationDataController {
      export class InvalidOrDuplicateNotificationCallback {
        public static class: java.lang.Class<com.onesignal.OSNotificationDataController.InvalidOrDuplicateNotificationCallback>;
        /**
         * Constructs a new instance of the com.onesignal.OSNotificationDataController$InvalidOrDuplicateNotificationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onResult(param0: boolean): void });
        public constructor();
        public onResult(param0: boolean): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationFormatHelper {
      public static class: java.lang.Class<com.onesignal.OSNotificationFormatHelper>;
      public static PAYLOAD_OS_ROOT_CUSTOM: string;
      public static PAYLOAD_OS_NOTIFICATION_ID: string;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationGenerationJob {
      public static class: java.lang.Class<com.onesignal.OSNotificationGenerationJob>;
      public isRestoring(): boolean;
      public getOverriddenFlags(): java.lang.Integer;
      public getOrgFlags(): java.lang.Integer;
      public setContext(param0: globalAndroid.content.Context): void;
      public getShownTimeStamp(): java.lang.Long;
      public setRestoring(param0: boolean): void;
      public setOverriddenSound(param0: globalAndroid.net.Uri): void;
      public getOrgSound(): globalAndroid.net.Uri;
      public setOverriddenBodyFromExtender(param0: string): void;
      public setJsonPayload(param0: org.json.JSONObject): void;
      public getJsonPayload(): org.json.JSONObject;
      public getOverriddenTitleFromExtender(): string;
      public setShownTimeStamp(param0: java.lang.Long): void;
      public toString(): string;
      public getNotification(): com.onesignal.OSNotification;
      public setOrgSound(param0: globalAndroid.net.Uri): void;
      public setOverriddenFlags(param0: java.lang.Integer): void;
      public getContext(): globalAndroid.content.Context;
      public setOverriddenTitleFromExtender(param0: string): void;
      public setNotification(param0: com.onesignal.OSNotification): void;
      public getOverriddenSound(): globalAndroid.net.Uri;
      public setOrgFlags(param0: java.lang.Integer): void;
      public getOverriddenBodyFromExtender(): string;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationIntentExtras {
      public static class: java.lang.Class<com.onesignal.OSNotificationIntentExtras>;
      public equals(param0: any): boolean;
      public toString(): string;
      public copy(param0: org.json.JSONArray, param1: org.json.JSONObject): com.onesignal.OSNotificationIntentExtras;
      public constructor(param0: org.json.JSONArray, param1: org.json.JSONObject);
      public getDataArray(): org.json.JSONArray;
      public setDataArray(param0: org.json.JSONArray): void;
      public getJsonData(): org.json.JSONObject;
      public component2(): org.json.JSONObject;
      public setJsonData(param0: org.json.JSONObject): void;
      public component1(): org.json.JSONArray;
      public hashCode(): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationOpenAppSettings {
      public static class: java.lang.Class<com.onesignal.OSNotificationOpenAppSettings>;
      public static INSTANCE: com.onesignal.OSNotificationOpenAppSettings;
      public getShouldOpenActivity(param0: globalAndroid.content.Context): boolean;
      public getSuppressLaunchURL(param0: globalAndroid.content.Context): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationOpenBehaviorFromPushPayload {
      public static class: java.lang.Class<com.onesignal.OSNotificationOpenBehaviorFromPushPayload>;
      public getShouldOpenApp(): boolean;
      public getUri(): globalAndroid.net.Uri;
      public constructor(param0: globalAndroid.content.Context, param1: org.json.JSONObject);
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationOpenedResult extends com.onesignal.OneSignal.EntryStateListener {
      public static class: java.lang.Class<com.onesignal.OSNotificationOpenedResult>;
      public constructor(param0: com.onesignal.OSNotification, param1: com.onesignal.OSNotificationAction);
      public toString(): string;
      public getNotification(): com.onesignal.OSNotification;
      public onEntryStateChange(param0: com.onesignal.OneSignal.AppEntryAction): void;
      /** @deprecated */
      public stringify(): string;
      public toJSONObject(): org.json.JSONObject;
      public getAction(): com.onesignal.OSNotificationAction;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationReceivedEvent {
      public static class: java.lang.Class<com.onesignal.OSNotificationReceivedEvent>;
      public complete(param0: com.onesignal.OSNotification): void;
      public toString(): string;
      public getNotification(): com.onesignal.OSNotification;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationRestoreWorkManager {
      public static class: java.lang.Class<com.onesignal.OSNotificationRestoreWorkManager>;
      public static restored: boolean;
      public static beginEnqueueingWork(param0: globalAndroid.content.Context, param1: boolean): void;
    }
    export module OSNotificationRestoreWorkManager {
      export class NotificationRestoreWorker {
        public static class: java.lang.Class<com.onesignal.OSNotificationRestoreWorkManager.NotificationRestoreWorker>;
        public doWork(): androidx.work.ListenableWorker.Result;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSNotificationWorkManager {
      public static class: java.lang.Class<com.onesignal.OSNotificationWorkManager>;
    }
    export module OSNotificationWorkManager {
      export class NotificationWorker {
        public static class: java.lang.Class<com.onesignal.OSNotificationWorkManager.NotificationWorker>;
        public doWork(): androidx.work.ListenableWorker.Result;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSObservable<ObserverType, StateType> extends java.lang.Object {
      public static class: java.lang.Class<com.onesignal.OSObservable<any, any>>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSOutcomeEvent {
      public static class: java.lang.Class<com.onesignal.OSOutcomeEvent>;
      public equals(param0: any): boolean;
      public toString(): string;
      public getName(): string;
      public getNotificationIds(): org.json.JSONArray;
      public toJSONObjectForMeasure(): org.json.JSONObject;
      public getTimestamp(): number;
      public getWeight(): number;
      public static fromOutcomeEventParamsV2toOutcomeEventV1(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): com.onesignal.OSOutcomeEvent;
      public getSession(): com.onesignal.influence.domain.OSInfluenceType;
      public constructor(param0: com.onesignal.influence.domain.OSInfluenceType, param1: org.json.JSONArray, param2: string, param3: number, param4: number);
      public toJSONObject(): org.json.JSONObject;
      public hashCode(): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSOutcomeEventsController {
      public static class: java.lang.Class<com.onesignal.OSOutcomeEventsController>;
      public constructor(param0: com.onesignal.OSSessionManager, param1: com.onesignal.outcomes.data.OSOutcomeEventsFactory);
    }
  }
}

declare module com {
  export module onesignal {
    export class OSPermissionChangedInternalObserver {
      public static class: java.lang.Class<com.onesignal.OSPermissionChangedInternalObserver>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSPermissionObserver {
      public static class: java.lang.Class<com.onesignal.OSPermissionObserver>;
      /**
       * Constructs a new instance of the com.onesignal.OSPermissionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onOSPermissionChanged(param0: com.onesignal.OSPermissionStateChanges): void });
      public constructor();
      public onOSPermissionChanged(param0: com.onesignal.OSPermissionStateChanges): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSPermissionState {
      public static class: java.lang.Class<com.onesignal.OSPermissionState>;
      public clone(): any;
      public toString(): string;
      public getObservable(): com.onesignal.OSObservable<any, com.onesignal.OSPermissionState>;
      public areNotificationsEnabled(): boolean;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSPermissionStateChanges {
      public static class: java.lang.Class<com.onesignal.OSPermissionStateChanges>;
      public constructor(param0: com.onesignal.OSPermissionState, param1: com.onesignal.OSPermissionState);
      public getFrom(): com.onesignal.OSPermissionState;
      public toString(): string;
      public getTo(): com.onesignal.OSPermissionState;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSReceiveReceiptController {
      public static class: java.lang.Class<com.onesignal.OSReceiveReceiptController>;
      public static getInstance(): com.onesignal.OSReceiveReceiptController;
    }
    export module OSReceiveReceiptController {
      export class ReceiveReceiptWorker {
        public static class: java.lang.Class<com.onesignal.OSReceiveReceiptController.ReceiveReceiptWorker>;
        public doWork(): androidx.work.ListenableWorker.Result;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSReceiveReceiptRepository {
      public static class: java.lang.Class<com.onesignal.OSReceiveReceiptRepository>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSRemoteParamController {
      public static class: java.lang.Class<com.onesignal.OSRemoteParamController>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSMSSubscriptionChangedInternalObserver {
      public static class: java.lang.Class<com.onesignal.OSSMSSubscriptionChangedInternalObserver>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSMSSubscriptionObserver {
      public static class: java.lang.Class<com.onesignal.OSSMSSubscriptionObserver>;
      /**
       * Constructs a new instance of the com.onesignal.OSSMSSubscriptionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onSMSSubscriptionChanged(param0: com.onesignal.OSSMSSubscriptionStateChanges): void });
      public constructor();
      public onSMSSubscriptionChanged(param0: com.onesignal.OSSMSSubscriptionStateChanges): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSMSSubscriptionState {
      public static class: java.lang.Class<com.onesignal.OSSMSSubscriptionState>;
      public clone(): any;
      public toString(): string;
      public getObservable(): com.onesignal.OSObservable<any, com.onesignal.OSSMSSubscriptionState>;
      public isSubscribed(): boolean;
      public getSMSNumber(): string;
      public toJSONObject(): org.json.JSONObject;
      public getSmsUserId(): string;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSMSSubscriptionStateChanges {
      public static class: java.lang.Class<com.onesignal.OSSMSSubscriptionStateChanges>;
      public toString(): string;
      public getTo(): com.onesignal.OSSMSSubscriptionState;
      public getFrom(): com.onesignal.OSSMSSubscriptionState;
      public constructor(param0: com.onesignal.OSSMSSubscriptionState, param1: com.onesignal.OSSMSSubscriptionState);
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSessionManager {
      public static class: java.lang.Class<com.onesignal.OSSessionManager>;
      public trackerFactory: com.onesignal.influence.data.OSTrackerFactory;
      public constructor(param0: com.onesignal.OSSessionManager.SessionListener, param1: com.onesignal.influence.data.OSTrackerFactory, param2: com.onesignal.OSLogger);
    }
    export module OSSessionManager {
      export class SessionListener {
        public static class: java.lang.Class<com.onesignal.OSSessionManager.SessionListener>;
        /**
         * Constructs a new instance of the com.onesignal.OSSessionManager$SessionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSessionEnding(param0: java.util.List<com.onesignal.influence.domain.OSInfluence>): void });
        public constructor();
        public onSessionEnding(param0: java.util.List<com.onesignal.influence.domain.OSInfluence>): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSharedPreferences {
      public static class: java.lang.Class<com.onesignal.OSSharedPreferences>;
      /**
       * Constructs a new instance of the com.onesignal.OSSharedPreferences interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        getOutcomesV2KeyName(): string;
        getPreferencesName(): string;
        getString(param0: string, param1: string, param2: string): string;
        saveString(param0: string, param1: string, param2: string): void;
        getBool(param0: string, param1: string, param2: boolean): boolean;
        saveBool(param0: string, param1: string, param2: boolean): void;
        getInt(param0: string, param1: string, param2: number): number;
        saveInt(param0: string, param1: string, param2: number): void;
        getLong(param0: string, param1: string, param2: number): number;
        saveLong(param0: string, param1: string, param2: number): void;
        getStringSet(param0: string, param1: string, param2: java.util.Set<string>): java.util.Set<string>;
        saveStringSet(param0: string, param1: string, param2: java.util.Set<string>): void;
        getObject(param0: string, param1: string, param2: any): any;
        saveObject(param0: string, param1: string, param2: any): void;
      });
      public constructor();
      public getOutcomesV2KeyName(): string;
      public saveString(param0: string, param1: string, param2: string): void;
      public getPreferencesName(): string;
      public getStringSet(param0: string, param1: string, param2: java.util.Set<string>): java.util.Set<string>;
      public getObject(param0: string, param1: string, param2: any): any;
      public saveBool(param0: string, param1: string, param2: boolean): void;
      public saveInt(param0: string, param1: string, param2: number): void;
      public saveLong(param0: string, param1: string, param2: number): void;
      public saveObject(param0: string, param1: string, param2: any): void;
      public getString(param0: string, param1: string, param2: string): string;
      public saveStringSet(param0: string, param1: string, param2: java.util.Set<string>): void;
      public getLong(param0: string, param1: string, param2: number): number;
      public getInt(param0: string, param1: string, param2: number): number;
      public getBool(param0: string, param1: string, param2: boolean): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSharedPreferencesWrapper extends com.onesignal.OSSharedPreferences {
      public static class: java.lang.Class<com.onesignal.OSSharedPreferencesWrapper>;
      public getOutcomesV2KeyName(): string;
      public saveString(param0: string, param1: string, param2: string): void;
      public getPreferencesName(): string;
      public getStringSet(param0: string, param1: string, param2: java.util.Set<string>): java.util.Set<string>;
      public getObject(param0: string, param1: string, param2: any): any;
      public saveBool(param0: string, param1: string, param2: boolean): void;
      public saveInt(param0: string, param1: string, param2: number): void;
      public saveLong(param0: string, param1: string, param2: number): void;
      public saveObject(param0: string, param1: string, param2: any): void;
      public getString(param0: string, param1: string, param2: string): string;
      public saveStringSet(param0: string, param1: string, param2: java.util.Set<string>): void;
      public getLong(param0: string, param1: string, param2: number): number;
      public getInt(param0: string, param1: string, param2: number): number;
      public getBool(param0: string, param1: string, param2: boolean): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSubscriptionChangedInternalObserver {
      public static class: java.lang.Class<com.onesignal.OSSubscriptionChangedInternalObserver>;
      public changed(param0: com.onesignal.OSSubscriptionState): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSubscriptionObserver {
      public static class: java.lang.Class<com.onesignal.OSSubscriptionObserver>;
      /**
       * Constructs a new instance of the com.onesignal.OSSubscriptionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onOSSubscriptionChanged(param0: com.onesignal.OSSubscriptionStateChanges): void });
      public constructor();
      public onOSSubscriptionChanged(param0: com.onesignal.OSSubscriptionStateChanges): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSubscriptionState {
      public static class: java.lang.Class<com.onesignal.OSSubscriptionState>;
      public clone(): any;
      public toString(): string;
      public isPushDisabled(): boolean;
      public getObservable(): com.onesignal.OSObservable<any, com.onesignal.OSSubscriptionState>;
      public getPushToken(): string;
      public isSubscribed(): boolean;
      public getUserId(): string;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSubscriptionStateChanges {
      public static class: java.lang.Class<com.onesignal.OSSubscriptionStateChanges>;
      public constructor(param0: com.onesignal.OSSubscriptionState, param1: com.onesignal.OSSubscriptionState);
      public getFrom(): com.onesignal.OSSubscriptionState;
      public getTo(): com.onesignal.OSSubscriptionState;
      public toString(): string;
      public toJSONObject(): org.json.JSONObject;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSyncService extends com.onesignal.OSBackgroundSync {
      public static class: java.lang.Class<com.onesignal.OSSyncService>;
      public scheduleSyncTask(param0: globalAndroid.content.Context, param1: number): void;
      public scheduleSyncTask(param0: globalAndroid.content.Context): void;
      public getSyncServicePendingIntentClass(): java.lang.Class;
      public getSyncTaskId(): number;
      public getSyncTaskThreadId(): string;
      public getSyncServiceJobClass(): java.lang.Class;
    }
    export module OSSyncService {
      export class LegacySyncRunnable extends com.onesignal.OSSyncService.SyncRunnable {
        public static class: java.lang.Class<com.onesignal.OSSyncService.LegacySyncRunnable>;
        public stopSync(): void;
      }
      export class LollipopSyncRunnable extends com.onesignal.OSSyncService.SyncRunnable {
        public static class: java.lang.Class<com.onesignal.OSSyncService.LollipopSyncRunnable>;
        public stopSync(): void;
      }
      export abstract class SyncRunnable {
        public static class: java.lang.Class<com.onesignal.OSSyncService.SyncRunnable>;
        public run(): void;
        public stopSync(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSSystemConditionController {
      public static class: java.lang.Class<com.onesignal.OSSystemConditionController>;
    }
    export module OSSystemConditionController {
      export class OSSystemConditionHandler {
        public static class: java.lang.Class<com.onesignal.OSSystemConditionController.OSSystemConditionHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OSSystemConditionController$OSSystemConditionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { removeSystemConditionObserver(param0: string, param1: com.onesignal.ActivityLifecycleHandler.KeyboardListener): void });
        public constructor();
        public removeSystemConditionObserver(param0: string, param1: com.onesignal.ActivityLifecycleHandler.KeyboardListener): void;
      }
      export class OSSystemConditionObserver {
        public static class: java.lang.Class<com.onesignal.OSSystemConditionController.OSSystemConditionObserver>;
        /**
         * Constructs a new instance of the com.onesignal.OSSystemConditionController$OSSystemConditionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { systemConditionChanged(): void });
        public constructor();
        public systemConditionChanged(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTaskController {
      public static class: java.lang.Class<com.onesignal.OSTaskController>;
      public logger: com.onesignal.OSLogger;
    }
    export module OSTaskController {
      export class PendingTaskRunnable {
        public static class: java.lang.Class<com.onesignal.OSTaskController.PendingTaskRunnable>;
        public run(): void;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTaskRemoteController extends com.onesignal.OSTaskController {
      public static class: java.lang.Class<com.onesignal.OSTaskRemoteController>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSThrowable {
      public static class: java.lang.Class<com.onesignal.OSThrowable>;
    }
    export module OSThrowable {
      export class OSMainThreadException {
        public static class: java.lang.Class<com.onesignal.OSThrowable.OSMainThreadException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTime {
      public static class: java.lang.Class<com.onesignal.OSTime>;
      /**
       * Constructs a new instance of the com.onesignal.OSTime interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { getCurrentTimeMillis(): number; getElapsedRealtime(): number });
      public constructor();
      public getElapsedRealtime(): number;
      public getCurrentTimeMillis(): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTimeImpl extends com.onesignal.OSTime {
      public static class: java.lang.Class<com.onesignal.OSTimeImpl>;
      public getElapsedRealtime(): number;
      public constructor();
      public getCurrentTimeMillis(): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTimeoutHandler {
      public static class: java.lang.Class<com.onesignal.OSTimeoutHandler>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTrigger {
      public static class: java.lang.Class<com.onesignal.OSTrigger>;
      public kind: com.onesignal.OSTrigger.OSTriggerKind;
      public property: string;
      public operatorType: com.onesignal.OSTrigger.OSTriggerOperator;
      public value: any;
      public toString(): string;
      public toJSONObject(): org.json.JSONObject;
    }
    export module OSTrigger {
      export class OSTriggerKind {
        public static class: java.lang.Class<com.onesignal.OSTrigger.OSTriggerKind>;
        public static TIME_SINCE_LAST_IN_APP: com.onesignal.OSTrigger.OSTriggerKind;
        public static SESSION_TIME: com.onesignal.OSTrigger.OSTriggerKind;
        public static CUSTOM: com.onesignal.OSTrigger.OSTriggerKind;
        public static UNKNOWN: com.onesignal.OSTrigger.OSTriggerKind;
        public static valueOf(param0: string): com.onesignal.OSTrigger.OSTriggerKind;
        public static fromString(param0: string): com.onesignal.OSTrigger.OSTriggerKind;
        public toString(): string;
        public static values(): androidNative.Array<com.onesignal.OSTrigger.OSTriggerKind>;
      }
      export class OSTriggerOperator {
        public static class: java.lang.Class<com.onesignal.OSTrigger.OSTriggerOperator>;
        public static GREATER_THAN: com.onesignal.OSTrigger.OSTriggerOperator;
        public static LESS_THAN: com.onesignal.OSTrigger.OSTriggerOperator;
        public static EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
        public static NOT_EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
        public static LESS_THAN_OR_EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
        public static GREATER_THAN_OR_EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
        public static EXISTS: com.onesignal.OSTrigger.OSTriggerOperator;
        public static NOT_EXISTS: com.onesignal.OSTrigger.OSTriggerOperator;
        public static CONTAINS: com.onesignal.OSTrigger.OSTriggerOperator;
        public static valueOf(param0: string): com.onesignal.OSTrigger.OSTriggerOperator;
        public checksEquality(): boolean;
        public static values(): androidNative.Array<com.onesignal.OSTrigger.OSTriggerOperator>;
        public static fromString(param0: string): com.onesignal.OSTrigger.OSTriggerOperator;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSTriggerController {
      public static class: java.lang.Class<com.onesignal.OSTriggerController>;
      public getTriggers(): java.util.concurrent.ConcurrentHashMap<string, any>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSUtils {
      public static class: java.lang.Class<com.onesignal.OSUtils>;
      public static UNINITIALIZABLE_STATUS: number;
      public static MAX_NETWORK_REQUEST_ATTEMPT_COUNT: number;
      public static shouldRetryNetworkRequest(param0: number): boolean;
    }
    export module OSUtils {
      export class SchemaType {
        public static class: java.lang.Class<com.onesignal.OSUtils.SchemaType>;
        public static DATA: com.onesignal.OSUtils.SchemaType;
        public static HTTPS: com.onesignal.OSUtils.SchemaType;
        public static HTTP: com.onesignal.OSUtils.SchemaType;
        public static values(): androidNative.Array<com.onesignal.OSUtils.SchemaType>;
        public static fromString(param0: string): com.onesignal.OSUtils.SchemaType;
        public static valueOf(param0: string): com.onesignal.OSUtils.SchemaType;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OSViewUtils {
      public static class: java.lang.Class<com.onesignal.OSViewUtils>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OSWebView {
      public static class: java.lang.Class<com.onesignal.OSWebView>;
      public computeScroll(): void;
      public scrollTo(param0: number, param1: number): void;
      public constructor(param0: globalAndroid.content.Context);
      public overScrollBy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignal {
      public static class: java.lang.Class<com.onesignal.OneSignal>;
      public static sdkType: string;
      public static addSMSSubscriptionObserver(param0: com.onesignal.OSSMSSubscriptionObserver): void;
      public static setSMSNumber(param0: string, param1: com.onesignal.OneSignal.OSSMSUpdateHandler): void;
      public static setExternalUserId(param0: string, param1: com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler): void;
      public static setNotificationOpenedHandler(param0: com.onesignal.OneSignal.OSNotificationOpenedHandler): void;
      public static deleteTags(param0: string, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
      public static getSdkVersionRaw(): string;
      public static setSMSNumber(param0: string): void;
      public static logoutEmail(param0: com.onesignal.OneSignal.EmailUpdateHandler): void;
      public static sendOutcome(param0: string): void;
      public static getDeviceState(): com.onesignal.OSDeviceState;
      public static provideUserConsent(param0: boolean): void;
      public static removeExternalUserId(): void;
      public static sendTags(param0: org.json.JSONObject, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
      public static removeGroupedNotifications(param0: string): void;
      public static disableGMSMissingPrompt(param0: boolean): void;
      public static isLocationShared(): boolean;
      public static setSMSNumber(param0: string, param1: string, param2: com.onesignal.OneSignal.OSSMSUpdateHandler): void;
      public static removeNotification(param0: number): void;
      public static deleteTags(param0: org.json.JSONArray, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
      public static promptLocation(): void;
      public static addTriggers(param0: java.util.Map<string, any>): void;
      public static setRequiresUserPrivacyConsent(param0: boolean): void;
      public static postNotification(param0: string, param1: com.onesignal.OneSignal.PostNotificationResponseHandler): void;
      public static setLocationShared(param0: boolean): void;
      public constructor();
      public static removeEmailSubscriptionObserver(param0: com.onesignal.OSEmailSubscriptionObserver): void;
      public static promptForPushNotifications(param0: boolean): void;
      public static logoutSMSNumber(param0: com.onesignal.OneSignal.OSSMSUpdateHandler): void;
      public static sendOutcome(param0: string, param1: com.onesignal.OneSignal.OutcomeCallback): void;
      public static setLanguage(param0: string): void;
      public static setAppId(param0: string): void;
      public static sendUniqueOutcome(param0: string): void;
      public static setLogLevel(param0: number, param1: number): void;
      public static sendTags(param0: org.json.JSONObject): void;
      public static requiresUserPrivacyConsent(): boolean;
      public static deleteTags(param0: string): void;
      public static removePermissionObserver(param0: com.onesignal.OSPermissionObserver): void;
      public static setExternalUserId(param0: string, param1: string): void;
      public static pauseInAppMessages(param0: boolean): void;
      public static userProvidedPrivacyConsent(): boolean;
      public static deleteTags(param0: java.util.Collection<string>): void;
      public static setInAppMessageLifecycleHandler(param0: com.onesignal.OSInAppMessageLifecycleHandler): void;
      public static removeExternalUserId(param0: com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler): void;
      public static promptForPushNotifications(): void;
      public static addTrigger(param0: string, param1: any): void;
      public static sendUniqueOutcome(param0: string, param1: com.onesignal.OneSignal.OutcomeCallback): void;
      public static setEmail(param0: string): void;
      public static setNotificationWillShowInForegroundHandler(param0: com.onesignal.OneSignal.OSNotificationWillShowInForegroundHandler): void;
      public static onesignalLog(param0: com.onesignal.OneSignal.LOG_LEVEL, param1: string): void;
      public static removeTriggersForKeys(param0: java.util.Collection<string>): void;
      public static setLanguage(param0: string, param1: com.onesignal.OneSignal.OSSetLanguageCompletionHandler): void;
      public static deleteTag(param0: string): void;
      public static logoutSMSNumber(): void;
      public static setLogLevel(param0: com.onesignal.OneSignal.LOG_LEVEL, param1: com.onesignal.OneSignal.LOG_LEVEL): void;
      public static addSubscriptionObserver(param0: com.onesignal.OSSubscriptionObserver): void;
      public static postNotification(param0: org.json.JSONObject, param1: com.onesignal.OneSignal.PostNotificationResponseHandler): void;
      public static sendTags(param0: string): void;
      public static isInAppMessagingPaused(): boolean;
      public static setInAppMessageClickHandler(param0: com.onesignal.OneSignal.OSInAppMessageClickHandler): void;
      public static addEmailSubscriptionObserver(param0: com.onesignal.OSEmailSubscriptionObserver): void;
      public static getTriggers(): java.util.Map<string, any>;
      public static getTags(param0: com.onesignal.OneSignal.OSGetTagsHandler): void;
      public static getTriggerValueForKey(param0: string): any;
      public static removeSubscriptionObserver(param0: com.onesignal.OSSubscriptionObserver): void;
      public static setEmail(param0: string, param1: string, param2: com.onesignal.OneSignal.EmailUpdateHandler): void;
      public static logoutEmail(): void;
      public static removeSMSSubscriptionObserver(param0: com.onesignal.OSSMSSubscriptionObserver): void;
      public static setEmail(param0: string, param1: string): void;
      public static setExternalUserId(param0: string, param1: string, param2: com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler): void;
      public static deleteTag(param0: string, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
      public static setSMSNumber(param0: string, param1: string): void;
      public static sendOutcomeWithValue(param0: string, param1: number, param2: com.onesignal.OneSignal.OutcomeCallback): void;
      public static unsubscribeWhenNotificationsAreDisabled(param0: boolean): void;
      public static sendOutcomeWithValue(param0: string, param1: number): void;
      public static deleteTags(param0: java.util.Collection<string>, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
      public static addPermissionObserver(param0: com.onesignal.OSPermissionObserver): void;
      public static setEmail(param0: string, param1: com.onesignal.OneSignal.EmailUpdateHandler): void;
      public static sendTag(param0: string, param1: string): void;
      public static setExternalUserId(param0: string): void;
      public static clearOneSignalNotifications(): void;
      public static disablePush(param0: boolean): void;
      public static removeTriggerForKey(param0: string): void;
      public static initWithContext(param0: globalAndroid.content.Context): void;
    }
    export module OneSignal {
      export class AppEntryAction {
        public static class: java.lang.Class<com.onesignal.OneSignal.AppEntryAction>;
        public static NOTIFICATION_CLICK: com.onesignal.OneSignal.AppEntryAction;
        public static APP_OPEN: com.onesignal.OneSignal.AppEntryAction;
        public static APP_CLOSE: com.onesignal.OneSignal.AppEntryAction;
        public static valueOf(param0: string): com.onesignal.OneSignal.AppEntryAction;
        public isNotificationClick(): boolean;
        public static values(): androidNative.Array<com.onesignal.OneSignal.AppEntryAction>;
        public isAppClose(): boolean;
        public isAppOpen(): boolean;
      }
      export class ChangeTagsUpdateHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.ChangeTagsUpdateHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$ChangeTagsUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: org.json.JSONObject): void; onFailure(param0: com.onesignal.OneSignal.SendTagsError): void });
        public constructor();
        public onFailure(param0: com.onesignal.OneSignal.SendTagsError): void;
        public onSuccess(param0: org.json.JSONObject): void;
      }
      export class EmailErrorType {
        public static class: java.lang.Class<com.onesignal.OneSignal.EmailErrorType>;
        public static VALIDATION: com.onesignal.OneSignal.EmailErrorType;
        public static REQUIRES_EMAIL_AUTH: com.onesignal.OneSignal.EmailErrorType;
        public static INVALID_OPERATION: com.onesignal.OneSignal.EmailErrorType;
        public static NETWORK: com.onesignal.OneSignal.EmailErrorType;
        public static values(): androidNative.Array<com.onesignal.OneSignal.EmailErrorType>;
        public static valueOf(param0: string): com.onesignal.OneSignal.EmailErrorType;
      }
      export class EmailUpdateError {
        public static class: java.lang.Class<com.onesignal.OneSignal.EmailUpdateError>;
        public getMessage(): string;
        public getType(): com.onesignal.OneSignal.EmailErrorType;
      }
      export class EmailUpdateHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.EmailUpdateHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$EmailUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(): void; onFailure(param0: com.onesignal.OneSignal.EmailUpdateError): void });
        public constructor();
        public onFailure(param0: com.onesignal.OneSignal.EmailUpdateError): void;
        public onSuccess(): void;
      }
      export class EntryStateListener {
        public static class: java.lang.Class<com.onesignal.OneSignal.EntryStateListener>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$EntryStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onEntryStateChange(param0: com.onesignal.OneSignal.AppEntryAction): void });
        public constructor();
        public onEntryStateChange(param0: com.onesignal.OneSignal.AppEntryAction): void;
      }
      export class ExternalIdError {
        public static class: java.lang.Class<com.onesignal.OneSignal.ExternalIdError>;
        public getMessage(): string;
        public getType(): com.onesignal.OneSignal.ExternalIdErrorType;
      }
      export class ExternalIdErrorType {
        public static class: java.lang.Class<com.onesignal.OneSignal.ExternalIdErrorType>;
        public static REQUIRES_EXTERNAL_ID_AUTH: com.onesignal.OneSignal.ExternalIdErrorType;
        public static INVALID_OPERATION: com.onesignal.OneSignal.ExternalIdErrorType;
        public static NETWORK: com.onesignal.OneSignal.ExternalIdErrorType;
        public static valueOf(param0: string): com.onesignal.OneSignal.ExternalIdErrorType;
        public static values(): androidNative.Array<com.onesignal.OneSignal.ExternalIdErrorType>;
      }
      export class IAPUpdateJob {
        public static class: java.lang.Class<com.onesignal.OneSignal.IAPUpdateJob>;
      }
      export class LOG_LEVEL {
        public static class: java.lang.Class<com.onesignal.OneSignal.LOG_LEVEL>;
        public static NONE: com.onesignal.OneSignal.LOG_LEVEL;
        public static FATAL: com.onesignal.OneSignal.LOG_LEVEL;
        public static ERROR: com.onesignal.OneSignal.LOG_LEVEL;
        public static WARN: com.onesignal.OneSignal.LOG_LEVEL;
        public static INFO: com.onesignal.OneSignal.LOG_LEVEL;
        public static DEBUG: com.onesignal.OneSignal.LOG_LEVEL;
        public static VERBOSE: com.onesignal.OneSignal.LOG_LEVEL;
        public static values(): androidNative.Array<com.onesignal.OneSignal.LOG_LEVEL>;
        public static valueOf(param0: string): com.onesignal.OneSignal.LOG_LEVEL;
      }
      export class OSExternalUserIdUpdateCompletionHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSExternalUserIdUpdateCompletionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: org.json.JSONObject): void; onFailure(param0: com.onesignal.OneSignal.ExternalIdError): void });
        public constructor();
        public onSuccess(param0: org.json.JSONObject): void;
        public onFailure(param0: com.onesignal.OneSignal.ExternalIdError): void;
      }
      export class OSGetTagsHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSGetTagsHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSGetTagsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { tagsAvailable(param0: org.json.JSONObject): void });
        public constructor();
        public tagsAvailable(param0: org.json.JSONObject): void;
      }
      export class OSInAppMessageClickHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSInAppMessageClickHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSInAppMessageClickHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { inAppMessageClicked(param0: com.onesignal.OSInAppMessageAction): void });
        public constructor();
        public inAppMessageClicked(param0: com.onesignal.OSInAppMessageAction): void;
      }
      export class OSInternalExternalUserIdUpdateCompletionHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSInternalExternalUserIdUpdateCompletionHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSInternalExternalUserIdUpdateCompletionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onComplete(param0: string, param1: boolean): void });
        public constructor();
        public onComplete(param0: string, param1: boolean): void;
      }
      export class OSLanguageError {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSLanguageError>;
        public getCode(): number;
        public getMessage(): string;
      }
      export class OSNotificationOpenedHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSNotificationOpenedHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSNotificationOpenedHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { notificationOpened(param0: com.onesignal.OSNotificationOpenedResult): void });
        public constructor();
        public notificationOpened(param0: com.onesignal.OSNotificationOpenedResult): void;
      }
      export class OSNotificationWillShowInForegroundHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSNotificationWillShowInForegroundHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSNotificationWillShowInForegroundHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { notificationWillShowInForeground(param0: com.onesignal.OSNotificationReceivedEvent): void });
        public constructor();
        public notificationWillShowInForeground(param0: com.onesignal.OSNotificationReceivedEvent): void;
      }
      export class OSPromptActionCompletionCallback {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSPromptActionCompletionCallback>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSPromptActionCompletionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onCompleted(param0: com.onesignal.OneSignal.PromptActionResult): void });
        public constructor();
        public onCompleted(param0: com.onesignal.OneSignal.PromptActionResult): void;
      }
      export class OSRemoteNotificationReceivedHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSRemoteNotificationReceivedHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSRemoteNotificationReceivedHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { remoteNotificationReceived(param0: globalAndroid.content.Context, param1: com.onesignal.OSNotificationReceivedEvent): void });
        public constructor();
        public remoteNotificationReceived(param0: globalAndroid.content.Context, param1: com.onesignal.OSNotificationReceivedEvent): void;
      }
      export class OSSMSUpdateError {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSSMSUpdateError>;
        public getMessage(): string;
        public getType(): com.onesignal.OneSignal.SMSErrorType;
      }
      export class OSSMSUpdateHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSSMSUpdateHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSSMSUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: org.json.JSONObject): void; onFailure(param0: com.onesignal.OneSignal.OSSMSUpdateError): void });
        public constructor();
        public onFailure(param0: com.onesignal.OneSignal.OSSMSUpdateError): void;
        public onSuccess(param0: org.json.JSONObject): void;
      }
      export class OSSetLanguageCompletionHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.OSSetLanguageCompletionHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OSSetLanguageCompletionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: com.onesignal.OneSignal.OSLanguageError): void });
        public constructor();
        public onSuccess(param0: string): void;
        public onFailure(param0: com.onesignal.OneSignal.OSLanguageError): void;
      }
      export class OutcomeCallback {
        public static class: java.lang.Class<com.onesignal.OneSignal.OutcomeCallback>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$OutcomeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: com.onesignal.OSOutcomeEvent): void });
        public constructor();
        public onSuccess(param0: com.onesignal.OSOutcomeEvent): void;
      }
      export class PostNotificationResponseHandler {
        public static class: java.lang.Class<com.onesignal.OneSignal.PostNotificationResponseHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignal$PostNotificationResponseHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: org.json.JSONObject): void; onFailure(param0: org.json.JSONObject): void });
        public constructor();
        public onFailure(param0: org.json.JSONObject): void;
        public onSuccess(param0: org.json.JSONObject): void;
      }
      export class PromptActionResult {
        public static class: java.lang.Class<com.onesignal.OneSignal.PromptActionResult>;
        public static PERMISSION_GRANTED: com.onesignal.OneSignal.PromptActionResult;
        public static PERMISSION_DENIED: com.onesignal.OneSignal.PromptActionResult;
        public static LOCATION_PERMISSIONS_MISSING_MANIFEST: com.onesignal.OneSignal.PromptActionResult;
        public static ERROR: com.onesignal.OneSignal.PromptActionResult;
        public static valueOf(param0: string): com.onesignal.OneSignal.PromptActionResult;
        public static values(): androidNative.Array<com.onesignal.OneSignal.PromptActionResult>;
      }
      export class SMSErrorType {
        public static class: java.lang.Class<com.onesignal.OneSignal.SMSErrorType>;
        public static VALIDATION: com.onesignal.OneSignal.SMSErrorType;
        public static REQUIRES_SMS_AUTH: com.onesignal.OneSignal.SMSErrorType;
        public static INVALID_OPERATION: com.onesignal.OneSignal.SMSErrorType;
        public static NETWORK: com.onesignal.OneSignal.SMSErrorType;
        public static valueOf(param0: string): com.onesignal.OneSignal.SMSErrorType;
        public static values(): androidNative.Array<com.onesignal.OneSignal.SMSErrorType>;
      }
      export class SendTagsError {
        public static class: java.lang.Class<com.onesignal.OneSignal.SendTagsError>;
        public getCode(): number;
        public getMessage(): string;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalAPIClient {
      public static class: java.lang.Class<com.onesignal.OneSignalAPIClient>;
      /**
       * Constructs a new instance of the com.onesignal.OneSignalAPIClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { put(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void; post(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void; get(param0: string, param1: com.onesignal.OneSignalApiResponseHandler, param2: string): void; getSync(param0: string, param1: com.onesignal.OneSignalApiResponseHandler, param2: string): void; putSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void; postSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void });
      public constructor();
      public postSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
      public getSync(param0: string, param1: com.onesignal.OneSignalApiResponseHandler, param2: string): void;
      public get(param0: string, param1: com.onesignal.OneSignalApiResponseHandler, param2: string): void;
      public put(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
      public post(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
      public putSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalAnimate {
      public static class: java.lang.Class<com.onesignal.OneSignalAnimate>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalApiResponseHandler {
      public static class: java.lang.Class<com.onesignal.OneSignalApiResponseHandler>;
      /**
       * Constructs a new instance of the com.onesignal.OneSignalApiResponseHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: number, param1: string, param2: java.lang.Throwable): void });
      public constructor();
      public onSuccess(param0: string): void;
      public onFailure(param0: number, param1: string, param2: java.lang.Throwable): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalBounceInterpolator {
      public static class: java.lang.Class<com.onesignal.OneSignalBounceInterpolator>;
      public getInterpolation(param0: number): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalChromeTab {
      public static class: java.lang.Class<com.onesignal.OneSignalChromeTab>;
      public static open(param0: string, param1: boolean): boolean;
    }
    export module OneSignalChromeTab {
      export class OneSignalCustomTabsServiceConnection {
        public static class: java.lang.Class<com.onesignal.OneSignalChromeTab.OneSignalCustomTabsServiceConnection>;
        public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
        public onCustomTabsServiceConnected(param0: globalAndroid.content.ComponentName, param1: androidx.browser.customtabs.CustomTabsClient): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalDb {
      public static class: java.lang.Class<com.onesignal.OneSignalDb>;
      /**
       * Constructs a new instance of the com.onesignal.OneSignalDb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string): globalAndroid.database.Cursor;
        query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string): globalAndroid.database.Cursor;
        insert(param0: string, param1: string, param2: globalAndroid.content.ContentValues): void;
        insertOrThrow(param0: string, param1: string, param2: globalAndroid.content.ContentValues): void;
        update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
        delete(param0: string, param1: string, param2: androidNative.Array<string>): void;
      });
      public constructor();
      public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string): globalAndroid.database.Cursor;
      public delete(param0: string, param1: string, param2: androidNative.Array<string>): void;
      public insertOrThrow(param0: string, param1: string, param2: globalAndroid.content.ContentValues): void;
      public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
      public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string): globalAndroid.database.Cursor;
      public insert(param0: string, param1: string, param2: globalAndroid.content.ContentValues): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalDbContract {
      public static class: java.lang.Class<com.onesignal.OneSignalDbContract>;
    }
    export module OneSignalDbContract {
      export abstract class InAppMessageTable {
        public static class: java.lang.Class<com.onesignal.OneSignalDbContract.InAppMessageTable>;
        public static TABLE_NAME: string;
        public static COLUMN_NAME_MESSAGE_ID: string;
        public static COLUMN_NAME_DISPLAY_QUANTITY: string;
        public static COLUMN_NAME_LAST_DISPLAY: string;
        public static COLUMN_CLICK_IDS: string;
        public static COLUMN_DISPLAYED_IN_SESSION: string;
      }
      export abstract class NotificationTable {
        public static class: java.lang.Class<com.onesignal.OneSignalDbContract.NotificationTable>;
        public static TABLE_NAME: string;
        public static COLUMN_NAME_NOTIFICATION_ID: string;
        public static COLUMN_NAME_ANDROID_NOTIFICATION_ID: string;
        public static COLUMN_NAME_GROUP_ID: string;
        public static COLUMN_NAME_COLLAPSE_ID: string;
        public static COLUMN_NAME_IS_SUMMARY: string;
        public static COLUMN_NAME_OPENED: string;
        public static COLUMN_NAME_DISMISSED: string;
        public static COLUMN_NAME_TITLE: string;
        public static COLUMN_NAME_MESSAGE: string;
        public static COLUMN_NAME_CREATED_TIME: string;
        public static COLUMN_NAME_EXPIRE_TIME: string;
        public static COLUMN_NAME_FULL_DATA: string;
        public static INDEX_CREATE_NOTIFICATION_ID: string;
        public static INDEX_CREATE_ANDROID_NOTIFICATION_ID: string;
        public static INDEX_CREATE_GROUP_ID: string;
        public static INDEX_CREATE_COLLAPSE_ID: string;
        public static INDEX_CREATE_CREATED_TIME: string;
        public static INDEX_CREATE_EXPIRE_TIME: string;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalDbHelper implements com.onesignal.OneSignalDb {
      public static class: java.lang.Class<com.onesignal.OneSignalDbHelper>;
      public static SQL_CREATE_ENTRIES: string;
      public static SQL_INDEX_ENTRIES: androidNative.Array<string>;
      public static getInstance(param0: globalAndroid.content.Context): com.onesignal.OneSignalDbHelper;
      public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string): globalAndroid.database.Cursor;
      public delete(param0: string, param1: string, param2: androidNative.Array<string>): void;
      public insertOrThrow(param0: string, param1: string, param2: globalAndroid.content.ContentValues): void;
      public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
      public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
      public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
      public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string): globalAndroid.database.Cursor;
      public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
      public insert(param0: string, param1: string, param2: globalAndroid.content.ContentValues): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalHmsEventBridge {
      public static class: java.lang.Class<com.onesignal.OneSignalHmsEventBridge>;
      public static HMS_TTL_KEY: string;
      public static HMS_SENT_TIME_KEY: string;
      public constructor();
      /** @deprecated */
      public static onNewToken(param0: globalAndroid.content.Context, param1: string): void;
      public static onNewToken(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle): void;
      public static onMessageReceived(param0: globalAndroid.content.Context, param1: com.huawei.hms.push.RemoteMessage): void;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class OneSignalJobServiceBase {
      public static class: java.lang.Class<com.onesignal.OneSignalJobServiceBase>;
      public onStopJob(param0: any): boolean;
      public onStartJob(param0: any): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalNotificationManager {
      public static class: java.lang.Class<com.onesignal.OneSignalNotificationManager>;
      public constructor();
      public static areNotificationsEnabled(param0: globalAndroid.content.Context, param1: string): boolean;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalPrefs {
      public static class: java.lang.Class<com.onesignal.OneSignalPrefs>;
      public static PREFS_ONESIGNAL: string;
      public static PREFS_PLAYER_PURCHASES: string;
      public static PREFS_TRIGGERS: string;
      public static PREFS_OS_LAST_LOCATION_TIME: string;
      public static PREFS_GT_SOUND_ENABLED: string;
      public static PREFS_OS_LAST_SESSION_TIME: string;
      public static PREFS_GT_VIBRATE_ENABLED: string;
      public static PREFS_OS_FILTER_OTHER_GCM_RECEIVERS: string;
      public static PREFS_GT_APP_ID: string;
      public static PREFS_GT_PLAYER_ID: string;
      public static PREFS_GT_UNSENT_ACTIVE_TIME: string;
      public static PREFS_OS_UNSENT_ATTRIBUTED_ACTIVE_TIME: string;
      public static PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_: string;
      public static PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_: string;
      public static PREFS_ONESIGNAL_ACCEPTED_NOTIFICATION_LAST: string;
      public static PREFS_ONESIGNAL_SUBSCRIPTION_LAST: string;
      public static PREFS_ONESIGNAL_PLAYER_ID_LAST: string;
      public static PREFS_ONESIGNAL_PUSH_TOKEN_LAST: string;
      public static PREFS_ONESIGNAL_PERMISSION_ACCEPTED_LAST: string;
      public static PREFS_GT_DO_NOT_SHOW_MISSING_GPS: string;
      public static PREFS_ONESIGNAL_SUBSCRIPTION: string;
      public static PREFS_ONESIGNAL_SYNCED_SUBSCRIPTION: string;
      public static PREFS_GT_REGISTRATION_ID: string;
      public static PREFS_ONESIGNAL_USER_PROVIDED_CONSENT: string;
      public static PREFS_OS_ETAG_PREFIX: string;
      public static PREFS_OS_HTTP_CACHE_PREFIX: string;
      public static PREFS_GT_FIREBASE_TRACKING_ENABLED: string;
      public static PREFS_OS_RESTORE_TTL_FILTER: string;
      public static PREFS_OS_CLEAR_GROUP_SUMMARY_CLICK: string;
      public static PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED: string;
      public static PREFS_OS_DISABLE_GMS_MISSING_PROMPT: string;
      public static PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT: string;
      public static PREFS_OS_LOCATION_SHARED: string;
      public static PREFS_OS_RECEIVE_RECEIPTS_ENABLED: string;
      public static PREFS_OS_ATTRIBUTED_INFLUENCES: string;
      public static PREFS_OS_EMAIL_ID: string;
      public static PREFS_ONESIGNAL_EMAIL_ID_LAST: string;
      public static PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST: string;
      public static PREFS_OS_SMS_ID: string;
      public static PREFS_OS_SMS_ID_LAST: string;
      public static PREFS_OS_SMS_NUMBER_LAST: string;
      public static PREFS_OS_CACHED_IAMS: string;
      public static PREFS_OS_DISMISSED_IAMS: string;
      public static PREFS_OS_IMPRESSIONED_IAMS: string;
      public static PREFS_OS_CLICKED_CLICK_IDS_IAMS: string;
      public static PREFS_OS_PAGE_IMPRESSIONED_IAMS: string;
      public static PREFS_OS_LAST_TIME_IAM_DISMISSED: string;
      public static prefsHandler: com.onesignal.OneSignalPrefs.WritePrefHandlerThread;
      public static initializePool(): void;
      public static saveLong(param0: string, param1: string, param2: number): void;
      public static saveInt(param0: string, param1: string, param2: number): void;
      public static startDelayedWrite(): void;
      public static saveObject(param0: string, param1: string, param2: any): void;
      public static saveBool(param0: string, param1: string, param2: boolean): void;
      public static getStringSet(param0: string, param1: string, param2: java.util.Set<string>): java.util.Set<string>;
      public static saveString(param0: string, param1: string, param2: string): void;
      public static saveStringSet(param0: string, param1: string, param2: java.util.Set<string>): void;
    }
    export module OneSignalPrefs {
      export class WritePrefHandlerThread {
        public static class: java.lang.Class<com.onesignal.OneSignalPrefs.WritePrefHandlerThread>;
        public onLooperPrepared(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalRemoteParams {
      public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams>;
      public static DEFAULT_INDIRECT_ATTRIBUTION_WINDOW: number;
      public static DEFAULT_NOTIFICATION_LIMIT: number;
      public constructor();
    }
    export module OneSignalRemoteParams {
      export class Callback {
        public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams.Callback>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignalRemoteParams$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { complete(param0: com.onesignal.OneSignalRemoteParams.Params): void });
        public constructor();
        public complete(param0: com.onesignal.OneSignalRemoteParams.Params): void;
      }
      export class FCMParams {
        public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams.FCMParams>;
      }
      export class InfluenceParams {
        public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams.InfluenceParams>;
        public getIamLimit(): number;
        public getIndirectNotificationAttributionWindow(): number;
        public isIndirectEnabled(): boolean;
        public isUnattributedEnabled(): boolean;
        public getIndirectIAMAttributionWindow(): number;
        public toString(): string;
        public isDirectEnabled(): boolean;
        public getNotificationLimit(): number;
        public constructor();
      }
      export class Params {
        public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams.Params>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalRestClient {
      public static class: java.lang.Class<com.onesignal.OneSignalRestClient>;
      public static getSync(param0: string, param1: com.onesignal.OneSignalRestClient.ResponseHandler, param2: string): void;
      public static putSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
      public static postSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
      public static get(param0: string, param1: com.onesignal.OneSignalRestClient.ResponseHandler, param2: string): void;
      public static put(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
      public static post(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
    }
    export module OneSignalRestClient {
      export abstract class ResponseHandler {
        public static class: java.lang.Class<com.onesignal.OneSignalRestClient.ResponseHandler>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalRestClientWrapper extends com.onesignal.OneSignalAPIClient {
      public static class: java.lang.Class<com.onesignal.OneSignalRestClientWrapper>;
      public postSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
      public getSync(param0: string, param1: com.onesignal.OneSignalApiResponseHandler, param2: string): void;
      public get(param0: string, param1: com.onesignal.OneSignalApiResponseHandler, param2: string): void;
      public put(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
      public post(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
      public putSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalApiResponseHandler): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalSimpleDateFormat {
      public static class: java.lang.Class<com.onesignal.OneSignalSimpleDateFormat>;
    }
  }
}

declare module com {
  export module onesignal {
    export class OneSignalStateSynchronizer {
      public static class: java.lang.Class<com.onesignal.OneSignalStateSynchronizer>;
    }
    export module OneSignalStateSynchronizer {
      export class OSDeviceInfoCompletionHandler {
        public static class: java.lang.Class<com.onesignal.OneSignalStateSynchronizer.OSDeviceInfoCompletionHandler>;
        /**
         * Constructs a new instance of the com.onesignal.OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: com.onesignal.OneSignalStateSynchronizer.OSDeviceInfoError): void });
        public constructor();
        public onSuccess(param0: string): void;
        public onFailure(param0: com.onesignal.OneSignalStateSynchronizer.OSDeviceInfoError): void;
      }
      export class OSDeviceInfoError {
        public static class: java.lang.Class<com.onesignal.OneSignalStateSynchronizer.OSDeviceInfoError>;
        public errorCode: number;
        public message: string;
        public getCode(): number;
        public getMessage(): string;
      }
      export class UserStateSynchronizerType {
        public static class: java.lang.Class<com.onesignal.OneSignalStateSynchronizer.UserStateSynchronizerType>;
        public static PUSH: com.onesignal.OneSignalStateSynchronizer.UserStateSynchronizerType;
        public static EMAIL: com.onesignal.OneSignalStateSynchronizer.UserStateSynchronizerType;
        public static SMS: com.onesignal.OneSignalStateSynchronizer.UserStateSynchronizerType;
        public isPush(): boolean;
        public isEmail(): boolean;
        public isSMS(): boolean;
        public static valueOf(param0: string): com.onesignal.OneSignalStateSynchronizer.UserStateSynchronizerType;
        public static values(): androidNative.Array<com.onesignal.OneSignalStateSynchronizer.UserStateSynchronizerType>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class PermissionsActivity {
      public static class: java.lang.Class<com.onesignal.PermissionsActivity>;
      public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
      public static registerAsCallback(param0: string, param1: com.onesignal.PermissionsActivity.PermissionCallback): void;
      public onCreate(param0: globalAndroid.os.Bundle): void;
      public constructor();
      public onNewIntent(param0: globalAndroid.content.Intent): void;
    }
    export module PermissionsActivity {
      export class PermissionCallback {
        public static class: java.lang.Class<com.onesignal.PermissionsActivity.PermissionCallback>;
        /**
         * Constructs a new instance of the com.onesignal.PermissionsActivity$PermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onAccept(): void; onReject(param0: boolean): void });
        public constructor();
        public onReject(param0: boolean): void;
        public onAccept(): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class PushRegistrator {
      public static class: java.lang.Class<com.onesignal.PushRegistrator>;
      /**
       * Constructs a new instance of the com.onesignal.PushRegistrator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void });
      public constructor();
      public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
    }
    export module PushRegistrator {
      export class RegisteredHandler {
        public static class: java.lang.Class<com.onesignal.PushRegistrator.RegisteredHandler>;
        /**
         * Constructs a new instance of the com.onesignal.PushRegistrator$RegisteredHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { complete(param0: string, param1: number): void });
        public constructor();
        public complete(param0: string, param1: number): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class PushRegistratorADM extends com.onesignal.PushRegistrator {
      public static class: java.lang.Class<com.onesignal.PushRegistratorADM>;
      public static fireCallback(param0: string): void;
      public constructor();
      public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class PushRegistratorAbstractGoogle extends com.onesignal.PushRegistrator {
      public static class: java.lang.Class<com.onesignal.PushRegistratorAbstractGoogle>;
      public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class PushRegistratorFCM extends com.onesignal.PushRegistratorAbstractGoogle {
      public static class: java.lang.Class<com.onesignal.PushRegistratorFCM>;
      public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
    }
    export module PushRegistratorFCM {
      export class Params {
        public static class: java.lang.Class<com.onesignal.PushRegistratorFCM.Params>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class PushRegistratorHMS extends com.onesignal.PushRegistrator {
      public static class: java.lang.Class<com.onesignal.PushRegistratorHMS>;
      public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class RootToolsInternalMethods {
      public static class: java.lang.Class<com.onesignal.RootToolsInternalMethods>;
    }
  }
}

declare module com {
  export module onesignal {
    export class SyncJobService {
      public static class: java.lang.Class<com.onesignal.SyncJobService>;
      public onStopJob(param0: any): boolean;
      public onStartJob(param0: any): boolean;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export class SyncService {
      public static class: java.lang.Class<com.onesignal.SyncService>;
      public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
      public constructor();
      public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
    }
  }
}

declare module com {
  export module onesignal {
    export class TLS12SocketFactory {
      public static class: java.lang.Class<com.onesignal.TLS12SocketFactory>;
      public createSocket(param0: string, param1: number): java.net.Socket;
      public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
      public constructor(param0: javax.net.ssl.SSLSocketFactory);
      public getDefaultCipherSuites(): androidNative.Array<string>;
      public getSupportedCipherSuites(): androidNative.Array<string>;
      public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
      public createSocket(): java.net.Socket;
      public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
      public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
    }
  }
}

declare module com {
  export module onesignal {
    export class TrackAmazonPurchase {
      public static class: java.lang.Class<com.onesignal.TrackAmazonPurchase>;
    }
    export module TrackAmazonPurchase {
      export class OSPurchasingListener {
        public static class: java.lang.Class<com.onesignal.TrackAmazonPurchase.OSPurchasingListener>;
        public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
        public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
        public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
        public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class TrackFirebaseAnalytics {
      public static class: java.lang.Class<com.onesignal.TrackFirebaseAnalytics>;
    }
  }
}

declare module com {
  export module onesignal {
    export class TrackGooglePurchase {
      public static class: java.lang.Class<com.onesignal.TrackGooglePurchase>;
    }
  }
}

declare module com {
  export module onesignal {
    export class UpgradeReceiver {
      public static class: java.lang.Class<com.onesignal.UpgradeReceiver>;
      public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
      public constructor();
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class UserState {
      public static class: java.lang.Class<com.onesignal.UserState>;
      public static TAGS: string;
      public static DEVICE_TYPE_ANDROID: number;
      public static DEVICE_TYPE_FIREOS: number;
      public static DEVICE_TYPE_EMAIL: number;
      public static DEVICE_TYPE_HUAWEI: number;
      public static DEVICE_TYPE_SMS: number;
      public static PUSH_STATUS_SUBSCRIBED: number;
      public static PUSH_STATUS_HMS_TOKEN_TIMEOUT: number;
      public static PUSH_STATUS_HMS_ARGUMENTS_INVALID: number;
      public static PUSH_STATUS_HMS_API_EXCEPTION_OTHER: number;
      public static PUSH_STATUS_MISSING_HMS_PUSHKIT_LIBRARY: number;
      public getSyncValues(): com.onesignal.ImmutableJSONObject;
      public getDependValues(): com.onesignal.ImmutableJSONObject;
      public toString(): string;
      public setDependValues(param0: org.json.JSONObject): void;
      public getSyncValuesCopy(): org.json.JSONObject;
      public setSyncValues(param0: org.json.JSONObject): void;
      public addDependFields(): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class UserStateEmail extends com.onesignal.UserState {
      public static class: java.lang.Class<com.onesignal.UserStateEmail>;
      public addDependFields(): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class UserStateEmailSynchronizer extends com.onesignal.UserStateSecondaryChannelSynchronizer {
      public static class: java.lang.Class<com.onesignal.UserStateEmailSynchronizer>;
      public getId(): string;
      public getChannelKey(): string;
      public getDeviceType(): number;
      public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
      public getAuthHashKey(): string;
    }
  }
}

declare module com {
  export module onesignal {
    export class UserStatePush extends com.onesignal.UserState {
      public static class: java.lang.Class<com.onesignal.UserStatePush>;
      public addDependFields(): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class UserStatePushSynchronizer extends com.onesignal.UserStateSynchronizer {
      public static class: java.lang.Class<com.onesignal.UserStatePushSynchronizer>;
      public getLogLevel(): com.onesignal.OneSignal.LOG_LEVEL;
      public scheduleSyncToServer(): void;
      public setPermission(param0: boolean): void;
      public getId(): string;
      public addOnSessionOrCreateExtras(param0: org.json.JSONObject): void;
      public getLanguage(): string;
      public getUserSubscribePreference(): boolean;
      public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
      public onSuccessfulSync(param0: org.json.JSONObject): void;
      public fireEventsForUpdateFailure(param0: org.json.JSONObject): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class UserStateSMS extends com.onesignal.UserState {
      public static class: java.lang.Class<com.onesignal.UserStateSMS>;
      public addDependFields(): void;
    }
  }
}

declare module com {
  export module onesignal {
    export class UserStateSMSSynchronizer extends com.onesignal.UserStateSecondaryChannelSynchronizer {
      public static class: java.lang.Class<com.onesignal.UserStateSMSSynchronizer>;
      public getId(): string;
      public getChannelKey(): string;
      public getDeviceType(): number;
      public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
      public getAuthHashKey(): string;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class UserStateSecondaryChannelSynchronizer extends com.onesignal.UserStateSynchronizer {
      public static class: java.lang.Class<com.onesignal.UserStateSecondaryChannelSynchronizer>;
      public getLogLevel(): com.onesignal.OneSignal.LOG_LEVEL;
      public getId(): string;
      public setPermission(param0: boolean): void;
      public scheduleSyncToServer(): void;
      public getChannelKey(): string;
      public getDeviceType(): number;
      public addOnSessionOrCreateExtras(param0: org.json.JSONObject): void;
      public getUserSubscribePreference(): boolean;
      public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
      public onSuccessfulSync(param0: org.json.JSONObject): void;
      public fireEventsForUpdateFailure(param0: org.json.JSONObject): void;
      public getAuthHashKey(): string;
    }
  }
}

declare module com {
  export module onesignal {
    export abstract class UserStateSynchronizer {
      public static class: java.lang.Class<com.onesignal.UserStateSynchronizer>;
      public static IDENTIFIER: string;
      public static DEVICE_TYPE: string;
      public static DEVICE_PLAYER_ID: string;
      public static PARENT_PLAYER_ID: string;
      public static USER_SUBSCRIBE_PREF: string;
      public static ANDROID_PERMISSION: string;
      public static SUBSCRIBABLE_STATUS: string;
      public static TAGS: string;
      public static LANGUAGE: string;
      public static EXTERNAL_USER_ID: string;
      public static EMAIL_KEY: string;
      public static LOGOUT_EMAIL: string;
      public static SMS_NUMBER_KEY: string;
      public LOCK: any;
      public waitingForSessionResponse: boolean;
      public scheduleSyncToServer(): void;
      public generateJsonDiff(param0: org.json.JSONObject, param1: org.json.JSONObject, param2: org.json.JSONObject, param3: java.util.Set<string>): org.json.JSONObject;
      public addOnSessionOrCreateExtras(param0: org.json.JSONObject): void;
      public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
      public getNetworkHandlerThread(param0: java.lang.Integer): com.onesignal.UserStateSynchronizer.NetworkHandlerThread;
      public fireEventsForUpdateFailure(param0: org.json.JSONObject): void;
      public getCurrentUserState(): com.onesignal.UserState;
      public getLogLevel(): com.onesignal.OneSignal.LOG_LEVEL;
      public getId(): string;
      public setPermission(param0: boolean): void;
      public getToSyncUserState(): com.onesignal.UserState;
      public getUserSubscribePreference(): boolean;
      public onSuccessfulSync(param0: org.json.JSONObject): void;
      public getUserStateForModification(): com.onesignal.UserState;
    }
    export module UserStateSynchronizer {
      export class GetTagsResult {
        public static class: java.lang.Class<com.onesignal.UserStateSynchronizer.GetTagsResult>;
      }
      export class NetworkHandlerThread {
        public static class: java.lang.Class<com.onesignal.UserStateSynchronizer.NetworkHandlerThread>;
        public static NETWORK_HANDLER_USERSTATE: number;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export class WebViewManager extends com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener {
      public static class: java.lang.Class<com.onesignal.WebViewManager>;
      public static lastInstance: com.onesignal.WebViewManager;
      public constructor(param0: com.onesignal.OSInAppMessageInternal, param1: globalAndroid.app.Activity, param2: com.onesignal.OSInAppMessageContent);
      public dismissAndAwaitNextMessage(param0: com.onesignal.WebViewManager.OneSignalGenericCallback): void;
    }
    export module WebViewManager {
      export class OSJavaScriptInterface {
        public static class: java.lang.Class<com.onesignal.WebViewManager.OSJavaScriptInterface>;
        public postMessage(param0: string): void;
      }
      export class OneSignalGenericCallback {
        public static class: java.lang.Class<com.onesignal.WebViewManager.OneSignalGenericCallback>;
        /**
         * Constructs a new instance of the com.onesignal.WebViewManager$OneSignalGenericCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onComplete(): void });
        public constructor();
        public onComplete(): void;
      }
      export class Position {
        public static class: java.lang.Class<com.onesignal.WebViewManager.Position>;
        public static TOP_BANNER: com.onesignal.WebViewManager.Position;
        public static BOTTOM_BANNER: com.onesignal.WebViewManager.Position;
        public static CENTER_MODAL: com.onesignal.WebViewManager.Position;
        public static FULL_SCREEN: com.onesignal.WebViewManager.Position;
        public static valueOf(param0: string): com.onesignal.WebViewManager.Position;
        public static values(): androidNative.Array<com.onesignal.WebViewManager.Position>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export class OSInfluenceConstants {
        public static class: java.lang.Class<com.onesignal.influence.OSInfluenceConstants>;
        public static TIME: string;
        public static INFLUENCE_CHANNEL: string;
        public static INFLUENCE_TYPE: string;
        public static INFLUENCE_IDS: string;
        public static IAM_ID_TAG: string;
        public static DIRECT_TAG: string;
        public static NOTIFICATIONS_IDS: string;
        public static NOTIFICATION_ID_TAG: string;
        public static PREFS_OS_LAST_ATTRIBUTED_NOTIFICATION_OPEN: string;
        public static PREFS_OS_LAST_NOTIFICATIONS_RECEIVED: string;
        public static PREFS_OS_LAST_IAMS_RECEIVED: string;
        public static PREFS_OS_NOTIFICATION_LIMIT: string;
        public static PREFS_OS_IAM_LIMIT: string;
        public static PREFS_OS_NOTIFICATION_INDIRECT_ATTRIBUTION_WINDOW: string;
        public static PREFS_OS_IAM_INDIRECT_ATTRIBUTION_WINDOW: string;
        public static PREFS_OS_DIRECT_ENABLED: string;
        public static PREFS_OS_INDIRECT_ENABLED: string;
        public static PREFS_OS_UNATTRIBUTED_ENABLED: string;
        public static PREFS_OS_OUTCOMES_CURRENT_NOTIFICATION_INFLUENCE: string;
        public static PREFS_OS_OUTCOMES_CURRENT_IAM_INFLUENCE: string;
        public static INSTANCE: com.onesignal.influence.OSInfluenceConstants;
        public getNOTIFICATION_TAG(): string;
        public getIAM_TAG(): string;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module data {
        export abstract class OSChannelTracker {
          public static class: java.lang.Class<com.onesignal.influence.data.OSChannelTracker>;
          public getIdTag(): string;
          public getDirectId(): string;
          public addSessionData(param0: org.json.JSONObject, param1: com.onesignal.influence.domain.OSInfluence): void;
          public getLastReceivedIds(): org.json.JSONArray;
          public getChannelType(): com.onesignal.influence.domain.OSInfluenceChannel;
          public setIndirectIds(param0: org.json.JSONArray): void;
          public getLastChannelObjectsReceivedByNewId(param0: string): org.json.JSONArray;
          public setInfluenceType(param0: com.onesignal.influence.domain.OSInfluenceType): void;
          public getInfluenceType(): com.onesignal.influence.domain.OSInfluenceType;
          public toString(): string;
          public setLogger(param0: com.onesignal.OSLogger): void;
          public getIndirectIds(): org.json.JSONArray;
          public getLastChannelObjects(): org.json.JSONArray;
          public initInfluencedTypeFromCache(): void;
          public getLogger(): com.onesignal.OSLogger;
          public hashCode(): number;
          public constructor(param0: com.onesignal.influence.data.OSInfluenceDataRepository, param1: com.onesignal.OSLogger, param2: com.onesignal.OSTime);
          public cacheState(): void;
          public getDataRepository(): com.onesignal.influence.data.OSInfluenceDataRepository;
          public getCurrentSessionInfluence(): com.onesignal.influence.domain.OSInfluence;
          public equals(param0: any): boolean;
          public getIndirectAttributionWindow(): number;
          public setDataRepository(param0: com.onesignal.influence.data.OSInfluenceDataRepository): void;
          public saveChannelObjects(param0: org.json.JSONArray): void;
          public setDirectId(param0: string): void;
          public saveLastId(param0: string): void;
          public resetAndInitInfluence(): void;
          public getChannelLimit(): number;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module data {
        export class OSInAppMessageTracker extends com.onesignal.influence.data.OSChannelTracker {
          public static class: java.lang.Class<com.onesignal.influence.data.OSInAppMessageTracker>;
          public getIdTag(): string;
          public getIndirectAttributionWindow(): number;
          public addSessionData(param0: org.json.JSONObject, param1: com.onesignal.influence.domain.OSInfluence): void;
          public constructor(param0: com.onesignal.influence.data.OSInfluenceDataRepository, param1: com.onesignal.OSLogger, param2: com.onesignal.OSTime);
          public saveChannelObjects(param0: org.json.JSONArray): void;
          public cacheState(): void;
          public getChannelType(): com.onesignal.influence.domain.OSInfluenceChannel;
          public getLastChannelObjects(): org.json.JSONArray;
          public initInfluencedTypeFromCache(): void;
          public getLastChannelObjectsReceivedByNewId(param0: string): org.json.JSONArray;
          public getChannelLimit(): number;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module data {
        export class OSInfluenceDataRepository {
          public static class: java.lang.Class<com.onesignal.influence.data.OSInfluenceDataRepository>;
          public getNotificationCachedInfluenceType(): com.onesignal.influence.domain.OSInfluenceType;
          public getCachedNotificationOpenId(): string;
          public getNotificationLimit(): number;
          public isIndirectInfluenceEnabled(): boolean;
          public cacheIAMInfluenceType(param0: com.onesignal.influence.domain.OSInfluenceType): void;
          public isUnattributedInfluenceEnabled(): boolean;
          public cacheNotificationInfluenceType(param0: com.onesignal.influence.domain.OSInfluenceType): void;
          public saveNotifications(param0: org.json.JSONArray): void;
          public getNotificationIndirectAttributionWindow(): number;
          public saveIAMs(param0: org.json.JSONArray): void;
          public getIamIndirectAttributionWindow(): number;
          public getLastNotificationsReceivedData(): org.json.JSONArray;
          public getLastIAMsReceivedData(): org.json.JSONArray;
          public saveInfluenceParams(param0: com.onesignal.OneSignalRemoteParams.InfluenceParams): void;
          public cacheNotificationOpenId(param0: string): void;
          public constructor(param0: com.onesignal.OSSharedPreferences);
          public getIamLimit(): number;
          public isDirectInfluenceEnabled(): boolean;
          public getIamCachedInfluenceType(): com.onesignal.influence.domain.OSInfluenceType;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module data {
        export class OSNotificationTracker extends com.onesignal.influence.data.OSChannelTracker {
          public static class: java.lang.Class<com.onesignal.influence.data.OSNotificationTracker>;
          public getIdTag(): string;
          public getIndirectAttributionWindow(): number;
          public addSessionData(param0: org.json.JSONObject, param1: com.onesignal.influence.domain.OSInfluence): void;
          public constructor(param0: com.onesignal.influence.data.OSInfluenceDataRepository, param1: com.onesignal.OSLogger, param2: com.onesignal.OSTime);
          public saveChannelObjects(param0: org.json.JSONArray): void;
          public cacheState(): void;
          public getLastChannelObjects(): org.json.JSONArray;
          public getChannelType(): com.onesignal.influence.domain.OSInfluenceChannel;
          public initInfluencedTypeFromCache(): void;
          public getLastChannelObjectsReceivedByNewId(param0: string): org.json.JSONArray;
          public getChannelLimit(): number;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module data {
        export class OSTrackerFactory {
          public static class: java.lang.Class<com.onesignal.influence.data.OSTrackerFactory>;
          public getNotificationChannelTracker(): com.onesignal.influence.data.OSChannelTracker;
          public saveInfluenceParams(param0: com.onesignal.OneSignalRemoteParams.InfluenceParams): void;
          public constructor(param0: com.onesignal.OSSharedPreferences, param1: com.onesignal.OSLogger, param2: com.onesignal.OSTime);
          public initFromCache(): void;
          public getChannelsToResetByEntryAction(param0: com.onesignal.OneSignal.AppEntryAction): java.util.List<com.onesignal.influence.data.OSChannelTracker>;
          public getChannels(): java.util.List<com.onesignal.influence.data.OSChannelTracker>;
          public addSessionData(param0: org.json.JSONObject, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): void;
          public getInfluences(): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public getSessionInfluences(): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public getIAMChannelTracker(): com.onesignal.influence.data.OSChannelTracker;
          public getChannelByEntryAction(param0: com.onesignal.OneSignal.AppEntryAction): com.onesignal.influence.data.OSChannelTracker;
        }
        export module OSTrackerFactory {
          export class WhenMappings {
            public static class: java.lang.Class<com.onesignal.influence.data.OSTrackerFactory.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module domain {
        export class OSInfluence {
          public static class: java.lang.Class<com.onesignal.influence.domain.OSInfluence>;
          public constructor(param0: com.onesignal.influence.domain.OSInfluenceChannel, param1: com.onesignal.influence.domain.OSInfluenceType, param2: org.json.JSONArray);
          public toJSONString(): string;
          public getDirectId(): string;
          public constructor(param0: string);
          public setIds(param0: org.json.JSONArray): void;
          public setInfluenceType(param0: com.onesignal.influence.domain.OSInfluenceType): void;
          public getInfluenceType(): com.onesignal.influence.domain.OSInfluenceType;
          public equals(param0: any): boolean;
          public toString(): string;
          public copy(): com.onesignal.influence.domain.OSInfluence;
          public hashCode(): number;
          public getIds(): org.json.JSONArray;
          public getInfluenceChannel(): com.onesignal.influence.domain.OSInfluenceChannel;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module domain {
        export class OSInfluenceChannel {
          public static class: java.lang.Class<com.onesignal.influence.domain.OSInfluenceChannel>;
          public static IAM: com.onesignal.influence.domain.OSInfluenceChannel;
          public static NOTIFICATION: com.onesignal.influence.domain.OSInfluenceChannel;
          public static Companion: com.onesignal.influence.domain.OSInfluenceChannel.Companion;
          public static values(): androidNative.Array<com.onesignal.influence.domain.OSInfluenceChannel>;
          public toString(): string;
          public static fromString(param0: string): com.onesignal.influence.domain.OSInfluenceChannel;
          public static valueOf(param0: string): com.onesignal.influence.domain.OSInfluenceChannel;
          public equalsName(param0: string): boolean;
        }
        export module OSInfluenceChannel {
          export class Companion {
            public static class: java.lang.Class<com.onesignal.influence.domain.OSInfluenceChannel.Companion>;
            public fromString(param0: string): com.onesignal.influence.domain.OSInfluenceChannel;
          }
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module influence {
      export module domain {
        export class OSInfluenceType {
          public static class: java.lang.Class<com.onesignal.influence.domain.OSInfluenceType>;
          public static DIRECT: com.onesignal.influence.domain.OSInfluenceType;
          public static INDIRECT: com.onesignal.influence.domain.OSInfluenceType;
          public static UNATTRIBUTED: com.onesignal.influence.domain.OSInfluenceType;
          public static DISABLED: com.onesignal.influence.domain.OSInfluenceType;
          public static Companion: com.onesignal.influence.domain.OSInfluenceType.Companion;
          public isUnattributed(): boolean;
          public isDisabled(): boolean;
          public static values(): androidNative.Array<com.onesignal.influence.domain.OSInfluenceType>;
          public isDirect(): boolean;
          public isIndirect(): boolean;
          public static valueOf(param0: string): com.onesignal.influence.domain.OSInfluenceType;
          public static fromString(param0: string): com.onesignal.influence.domain.OSInfluenceType;
          public isAttributed(): boolean;
        }
        export module OSInfluenceType {
          export class Companion {
            public static class: java.lang.Class<com.onesignal.influence.domain.OSInfluenceType.Companion>;
            public fromString(param0: string): com.onesignal.influence.domain.OSInfluenceType;
          }
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module language {
      export class LanguageContext {
        public static class: java.lang.Class<com.onesignal.language.LanguageContext>;
        public getLanguage(): string;
        public static getInstance(): com.onesignal.language.LanguageContext;
        public constructor(param0: com.onesignal.OSSharedPreferences);
        public setStrategy(param0: com.onesignal.language.LanguageProvider): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module language {
      export class LanguageProvider {
        public static class: java.lang.Class<com.onesignal.language.LanguageProvider>;
        /**
         * Constructs a new instance of the com.onesignal.language.LanguageProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getLanguage(): string });
        public constructor();
        public getLanguage(): string;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module language {
      export class LanguageProviderAppDefined extends com.onesignal.language.LanguageProvider {
        public static class: java.lang.Class<com.onesignal.language.LanguageProviderAppDefined>;
        public static PREFS_OS_LANGUAGE: string;
        public setLanguage(param0: string): void;
        public getLanguage(): string;
        public constructor(param0: com.onesignal.OSSharedPreferences);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module language {
      export class LanguageProviderDevice extends com.onesignal.language.LanguageProvider {
        public static class: java.lang.Class<com.onesignal.language.LanguageProviderDevice>;
        public getLanguage(): string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export class OSOutcomeConstants {
        public static class: java.lang.Class<com.onesignal.outcomes.OSOutcomeConstants>;
        public static PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT: string;
        public static APP_ID: string;
        public static DEVICE_TYPE: string;
        public static DIRECT_PARAM: string;
        public static OUTCOME_ID: string;
        public static OUTCOME_SOURCES: string;
        public static WEIGHT: string;
        public static TIMESTAMP: string;
        public static DIRECT: string;
        public static INDIRECT: string;
        public static NOTIFICATION_IDS: string;
        public static IAM_IDS: string;
        public static INSTANCE: com.onesignal.outcomes.OSOutcomeConstants;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class CachedUniqueOutcomeTable {
          public static class: java.lang.Class<com.onesignal.outcomes.data.CachedUniqueOutcomeTable>;
          public static ID: string;
          public static TABLE_NAME_V2: string;
          public static TABLE_NAME: string;
          public static TABLE_NAME_V1: string;
          public static COLUMN_NAME_NOTIFICATION_ID: string;
          public static COLUMN_CHANNEL_INFLUENCE_ID: string;
          public static COLUMN_CHANNEL_TYPE: string;
          public static COLUMN_NAME_NAME: string;
          public static INSTANCE: com.onesignal.outcomes.data.CachedUniqueOutcomeTable;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeEventsCache {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsCache>;
          public deleteOldOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public saveUniqueOutcomeEventParams(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public saveOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public isOutcomesV2ServiceEnabled(): boolean;
          public getNotCachedUniqueInfluencesForOutcome(param0: string, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public constructor(param0: com.onesignal.OSLogger, param1: com.onesignal.OneSignalDb, param2: com.onesignal.OSSharedPreferences);
          public getUnattributedUniqueOutcomeEventsSentByChannel(): java.util.Set<string>;
          public saveUnattributedUniqueOutcomeEventsSentByChannel(param0: java.util.Set<string>): void;
          public getAllEventsToSend(): java.util.List<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
          public cleanCachedUniqueOutcomeEventNotifications(param0: string, param1: string): void;
        }
        export module OSOutcomeEventsCache {
          export class WhenMappings {
            public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsCache.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export abstract class OSOutcomeEventsClient extends com.onesignal.outcomes.data.OutcomeEventsService {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsClient>;
          public sendOutcomeEvent(param0: org.json.JSONObject, param1: com.onesignal.OneSignalApiResponseHandler): void;
          public getClient(): com.onesignal.OneSignalAPIClient;
          public constructor(param0: com.onesignal.OneSignalAPIClient);
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeEventsFactory {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsFactory>;
          public constructor(param0: com.onesignal.OSLogger, param1: com.onesignal.OneSignalAPIClient, param2: com.onesignal.OneSignalDb, param3: com.onesignal.OSSharedPreferences);
          public getRepository(): com.onesignal.outcomes.domain.OSOutcomeEventsRepository;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export abstract class OSOutcomeEventsRepository extends com.onesignal.outcomes.domain.OSOutcomeEventsRepository {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsRepository>;
          public saveOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public getOutcomeEventsService(): com.onesignal.outcomes.data.OutcomeEventsService;
          public requestMeasureOutcomeEvent(param0: string, param1: number, param2: com.onesignal.outcomes.domain.OSOutcomeEventParams, param3: com.onesignal.OneSignalApiResponseHandler): void;
          public getSavedOutcomeEvents(): java.util.List<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
          public getUnattributedUniqueOutcomeEventsSent(): java.util.Set<string>;
          public saveUnattributedUniqueOutcomeEventsSent(param0: java.util.Set<string>): void;
          public removeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public constructor(param0: com.onesignal.OSLogger, param1: com.onesignal.outcomes.data.OSOutcomeEventsCache, param2: com.onesignal.outcomes.data.OutcomeEventsService);
          public cleanCachedUniqueOutcomeEventNotifications(param0: string, param1: string): void;
          public getLogger(): com.onesignal.OSLogger;
          public getNotCachedUniqueOutcome(param0: string, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public saveUniqueOutcomeNotifications(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeEventsV1Repository extends com.onesignal.outcomes.data.OSOutcomeEventsRepository {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsV1Repository>;
          public saveOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public requestMeasureOutcomeEvent(param0: string, param1: number, param2: com.onesignal.outcomes.domain.OSOutcomeEventParams, param3: com.onesignal.OneSignalApiResponseHandler): void;
          public getSavedOutcomeEvents(): java.util.List<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
          public getUnattributedUniqueOutcomeEventsSent(): java.util.Set<string>;
          public saveUnattributedUniqueOutcomeEventsSent(param0: java.util.Set<string>): void;
          public removeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public constructor(param0: com.onesignal.OSLogger, param1: com.onesignal.outcomes.data.OSOutcomeEventsCache, param2: com.onesignal.outcomes.data.OutcomeEventsService);
          public cleanCachedUniqueOutcomeEventNotifications(param0: string, param1: string): void;
          public getNotCachedUniqueOutcome(param0: string, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public saveUniqueOutcomeNotifications(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
        }
        export module OSOutcomeEventsV1Repository {
          export class WhenMappings {
            public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsV1Repository.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeEventsV1Service extends com.onesignal.outcomes.data.OSOutcomeEventsClient {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsV1Service>;
          public sendOutcomeEvent(param0: org.json.JSONObject, param1: com.onesignal.OneSignalApiResponseHandler): void;
          public constructor(param0: com.onesignal.OneSignalAPIClient);
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeEventsV2Repository extends com.onesignal.outcomes.data.OSOutcomeEventsRepository {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsV2Repository>;
          public saveOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public requestMeasureOutcomeEvent(param0: string, param1: number, param2: com.onesignal.outcomes.domain.OSOutcomeEventParams, param3: com.onesignal.OneSignalApiResponseHandler): void;
          public getSavedOutcomeEvents(): java.util.List<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
          public getUnattributedUniqueOutcomeEventsSent(): java.util.Set<string>;
          public saveUnattributedUniqueOutcomeEventsSent(param0: java.util.Set<string>): void;
          public removeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public constructor(param0: com.onesignal.OSLogger, param1: com.onesignal.outcomes.data.OSOutcomeEventsCache, param2: com.onesignal.outcomes.data.OutcomeEventsService);
          public cleanCachedUniqueOutcomeEventNotifications(param0: string, param1: string): void;
          public getNotCachedUniqueOutcome(param0: string, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public saveUniqueOutcomeNotifications(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeEventsV2Service extends com.onesignal.outcomes.data.OSOutcomeEventsClient {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeEventsV2Service>;
          public sendOutcomeEvent(param0: org.json.JSONObject, param1: com.onesignal.OneSignalApiResponseHandler): void;
          public constructor(param0: com.onesignal.OneSignalAPIClient);
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OSOutcomeTableProvider {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OSOutcomeTableProvider>;
          public upgradeCacheOutcomeTableRevision1To2(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
          public upgradeOutcomeTableRevision1To2(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
          public constructor();
          public upgradeOutcomeTableRevision2To3(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OutcomeEventsService {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OutcomeEventsService>;
          /**
           * Constructs a new instance of the com.onesignal.outcomes.data.OutcomeEventsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { sendOutcomeEvent(param0: org.json.JSONObject, param1: com.onesignal.OneSignalApiResponseHandler): void });
          public constructor();
          public sendOutcomeEvent(param0: org.json.JSONObject, param1: com.onesignal.OneSignalApiResponseHandler): void;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OutcomeEventsTable {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OutcomeEventsTable>;
          public static ID: string;
          public static TABLE_NAME: string;
          public static COLUMN_NAME_NOTIFICATION_IDS: string;
          public static COLUMN_NAME_IAM_IDS: string;
          public static COLUMN_NAME_SESSION: string;
          public static COLUMN_NAME_NOTIFICATION_INFLUENCE_TYPE: string;
          public static COLUMN_NAME_IAM_INFLUENCE_TYPE: string;
          public static COLUMN_NAME_NAME: string;
          public static COLUMN_NAME_WEIGHT: string;
          public static COLUMN_NAME_TIMESTAMP: string;
          public static COLUMN_NAME_PARAMS: string;
          public static INSTANCE: com.onesignal.outcomes.data.OutcomeEventsTable;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module data {
        export class OutcomesDbContract {
          public static class: java.lang.Class<com.onesignal.outcomes.data.OutcomesDbContract>;
          public static OUTCOME_EVENT_TABLE: string;
          public static CACHE_UNIQUE_OUTCOME_TABLE: string;
          public static CACHE_UNIQUE_OUTCOME_COLUMN_CHANNEL_INFLUENCE_ID: string;
          public static CACHE_UNIQUE_OUTCOME_COLUMN_CHANNEL_TYPE: string;
          public static SQL_CREATE_OUTCOME_ENTRIES_V1: string;
          public static SQL_CREATE_OUTCOME_ENTRIES_V2: string;
          public static SQL_CREATE_OUTCOME_ENTRIES_V3: string;
          public static SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V1: string;
          public static SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V2: string;
          public static INSTANCE: com.onesignal.outcomes.data.OutcomesDbContract;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module domain {
        export class OSCachedUniqueOutcome {
          public static class: java.lang.Class<com.onesignal.outcomes.domain.OSCachedUniqueOutcome>;
          public getChannel(): com.onesignal.influence.domain.OSInfluenceChannel;
          public getInfluenceId(): string;
          public constructor(param0: string, param1: com.onesignal.influence.domain.OSInfluenceChannel);
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module domain {
        export class OSOutcomeEventParams {
          public static class: java.lang.Class<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
          public toString(): string;
          public getOutcomeSource(): com.onesignal.outcomes.domain.OSOutcomeSource;
          public toJSONObject(): org.json.JSONObject;
          public isUnattributed(): boolean;
          public getTimestamp(): number;
          public getOutcomeId(): string;
          public getWeight(): number;
          public setTimestamp(param0: number): void;
          public setWeight(param0: number): void;
          public constructor(param0: string, param1: com.onesignal.outcomes.domain.OSOutcomeSource, param2: number, param3: number);
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module domain {
        export class OSOutcomeEventsRepository {
          public static class: java.lang.Class<com.onesignal.outcomes.domain.OSOutcomeEventsRepository>;
          /**
           * Constructs a new instance of the com.onesignal.outcomes.domain.OSOutcomeEventsRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getSavedOutcomeEvents(): java.util.List<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
            saveOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
            removeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
            requestMeasureOutcomeEvent(param0: string, param1: number, param2: com.onesignal.outcomes.domain.OSOutcomeEventParams, param3: com.onesignal.OneSignalApiResponseHandler): void;
            saveUniqueOutcomeNotifications(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
            getNotCachedUniqueOutcome(param0: string, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): java.util.List<com.onesignal.influence.domain.OSInfluence>;
            getUnattributedUniqueOutcomeEventsSent(): java.util.Set<string>;
            saveUnattributedUniqueOutcomeEventsSent(param0: java.util.Set<string>): void;
            cleanCachedUniqueOutcomeEventNotifications(param0: string, param1: string): void;
          });
          public constructor();
          public saveOutcomeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public getSavedOutcomeEvents(): java.util.List<com.onesignal.outcomes.domain.OSOutcomeEventParams>;
          public requestMeasureOutcomeEvent(param0: string, param1: number, param2: com.onesignal.outcomes.domain.OSOutcomeEventParams, param3: com.onesignal.OneSignalApiResponseHandler): void;
          public getUnattributedUniqueOutcomeEventsSent(): java.util.Set<string>;
          public saveUnattributedUniqueOutcomeEventsSent(param0: java.util.Set<string>): void;
          public removeEvent(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
          public cleanCachedUniqueOutcomeEventNotifications(param0: string, param1: string): void;
          public getNotCachedUniqueOutcome(param0: string, param1: java.util.List<com.onesignal.influence.domain.OSInfluence>): java.util.List<com.onesignal.influence.domain.OSInfluence>;
          public saveUniqueOutcomeNotifications(param0: com.onesignal.outcomes.domain.OSOutcomeEventParams): void;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module domain {
        export class OSOutcomeSource {
          public static class: java.lang.Class<com.onesignal.outcomes.domain.OSOutcomeSource>;
          public setDirectBody(param0: com.onesignal.outcomes.domain.OSOutcomeSourceBody): com.onesignal.outcomes.domain.OSOutcomeSource;
          public constructor(param0: com.onesignal.outcomes.domain.OSOutcomeSourceBody, param1: com.onesignal.outcomes.domain.OSOutcomeSourceBody);
          public toString(): string;
          public toJSONObject(): org.json.JSONObject;
          public setIndirectBody(param0: com.onesignal.outcomes.domain.OSOutcomeSourceBody): void;
          public setDirectBody(param0: com.onesignal.outcomes.domain.OSOutcomeSourceBody): void;
          public getDirectBody(): com.onesignal.outcomes.domain.OSOutcomeSourceBody;
          public setIndirectBody(param0: com.onesignal.outcomes.domain.OSOutcomeSourceBody): com.onesignal.outcomes.domain.OSOutcomeSource;
          public getIndirectBody(): com.onesignal.outcomes.domain.OSOutcomeSourceBody;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module outcomes {
      export module domain {
        export class OSOutcomeSourceBody {
          public static class: java.lang.Class<com.onesignal.outcomes.domain.OSOutcomeSourceBody>;
          public toString(): string;
          public toJSONObject(): org.json.JSONObject;
          public setInAppMessagesIds(param0: org.json.JSONArray): void;
          public setNotificationIds(param0: org.json.JSONArray): void;
          public constructor(param0: org.json.JSONArray, param1: org.json.JSONArray);
          public constructor(param0: org.json.JSONArray);
          public constructor();
          public getNotificationIds(): org.json.JSONArray;
          public getInAppMessagesIds(): org.json.JSONArray;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export class Badger {
        public static class: java.lang.Class<com.onesignal.shortcutbadger.Badger>;
        /**
         * Constructs a new instance of the com.onesignal.shortcutbadger.Badger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void; getSupportLaunchers(): java.util.List<string> });
        public constructor();
        public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
        public getSupportLaunchers(): java.util.List<string>;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export class ShortcutBadgeException {
        public static class: java.lang.Class<com.onesignal.shortcutbadger.ShortcutBadgeException>;
        public constructor(param0: string, param1: java.lang.Exception);
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export class ShortcutBadger {
        public static class: java.lang.Class<com.onesignal.shortcutbadger.ShortcutBadger>;
        public static applyNotification(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: number): void;
        public static removeCount(param0: globalAndroid.content.Context): boolean;
        public static isBadgeCounterSupported(param0: globalAndroid.content.Context): boolean;
        public static applyCount(param0: globalAndroid.content.Context, param1: number): boolean;
        public static removeCountOrThrow(param0: globalAndroid.content.Context): void;
        public static applyCountOrThrow(param0: globalAndroid.content.Context, param1: number): void;
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class AdwHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.AdwHomeBadger>;
          public static INTENT_UPDATE_COUNTER: string;
          public static PACKAGENAME: string;
          public static CLASSNAME: string;
          public static COUNT: string;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class ApexHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.ApexHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class AsusHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.AsusHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class DefaultBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.DefaultBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class EverythingMeHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.EverythingMeHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class HuaweiHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.HuaweiHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class LGHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.LGHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class NewHtcHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.NewHtcHomeBadger>;
          public static INTENT_UPDATE_SHORTCUT: string;
          public static INTENT_SET_NOTIFICATION: string;
          public static PACKAGENAME: string;
          public static COUNT: string;
          public static EXTRA_COMPONENT: string;
          public static EXTRA_COUNT: string;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class NovaHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.NovaHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class OPPOHomeBader extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.OPPOHomeBader>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class SamsungHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.SamsungHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class SonyHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.SonyHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class VivoHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.VivoHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class XiaomiHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.XiaomiHomeBadger>;
          public static INTENT_ACTION: string;
          public static EXTRA_UPDATE_APP_COMPONENT_NAME: string;
          public static EXTRA_UPDATE_APP_MSG_TEXT: string;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module impl {
        export class ZukHomeBadger extends com.onesignal.shortcutbadger.Badger {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.ZukHomeBadger>;
          public constructor();
          public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
          public getSupportLaunchers(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module util {
        export class BroadcastHelper {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.util.BroadcastHelper>;
          public constructor();
          public static resolveBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): java.util.List<globalAndroid.content.pm.ResolveInfo>;
          public static canResolveBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
          public static sendIntentExplicitly(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        }
      }
    }
  }
}

declare module com {
  export module onesignal {
    export module shortcutbadger {
      export module util {
        export class CloseHelper {
          public static class: java.lang.Class<com.onesignal.shortcutbadger.util.CloseHelper>;
          public static close(param0: globalAndroid.database.Cursor): void;
          public constructor();
          public static closeQuietly(param0: java.io.Closeable): void;
        }
      }
    }
  }
}

//Generics information:
//com.onesignal.BundleCompat:1
//com.onesignal.OSObservable:2
