import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-homeedit',
  templateUrl: './homeedit.component.html',
  styleUrls: ['./homeedit.component.css']
})
export class HomeeditComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private homeService:HomeService) { }
  play:any;
  playerObject:any={
  
   _id:"",
   playername:"",
  gamename:"",
  detail:"",
  imageurl:""
   };
  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.paramMap.get('_id');
this.homeService.getPlayerById(id).subscribe((response)=>{
  console.log(response);
  this.playerObject=response
})
  }
  submit(){
    this.homeService.updateplayerById(this.playerObject.id,this.playerObject).subscribe((resp)=>{
  alert('Data updated');
  this.router.navigate(['/Homepage']);
    })
  }
  cancel(){
    this.router.navigate(['/Homepage']);
  }
  getplayerFromService(){
    this.homeService.getPlayer().subscribe((response)=>{
      this.play=response;
      console.log(this.play);
  
    });
  }

}
