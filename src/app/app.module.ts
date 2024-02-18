import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { MainblogComponent } from './mainblog/mainblog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    ShopdetailsComponent,
    ShopcartComponent,
    CheckoutComponent,
    BlogdetailsComponent,
    MainblogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
