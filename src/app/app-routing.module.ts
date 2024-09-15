import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestroMenuComponent } from './components/restro-menu/restro-menu.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const routes: Routes = [ { path: '', component: HomeComponent },
{ path: 'restrolist', component: RestaurantListComponent },
{ path: 'menu/:restaurantName', component: RestroMenuComponent },
{ path: 'payment-form', component: PaymentFormComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'cart', component: CartComponent },
{ path: 'order-summary', component: OrderSummaryComponent },
] // Default route to HomeComponent;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
