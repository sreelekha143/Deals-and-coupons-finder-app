import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css']
})
export class NewseditComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private newsService:NewsService) {}
  news:any;
 newsObject:any={
 
  _id:"",
 name:"",
 detail:"",
 imageurl:""
  };

  ngOnInit(): void {
   // console.log(this.activatedRoute.snapshot.paramMap.get)
   
let id=this.activatedRoute.snapshot.paramMap.get('_id');
this.newsService.getNewsById(id).subscribe((response)=>{
  console.log(response);
  this.newsObject=response
})
  }
  submit(){
    this.newsService.updateNewsById(this.newsObject.id,this.newsObject).subscribe((resp)=>{
  alert('Data updated');
  this.router.navigate(['/News']);
    })
  }
  cancel(){
    this.router.navigate(['/News']);
  }
  getNewsFromService(){
    this.newsService.getNews().subscribe((response)=>{
      this.news=response;
      console.log(this.news);
  
    });
  }
}
