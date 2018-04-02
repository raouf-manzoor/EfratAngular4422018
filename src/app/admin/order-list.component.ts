import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  OrdersList:any=[];
  constructor(private http: HttpClient,private router: Router) { }

  setToAvailable(rentInfo)
  {
    
    this.http.post('http://localhost:1142/Api/Account/SetCarToAvailable',rentInfo).subscribe(data => {
      
      this.ngOnInit(); 
     })
  }

  ngOnInit() {
    this.http.post('http://localhost:1142/Api/Account/GetListOfOrders',{}).subscribe(data => {
      // this.router.navigate(['/signIn']); 
      this.OrdersList=data as any;
      this.OrdersList.forEach(element => {
        element.Base64Image="data:image/jpeg;base64,"+element.Base64Image;
      });
     })
  }

}
