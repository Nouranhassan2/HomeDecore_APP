import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './product-page/productpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'product/:id',component:ProductpageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MainPageComponent},
  {path:'search/:searchItem', component:MainPageComponent},


  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
