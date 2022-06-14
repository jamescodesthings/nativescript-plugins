import { Component, NgZone } from '@angular/core';
import { DemoSharedNsOnesignal } from '@demo/shared';
import {} from '@codesthings/ns-onesignal';

@Component({
  selector: 'demo-ns-onesignal',
  templateUrl: 'ns-onesignal.component.html',
})
export class NsOnesignalComponent {
  demoShared: DemoSharedNsOnesignal;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsOnesignal();
  }
}
