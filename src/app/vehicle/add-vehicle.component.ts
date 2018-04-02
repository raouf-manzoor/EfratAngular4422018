import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router';
import { SignInService } from '../sign-in.service';
import {Vehicle } from '../model/vehicle.model';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

export class AddVehicleComponent implements OnInit {
  vehicle:Vehicle={
    Available:true,
    TypeID:1
  };
  Locations:any=[];
  ByteArrayFinal:any={};
  Branch:any;
  optionSelected:any;
  countries:any=[{name:"Raouf"}];
  constructor(private http: HttpClient,private router: Router,private signIn: SignInService) { }
 
  readURL(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.ByteArrayFinal= reader.result.split(',')[1];
      };
    }
  }
  
   _base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  addVehicle()
  {
    debugger;
    // var BranchId=this.Branch.BranchID;
    this.vehicle.Base64Image=this.ByteArrayFinal;
    var sample=this.vehicle;
    this.http.post('http://localhost:1142/Api/Account/AddVehicle',sample).subscribe(data => {
    this.router.navigate(['/signIn']); 
  })
}

  ngOnInit() {
    this.http.post('http://localhost:1142/Api/Account/GetAllBranches',{}).subscribe(data => {
     // this.router.navigate(['/signIn']); 
     debugger;
     this.Locations=data as any;
    })
  }

}
