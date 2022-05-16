import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@poc/shared';
import { ServicesModule } from '@poc/shared/services';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'account',
          loadChildren: () =>
            import('account/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    SharedModule.setConfig({
      appSettings : 'application configuration',
      uiSettings: 'ui configuration'
    }),
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
