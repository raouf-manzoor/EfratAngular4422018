import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User } from '../model/user.model';
import { Router }  from '@angular/router';
import { SignInService } from '../sign-in.service';

@Component({
  // selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent implements OnInit {
  user:User={
    // UserName:"RaoufManzoor",
    // Email:"axs",
    // DateOfBirth:new Date(),
    Type_Role:"Customer"
  };
   PhotoToUpload:any={};
   ByteArrayFinal:any={};
  constructor(private http: HttpClient,private router: Router,private signIn: SignInService) { }

  ngOnInit() {
    debugger;
    this.signIn.currentMessage.subscribe(message =>
    {
      var data=message as any;
    }
    )
  }
  onClickChange()
  {
    // alert("Pakistan Zinda Bad");
  }
//   readURL(input)
//   {
//     debugger;
//     var reader = new FileReader();
//     var files=input.srcElement.files;
//     var arrayBuffer = files[0];
//     var array = new Uint8Array(arrayBuffer);
//    var  binaryString = String.fromCharCode.apply(null, array);
// debugger;
//   console.log(binaryString);
// debugger;
//     console.log(this);
//   }
readURL(event) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.ByteArrayFinal= reader.result.split(',')[1];
      this.PhotoToUpload.filetype= file.type;
    };
  }
}
  onClick()
  {
    // debugger;
    // var sample:any= {
    
    //   // Photo:{
    //   //   Photo1:this.PhotoToUpload.byteArrayServer2
    //   // }
    //   Photo:{
    //     Photo1:this.ByteArrayFinal
    //   }
      
    // };
    this.user.Base64Image=this.ByteArrayFinal;
    var sample=this.user;

    // sample.Photo.Photo1=this.PhotoToUpload.byteArrayServer2;
    debugger;
    this.http.post('http://localhost:1142/Api/Account/SignUp',sample).subscribe(data => {
          debugger;
          // data.forEach(element => {
          //   // console.log(element);  
          // //  alert(element);  
          // });
       
    this.router.navigate(['/signIn']); 
  })
}

// For Maintaining Session
  // ngOnInit() {
  //   this.signIn.currentMessage.subscribe(message =>
    
  //   )
  // }
}
