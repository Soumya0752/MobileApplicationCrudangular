import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { RouterModule } from '@angular/router';
import { CreateMobileComponent } from './create-mobile/create-mobile.component';
import { FormsModule } from '@angular/forms';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileListComponent,
    CreateMobileComponent,
    UpdateMobileComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
