import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignUpComponentComponent } from './signUp/sign-up-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BookAcarComponent } from './bookAcar/book-acar.component';
import { HomeComponent } from './home/home.component';
import { SignInService } from './sign-in.service';
import { VehicleService } from './vehicle.service';
import { AdminAreaComponent } from './admin/admin-area.component';
import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { PlaceAnOrderComponent } from './orders/place-an-order.component';
import { OrderListComponent } from './admin/order-list.component';
import { OrderListUserComponent } from './user-area/order-list-user.component';

const appRoutes:Routes =[
// {path:'home',component:AppComponent},
{path:'signUp',component:SignUpComponentComponent},
{path:'home/signUp',component:SignUpComponentComponent},
{path:'home/signIn',component:SignInComponent},
{path:'home/adminArea',component:AdminAreaComponent},
{path:'signIn',component:SignInComponent},
{path:'bookAcar',component:BookAcarComponent},
{path:'home',component:HomeComponent},
{path:'home/bookAcar',component:BookAcarComponent},
{path:'home/adminArea/vehicleAdd',component:AddVehicleComponent},
{path:'bookAcar/PlaceAnOrder',component:PlaceAnOrderComponent},
{path:'home/adminArea/OrderList',component:OrderListComponent},
{path:'home/OrderListUser',component:OrderListUserComponent},
{path:'home/OrderListUser/BookAcar',component:BookAcarComponent},

{path:'',redirectTo:'/home',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponentComponent,
    SignInComponent,
    BookAcarComponent,
    HomeComponent,
    AdminAreaComponent,
    AddVehicleComponent,
    PlaceAnOrderComponent,
    OrderListComponent,
    OrderListUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SignInService,VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
