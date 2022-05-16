import { Injectable } from '@angular/core';
export let counter2 = 0;

@Injectable()
export class UserInfoService {

  constructor() {
    counter2++;
    console.log(counter2,"service userInfo called");
  }

  init() {
    console.log(counter2,"service userInfo init method called");
  }
}
