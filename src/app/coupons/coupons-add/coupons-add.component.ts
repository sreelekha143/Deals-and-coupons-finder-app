import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';
import { Coupon } from 'src/app/viewmodels/coupons.viewmodel';
import { CouponsService } from 'src/app/coupons.service';
@Component({
  selector: 'app-coupons-add',
  templateUrl: './coupons-add.component.html',
  styleUrls: ['./coupons-add.component.css']
})
export class CouponsAddComponent implements OnInit {
coupons:Coupon[];
myForm:FormGroup;
  constructor(private couponService:CouponsService,private router:Router, private activatedRoute:ActivatedRoute) { 
    this.myForm=new FormGroup({
      id:new FormControl(''),
      couponname:new FormControl(''),
      promocode:new FormControl(''),
     imageurl:new FormControl('')

      
     })
  }
  getcouponFromService(){
    this.couponService.getcoupon().subscribe((response)=>{
      this.coupons=response;
    })
  }
  addcouponToService(id,couponname,promocode,imageurl){
    this.couponService.addcoupon(id,couponname,promocode,imageurl).subscribe((response)=>{
    
      this.getcouponFromService();
      // this.router.navigate(['/Homepage']);
      alert('coupon added');
    })
  }
  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate(['/Coupons'])
  }
}
