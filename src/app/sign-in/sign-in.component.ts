import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router';
import {User } from '../model/user.model';
import { SignInService } from '../sign-in.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user:User={
  };
  constructor(private http: HttpClient,private signInService: SignInService,private router: Router) { }
  signIn(){
    debugger;
      this.http.post('http://localhost:1142/Api/Account/SignIn',this.user).subscribe(data => {
        var userObj=data as any;
        this.signInService.changeMessage(userObj);
          // this.title = message.title)
     this.router.navigate(['/home']); 
})
      }
  ngOnInit() {
  }

}
