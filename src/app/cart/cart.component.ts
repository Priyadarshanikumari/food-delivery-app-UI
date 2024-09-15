import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : any;
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('testinng cart--------------',this.cartItems);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum:any, item:any) => sum + item.price * item.quantity, 0);
  }

  placeOrder() {
    // Handle placing the order
    // You might want to clear the cart after placing the order
    // this.cartService.clearCart();
    // Navigate to the payment form component
    this.router.navigate(['/payment-form']);
  }
}
