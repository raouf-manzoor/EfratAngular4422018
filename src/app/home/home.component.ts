import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image:string="";
  Type_Role:string="";
  constructor(private signIn: SignInService) { }

  ngOnInit() {
    debugger;
    this.signIn.currentMessage.subscribe(message =>
    {
      var data=message as any;
      this.image="data:image/jpeg;base64,"+data.signInUser.Base64Image;
      this.Type_Role=data.signInUser.Type_Role;
    }
    )
  }

}
