import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileListComponent } from '../mobile-list/mobile-list.component';
import { CreateMobileComponent } from '../create-mobile/create-mobile.component';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent implements OnInit
 {
      id!:number;
      mobile:Mobile=new Mobile();
      constructor(private mobileService:MobileService,private router:Router,
        private route:ActivatedRoute)
      {
    
      }
  
      ngOnInit(): void 
      {
        this.mobile=new Mobile();
        this.id=this.route.snapshot.params['id'];
        this.mobileService.getMobileById(this.id).subscribe(data=>
          {this.mobile=data;},error=>console.log(error));


      }

      

      onSubmit()
      {
        this.updateMobile();
      }
      updateMobile()
      {
        this.mobileService.updateMobile(this.id,this.mobile).subscribe(data=>
          {this.gotoMobileList()});
      }
      gotoMobileList()
      {
        this.router.navigate(['/mobiles']);
      }

      
}
