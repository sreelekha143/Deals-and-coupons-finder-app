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
        "name":"Chicken",
        "detail":"fjghfgfdgnjdfghj",
        "price":450,
        "rating":5,
        "category":"nonveg",
        "imageurl":"https://i.ytimg.com/vi/zigTgCmsZGc/maxresdefault.jpg"
      },
      {
        "id":2,
        "name":"fish",
        "detail":"fjghfgfdgnjdfghj",
        "price":500,
        "rating":4,
        "category":"nonveg",
        "imageurl":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/3/tm1b24_fish_fry.jpg.rend.hgtvcom.616.462.suffix/1547589315824.jpeg"
        },
        {
          "id":3,
        "name":"brinjal",
        "detail":"fjghfgfdgnjdfghj",
        "price":60,
        "rating":5,
        "category":"veg",
        "imageurl":"http://redchillycurry.com/wp-content/uploads/2012/08/brinjal-fry.jpg"
        }
    ]
  }

  ngOnInit(): void {
  }

}
