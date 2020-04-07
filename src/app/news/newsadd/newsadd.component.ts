import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NewsService } from 'src/app/news.service';
import { News } from 'src/app/viewmodels/news.viewmodel';
@Component({
  selector: 'app-newsadd',
  templateUrl: './newsadd.component.html',
  styleUrls: ['./newsadd.component.css']
})
export class NewsaddComponent implements OnInit {
  news:News[]=[];
  myForm:FormGroup;
  constructor(private newsService:NewsService,private router:Router, private activatedRoute:ActivatedRoute) { 

    this.myForm=new FormGroup({
      id:new FormControl('',[Validators.required,Validators.maxLength(6)]),
      name:new FormControl('',[Validators.required,Validators.pattern("[A-Z][a-z]{1,10}")]),
      detail:new FormControl('',[Validators.required]),
      imageurl:new FormControl('')

      
     })
  }
  getnewsFromService(){
    this.newsService.getNews().subscribe((response)=>{
      this.news=response;
    })
  }
  addNewsToService(id,name,detail,imageurl){
    this.newsService.addNews(id,name,detail,imageurl).subscribe((response)=>{
    
      this.getnewsFromService();
      this.router.navigate(['/News']);
      alert('news item added');
    })
  }
  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate(['/News'])
  }
}
