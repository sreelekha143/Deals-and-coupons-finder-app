import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Coupon } from './viewmodels/coupons.viewmodel';
@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  ServiceUrl:string="http://localhost:3000/couponapi/";
  getcoupon():Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.ServiceUrl+"coupon");
  }
  constructor(private http:HttpClient,private router:Router) { }
  getcouponById(_id){
    return this.http.get(this.ServiceUrl+_id);
    
  }
  addcoupon(i,cn,pc,im){
    let newcouponObject={id:i,couponname:cn,promocode:pc,imageurl:im}
   return this.http.post(this.ServiceUrl+"coupon",newcouponObject)
   }
   updatecouponById(_id,newcouponObject){
    return this.http.put(this.ServiceUrl+_id,newcouponObject);
  
  }
  deletecoupon(i){
    alert('received:'+i.id)
    return this.http.delete(this.ServiceUrl+i._id)
  }
}
