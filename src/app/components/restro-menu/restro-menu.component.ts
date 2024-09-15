import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { RestroMenuService } from 'src/app/services/restro-menu.service';
interface MenuItem {
  quantity: any;
  name: string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-restro-menu',
  templateUrl: './restro-menu.component.html',
  styleUrls: ['./restro-menu.component.css']
})
export class RestroMenuComponent implements OnInit {
  restaurantName: string = ''; // Initialize with an empty string
  searchQuery: string = '';
  filteredMenu: MenuItem[] = [];
  selectedItems: MenuItem[] = []; // Array to track selected items
  menu: MenuItem[] = []; // Original menu items

  constructor(private route: ActivatedRoute,private router: Router,private cartService: CartService, private restroMenuService: RestroMenuService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.restaurantName = params.get('restaurantName') ?? ''; // Use nullish coalescing operator
  });
  // Populate menu items for demonstration purposes
  this.menu = [
    { name: 'Burger', imageUrl: 'assets/lefteris-kallergis-rbcvIrxw6KA-unsplash.jpg', price: 5.99,quantity:1 },
    { name: 'Pizza', imageUrl: 'assets/food_delivery.jpg', price: 10.99,quantity:1 },
    { name: 'Salad', imageUrl: 'assets/brooke-lark-oaz0raysASk-unsplash.jpg', price: 7.99,quantity:1  },
    { name: 'Dessert', imageUrl: 'assets/dani-rendina-zcJEvX2hX8M-unsplash.jpg', price: 5.99,quantity:1  },
    { name: 'Noodles', imageUrl: 'assets/brooke-lark--F_5g8EEHYE-unsplash.jpg', price: 10.99,quantity:1  },
    { name: 'Sandwich', imageUrl: 'assets/cristina-matos-albers-S4dXp25NiLg-unsplash.jpg', price: 7.99,quantity:1  },

  ];

  // Initially, set filteredMenu to the same as menu
  this.filteredMenu = [...this.menu];
  

 // this.getRestroMenu();
  }
  // getRestroMenu(): void{
  //   this.restroMenuService.restroMenu().subscribe(
  //     (data: MenuItem[]) => {
  //       this.menu = data; // Set the data from API
  //       this.filteredMenu = [...this.menu]; // Initialize filteredRestaurants with all data
  //     },
  //     (error) => {
  //       console.error('Error fetching restaurant list', error);
  //     }
  //   );
  // }
  increaseQuantity(item: MenuItem) {
    if (!item.quantity) {
      item.quantity = 1;
    } else {
      item.quantity++;
    }
    this.updateSelectedItems(item);
  }

  decreaseQuantity(item: MenuItem) {
    if (item.quantity && item.quantity > 0) {
      item.quantity--;
      this.updateSelectedItems(item);
    }
  }

  updateSelectedItems(item: MenuItem) {
    this.selectedItems = this.filteredMenu.filter(i => i.quantity && i.quantity > 0);
  }
  calculateFinalPrice(): number {
    return this.selectedItems.reduce((acc, curr) => acc + curr.price * (curr.quantity || 0), 0);
  }
  placeOrder() {
    // Navigate to the payment form component
  this.router.navigate(['/payment-form']);
  }

  searchMenuItems() {
    if (!this.searchQuery) {
      // If search query is empty, display all menu items
      this.filteredMenu = [...this.menu];
    } else {
       // If search query is provided, filter menu items based on the query
       this.filteredMenu = this.menu.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }


  }
  addToCart() {
    this.cartService.clearCart(); // Clear previous cart items if needed
    this.selectedItems.forEach(item => {
      this.cartService.addToCart(item);
    });
    this.router.navigate(['/cart']);
  }
  
}
  
  
  
  




