import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Component, } from '@angular/core';
import { SignInService } from './sign-in.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  initialArray: any = {};
  Type_Role:string="";
  // private prices = [];
  // private prices: any[] = [];
  constructor(private http: HttpClient,private signIn: SignInService){
  }

  ngOnInit(): void {
    
    this.http.post('http://localhost:1142/Api/Account/RegisterUserOutPut',{}).subscribe(data => {
      debugger;
      // this.initialArray=data as any;
       var dataLocal=data as any;
       this.initialArray.IsRegistered=dataLocal.IsRegistered;
       this. initialArray.array=dataLocal.array;
       this.initialArray.array.forEach(element => {
      });
      // this.signIn.currentMessage.subscribe(message => this.title = message.title)
      this.signIn.currentMessage.subscribe(message =>
        {
          var data=message as any;
          // this.image="data:image/jpeg;base64,"+data.signInUser.Base64Image;
          this.Type_Role=data.signInUser.Type_Role;
        }
        )
    });

   // For Maintaining Session
  // ngOnInit() {
  //   this.signIn.currentMessage.subscribe(message => this.title = message.title)
  // }
    
}





// export class AppComponent {
//   title :String;

//   constructor(private data: SignUpService) { }

  

//
 }