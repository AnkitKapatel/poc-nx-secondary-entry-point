import { Component } from '@angular/core';
import { ConfigurationService, UserInfoService } from '@poc/shared/services';

@Component({
  selector: 'poc-sep-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private userInfoService: UserInfoService,
    private configService : ConfigurationService) {
      console.log("from host app");
    this.userInfoService.init();
    console.log(this.configService.get());
  }
}
