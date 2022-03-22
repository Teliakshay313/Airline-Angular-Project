import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSelectComponent } from './flightselect/flightselect.component';
import { ForgetPasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path:'addAirline',component:FlightSelectComponent},
  {path:'forgotpassword',component:ForgetPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
