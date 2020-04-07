import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  Event:object[];
// event:Event=[{
  
//   "name":"Chicken",
//   "detail":"fjghfgfdgnjdfghj",
//   "imageurl":"https://i.ytimg.com/vi/zigTgCmsZGc/maxresdefault.jpg"
// },

// {
  
//   "name":"fish",
//   "detail":"fjghfgfdgnjdfghj",
//   "imageurl":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/3/tm1b24_fish_fry.jpg.rend.hgtvcom.616.462.suffix/1547589315824.jpeg"
// },

// {
  
//   "name":"brinjal",
//   "detail":"fjghfgfdgnjdfghj",
//   "imageurl":"http://redchillycurry.com/wp-content/uploads/2012/08/brinjal-fry.jpg"
// },
// {
//   "name":"potato",
//   "detail":"fjghfgfdgnjdfghj",
//   "imageurl":"https://i.ytimg.com/vi/GD7oFY7-LG0/maxresdefault.jpg"
// },
// {
//   "name":"ladysfinger",
// "detail":"fjghfgfdgnjdfghj",
// "imageurl":"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Curryandvanilla/Bhindi_KurkuriCrispy_Indian_Spiced_Okra_Fry.jpg"
// },
// {
//   "id":6,
//   "name":"mutton",
//   "detail":"fjghfgfdgnjdfghj",
//   "imageurl":"https://cdn.xl.thumbs.canstockphoto.com/mutton-curry-spicy-mutton-masala-with-rice-stock-photograph_csp18978391.jpg"
// }
// ]
  constructor() { 
    this.Event=[
      {
       
        "id":1,
        "name":"Paul Hermalin",
        "email":"sdhfgsdh@email.com",
        "detail":"As part of the internal managerial transition process initiated in 2017 by Paul Hermelin, Chairman and CEO, the Board of Directors of Capgemini SE, meeting today, chose Aiman",
        "organization":"capgemini",
         "imageurl":"https://www.capgemini.com/wp-content/uploads/2017/07/paul_hermelin.jpg?w=250&h=180&crop=1"
      },
      {
       
        "id":2,
        "name":"Aiman Ezzat",
        "email":"shgfhdgfh@email.com",
        "detail":" primarily in the Ministry of Finance. He held a number of positions in the Budget Office and on various ministry staffs, including that of Finance Minister Jacques Delors.",
        "organization":"capgemini",
         "imageurl":"https://www.cxotoday.com/wp-content/uploads/2019/09/ezzat_aiman1.jpg"
      },
      {
       
        "id":3,
        "name":"Ashwin yardi",
        "email":"shdfdgfhdgfh@email.com",
        "detail":" The French IT services company announced on Tuesday that CEO Srinivas Kandula will now be the chairman of the India operations, and Ashwin Yardi, COO for India and global lead",
        "organization":"capgemini",
         "imageurl":"https://timesofindia.indiatimes.com/thumb/msid-67141517,width-1200,height-900,resizemode-4/.jpg"
      },
    ]
  }

  ngOnInit(): void {
  }

}
