
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class VehicleService {


  private selectedVehicle = new BehaviorSubject<any>({
      });
  currentVehicle = this.selectedVehicle.asObservable();
      
      // currentVehicle = this.selectedVehicle.asObservable();
  constructor() { }

  changeVehicle(vehicle: any) {
    this.selectedVehicle.next(vehicle)
  }

  

}