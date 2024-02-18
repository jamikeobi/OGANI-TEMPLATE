import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { MainblogComponent } from './mainblog/mainblog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Shop', component:ShopComponent},
  {path: 'Shopdetails', component: ShopdetailsComponent},
  {path: 'Shopcart', component: ShopcartComponent},
  {path: 'Checkout', component: CheckoutComponent},
  {path: 'Blogdetails', component: BlogdetailsComponent},
  {path: 'Mainblog', component:MainblogComponent},
  {path: 'Contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
