// import { Injectable } from '@angular/core';

// @Injectable()
// export class SignInService {

//   constructor() { }

// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SignInService {
  signUpObject={
  name:"Raouf",
  lastName:"Manzoor"

  }

  private messageSource = new BehaviorSubject<any>({
title:"default message 333"
  });
  currentMessage = this.messageSource.asObservable();
  private selectedVehicle = new BehaviorSubject<any>({
      });
      // currentVehicle = this.selectedVehicle.asObservable();
  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  // changeVehicle(vechicle: any) {
  //   this.currentVehicle.next(vechicle)
  // }

}