import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Player } from '../viewmodels/home.viewmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  ServiceUrl:string="http://localhost:3000/sree/";
  getPlayer():Observable<Player[]>{
    return this.http.get<Player[]>(this.ServiceUrl+"/home");
  }
  constructor(private http:HttpClient,private router:Router) { }
  getPlayerById(_id){
    return this.http.get(this.ServiceUrl+_id);
    
  }
  addplayer(i,gn,pn,d,im){
    let newplayer={id:i,gamename:gn,playername:pn,detail:d,imageurl:im}
   return this.http.post(this.ServiceUrl+"/home",newplayer)
   }
   updateplayerById(_id,newplayerObj){
    return this.http.put(this.ServiceUrl+_id,newplayerObj);
  
  }
  deleteplayer(i){
    alert('received:'+i.id)
    return this.http.delete(this.ServiceUrl+i._id)
  }
}
