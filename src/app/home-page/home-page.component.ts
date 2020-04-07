import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../viewmodels/home.viewmodel';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  count=0;
  play:Player[]=[]
  constructor(private router:Router,private homeService:HomeService) { }
  goToplayerEditComponent(_id){
    this.router.navigate(['/home-edit' + '/' + _id ]);
  }
  ngOnInit(): void {
    this.getPlayerfromService()
  }
  addplayerToService(){   
    this.router.navigate(['/home-add'])
   }
  getPlayerfromService(){
    this.homeService.getPlayer().subscribe((response)=>{
      this.play=response;
      console.log(this.play);
  
    });
  }
  deleteplayerFromService(i){
    alert(i.id);
    this.homeService.deleteplayer(i).subscribe((response)=>{
      alert('Data deleted');
      this.getPlayerfromService();
    })

  }
  onIncrement(){
    this.count=this.count+1;
  }
}
