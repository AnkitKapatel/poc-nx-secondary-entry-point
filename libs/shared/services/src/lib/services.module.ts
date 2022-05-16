import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoService } from './user-info/user-info.service';

@NgModule({
  imports: [CommonModule],
  providers:[UserInfoService]
})
export class ServicesModule {}
