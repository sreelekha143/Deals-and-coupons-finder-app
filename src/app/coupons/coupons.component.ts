import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponsService } from '../coupons.service';
import { Coupon } from '../viewmodels/coupons.viewmodel';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
coupons:Coupon[];
  constructor(private router:Router,private couponsService:CouponsService) { }

  ngOnInit(): void {
    this.getcouponfromService()
  }
  addcouponToService(){   
    this.router.navigate(['/coupon-add'])
   }
   getcouponfromService(){
    this.couponsService.getcoupon().subscribe((response)=>{
      this.coupons=response;
      console.log(this.coupons);
  
    });
  }
  goTocouponEditComponent(_id){
    this.router.navigate(['/coupon-edit' + '/' + _id ]);
  }
  deletecouponFromService(i){
    alert(i.id);
    this.couponsService.deletecoupon(i).subscribe((response)=>{
      alert('Data deleted');
      this.getcouponfromService();
    })

  }
}
