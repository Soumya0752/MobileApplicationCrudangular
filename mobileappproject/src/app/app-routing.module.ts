import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { CreateMobileComponent } from './create-mobile/create-mobile.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'mobiles',component:MobileListComponent},
  {path:'mobiles/addnewmobile',component:CreateMobileComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'mobiles/:id',component:UpdateMobileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
