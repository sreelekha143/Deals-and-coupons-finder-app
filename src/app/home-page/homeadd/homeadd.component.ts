import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';
import { Player } from 'src/app/viewmodels/home.viewmodel';
@Component({
  selector: 'app-homeadd',
  templateUrl: './homeadd.component.html',
  styleUrls: ['./homeadd.component.css']
})
export class HomeaddComponent implements OnInit {
  play:Player[]=[];
  myForm:FormGroup;
  constructor(private homeService:HomeService,private router:Router, private activatedRoute:ActivatedRoute) {
    this.myForm=new FormGroup({
      id:new FormControl(''),
      playername:new FormControl(''),
      gamename:new FormControl(''),
      detail:new FormControl(''),
      imageurl:new FormControl('')

      
     })
   }
   getplayerFromService(){
    this.homeService.getPlayer().subscribe((response)=>{
      this.play=response;
    })
  }
  addplayerToService(id,gamename,playername,detail,imageurl){
    this.homeService.addplayer(id,gamename,playername,detail,imageurl).subscribe((response)=>{
    
      this.getplayerFromService();
      // this.router.navigate(['/Homepage']);
      alert('palyer added');
    })
  }
  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate(['/Homepage'])
  }
}
