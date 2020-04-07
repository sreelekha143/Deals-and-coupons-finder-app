import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'

import { NewsaddComponent } from './news/newsadd/newsadd.component';
import { NewseditComponent } from './news/newsedit/newsedit.component';
import { HomeaddComponent } from './home-page/homeadd/homeadd.component';
import { HomeeditComponent } from './home-page/homeedit/homeedit.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponsAddComponent } from './coupons/coupons-add/coupons-add.component';
import { CouponsEditComponent } from './coupons/coupons-edit/coupons-edit.component';
import { CouponsService } from './coupons.service';
import { NewsService } from './news.service';
import { HomeService } from './home-page/home.service';





const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'Homepage',component:HomePageComponent},
  {path:'About Us',component:AboutUsComponent},
  {path:'News',component:NewsComponent},
  {path:'Coupons',component:CouponsComponent},
  {path:'Footer',component:FooterComponent},
 {path:'coupon-add',component:CouponsAddComponent},
 {path:'coupon-edit/:_id',component:CouponsEditComponent},
  { path: 'news-add', component:NewsaddComponent},
  { path: 'news-edit/:_id', component:NewseditComponent},
  {path:'home-add',component:HomeaddComponent},
  {path:'home-edit/:_id',component:HomeeditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
   CouponsComponent,
    NewsComponent,
    AboutUsComponent,
    FooterComponent,
    
    NewsaddComponent,
    NewseditComponent,
    HomeaddComponent,
    HomeeditComponent,
    CouponsComponent,
    CouponsAddComponent,
    CouponsEditComponent

  
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes), ReactiveFormsModule, BrowserAnimationsModule,
    MatCardModule,HttpClientModule

  ],
  providers: [CouponsService,NewsService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
