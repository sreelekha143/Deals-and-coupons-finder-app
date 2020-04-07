import { Component, OnInit } from '@angular/core';
import { News } from '../viewmodels/news.viewmodel';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:News[]=[]
  constructor(private router:Router,private newsService:NewsService) { }
  goToNewsEditComponent(_id){
    this.router.navigate(['/news-edit' + '/' + _id ]);
  }
  addNewsToService(){   
    this.router.navigate(['/news-add'])
   }
  ngOnInit(): void {
    this.getNewsFromService()
  }
  getNewsFromService(){
    this.newsService.getNews().subscribe((response)=>{
      this.news=response;
      console.log(this.news);
  
    });
  }
  deleteNewsFromService(i){
    alert(i.id);
    this.newsService.deleteNews(i).subscribe((response)=>{
      alert('Data deleted');
      this.getNewsFromService();
    })

  }

}
