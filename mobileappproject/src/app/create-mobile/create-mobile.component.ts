import { Component,OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mobile',
  templateUrl: './create-mobile.component.html',
  styleUrls: ['./create-mobile.component.css']
})
export class CreateMobileComponent implements OnInit
 {
    mobile:Mobile=new Mobile();
   
   constructor(private mobileService:MobileService,private router:Router)
  {

  }
   
   ngOnInit():void 
   {

   }

   saveMobile()
   {
      this.mobileService.createMobile(this.mobile).
      subscribe(data=> {console.log(data);
      this.gotoMobileList()},error=>console.log(error)
      );
   }
   
   gotoMobileList()
   {
    this.router.navigate(['/mobiles']);
   }
   onSubmit()
   {
    this.saveMobile();
   }


}
