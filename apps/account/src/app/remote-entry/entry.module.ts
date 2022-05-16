import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ServicesModule } from '@poc/shared/services';
import { SharedModule } from '@poc/shared';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
    SharedModule.setConfig({
      appSettings : 'application configuration from account',
      uiSettings: 'ui configuration from account'
    }),
    ServicesModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
