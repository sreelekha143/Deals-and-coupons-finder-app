import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { News } from './viewmodels/news.viewmodel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  ServiceUrl:string="http://localhost:3000/api/";

  getNews():Observable<News[]>{
    return this.http.get<News[]>(this.ServiceUrl+"/news");
  }
  constructor(private http:HttpClient,private router:Router) { }
  addNews(i,n,d,im){
    let newNews={id:i,name:n,detail:d,imageurl:im}
   return this.http.post(this.ServiceUrl+"/news",newNews)
   }
   getNewsById(_id){
    return this.http.get(this.ServiceUrl+_id);
    
  }
  updateNewsById(_id,newNewsObj){
    return this.http.put(this.ServiceUrl+_id,newNewsObj);
  
  }
  deleteNews(i){
    alert('received:'+i.id)
    return this.http.delete(this.ServiceUrl+i._id)
  }

}
