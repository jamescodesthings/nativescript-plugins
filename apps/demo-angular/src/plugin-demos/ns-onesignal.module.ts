import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsOnesignalComponent } from './ns-onesignal.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsOnesignalComponent }])],
  declarations: [NsOnesignalComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NsOnesignalModule {}
