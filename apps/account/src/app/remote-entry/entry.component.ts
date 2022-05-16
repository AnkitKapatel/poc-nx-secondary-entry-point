import { Component } from '@angular/core';
import { UserInfoService } from '@poc/shared/services';
import { ConfigurationService } from '@poc/shared/services';

@Component({
  selector: 'account-entry',
  template: `<poc-sep-nx-welcome></poc-sep-nx-welcome>`,
})
export class RemoteEntryComponent {

  constructor(private userInfoService: UserInfoService,
    private configService : ConfigurationService) {
    this.userInfoService.init();
    console.log(this.configService.get());
  }
}
