import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsOnesignal } from '@demo/shared';
import {} from '@codesthings/ns-onesignal';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsOnesignal {}
