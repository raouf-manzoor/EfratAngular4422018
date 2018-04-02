import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { SignInService } from '../sign-in.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-place-an-order',
  templateUrl: './place-an-order.component.html',
  styleUrls: ['./place-an-order.component.css']
})
export class PlaceAnOrderComponent implements OnInit {
 vehicle:any={};
  constructor(private vehicleService: VehicleService,private router: Router,private http: HttpClient,private signIn: SignInService) { }

  placeAnOrder()
  {
    debugger;
    this.vehicle.TotalCost=this.vehicle.NoOfDays*this.vehicle.CostPerDay;
    this.http.post('http://localhost:1142/Api/Account/PlaceAnOrder',this.vehicle).subscribe(data => {
    this.router.navigate(['/home/bookAcar']); 
})
  }

  ngOnInit() {
    debugger;
    this.vehicleService.currentVehicle.subscribe(vehicle => 
      {
        debugger;
      this.vehicle = vehicle;
      this.signIn.currentMessage.subscribe(message => 
         {
           debugger;
          this.vehicle.UserID = message.signInUser.UserId;
         });
      }

    )
    debugger;
    
    // this.vehicle.totalCost=this.vehicle.CostPerDay 
    console.log(this.vehicle);
  }

}
