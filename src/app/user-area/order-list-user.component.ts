import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-order-list-user',
  templateUrl: './order-list-user.component.html',
  styleUrls: ['./order-list-user.component.css']
})
export class OrderListUserComponent implements OnInit {
  OrdersList:any=[];
  user:any={};
  constructor(private http: HttpClient,private router: Router,private signIn: SignInService) { }

  ngOnInit() {
    this.signIn.currentMessage.subscribe(message =>
      {
        debugger;
        var data=message as any;
        this.user=data.signInUser;
        this.http.post('http://localhost:1142/Api/Account/GetPreviousOrders',this.user).subscribe(data => {
          this.OrdersList=data as any;
         
         })
      }
      )

    
  }

}
