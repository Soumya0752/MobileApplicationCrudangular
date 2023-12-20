import { Component,OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';
import { UpdateMobileComponent } from '../update-mobile/update-mobile.component';


@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit
{
  constructor(private mobileService:MobileService,private router:Router)
  {

  }
   mobiles:Mobile[]=[];
   
   ngOnInit():void 
   {
    this.getMobiles();
   }

   private getMobiles()
   {
      this.mobileService.getMobilesList().subscribe(data=> 
        {
          this.mobiles=data;
        });
   }
   updateMobile(id:number)
   {
    this.router.navigate(['mobiles',id]);
   }
   deleteMobile(id:number):void
   {
    this.mobileService.deleteMobile(id).subscribe(
      data=>
      {
        console.log(data);
       this.getMobiles();
      }
      )
   }
}
