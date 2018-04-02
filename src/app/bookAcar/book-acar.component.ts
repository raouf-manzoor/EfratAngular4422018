import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-book-acar',
  templateUrl: './book-acar.component.html',
  styleUrls: ['./book-acar.component.css']
})
export class BookAcarComponent implements OnInit {
  Locations:any=[];
  BranchID:any={};
  AvailableCars:any=[];
  // Branch:any={};
  constructor(private http: HttpClient,
    private vehicleService: VehicleService,private router: Router) { }
   BranchChanged()
   {
    var branchId=this.BranchID;
    var Branch={
      BranchID:branchId
    }
    this.http.post('http://localhost:1142/Api/Account/GetListOfAvailableCars',Branch).subscribe(data => {
      // this.router.navigate(['/signIn']); 
      this.AvailableCars=data as any;
      this.AvailableCars.forEach(element => {
        element.Base64Image="data:image/jpeg;base64,"+element.Base64Image;
      });
     })
   }

   PlaceAnOrder(vehicle)
   {
     debugger;
    this.vehicleService.changeVehicle(vehicle);
    this.router.navigate(['/bookAcar/PlaceAnOrder']); 
   }
  
  ngOnInit() {
    debugger;
    this.http.post('http://localhost:1142/Api/Account/GetAllBranches',{}).subscribe(data => {
      debugger;
     this.Locations=data as any;
    })
    

   
  }

}
