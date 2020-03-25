import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CouponsComponent } from './coupons/coupons.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'Homepage',component:HomePageComponent},
  {path:'About Us',component:AboutUsComponent},
  {path:'News',component:NewsComponent},
  {path:'Coupons',component:CouponsComponent},
  {path:'Footer',component:FooterComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CouponsComponent,
    NewsComponent,
    AboutUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes), ReactiveFormsModule, BrowserAnimationsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
