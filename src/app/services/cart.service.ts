import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const existingItemIndex = currentItems.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      currentItems[existingItemIndex].quantity += item.quantity;
    } else {
      // Add new item if not already in the cart
      currentItems.push(item);
    }

    this.cartItemsSubject.next(currentItems);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
