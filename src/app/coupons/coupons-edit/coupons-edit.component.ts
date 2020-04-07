import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponsService } from 'src/app/coupons.service';
@Component({
  selector: 'app-coupons-edit',
  templateUrl: './coupons-edit.component.html',
  styleUrls: ['./coupons-edit.component.css']
})
export class CouponsEditComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private couponservice:CouponsService) { }
  coupons:any;
  couponObject:any={
  
   _id:"",
   couponname:"",
  promocode:"",
  imageurl:""
   };

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.paramMap.get('_id');
    this.couponservice.getcouponById(id).subscribe((response)=>{
      console.log(response);
      this.couponObject=response
    })
  }
  submit(){
    this.couponservice.updatecouponById(this.couponObject.id,this.couponObject).subscribe((resp)=>{
  alert('Data updated');
  this.router.navigate(['/Coupons']);
    })
  }
  cancel(){
    this.router.navigate(['/Coupons']);
  }
  getcouponFromService(){
    this.couponservice.getcoupon().subscribe((response)=>{
      this.coupons=response;
      console.log(this.coupons);
  
    });
  }
}
