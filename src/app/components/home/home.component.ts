import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface Restaurant {
  name: string;
  cuisine: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeMessage!: string;

  featuredRestaurants: Restaurant[] = [
    { name: 'Restaurant A', cuisine: 'Italian', imageUrl: 'url-to-image1.jpg' },
    { name: 'Restaurant B', cuisine: 'Mexican', imageUrl: 'url-to-image2.jpg' },
    { name: 'Restaurant C', cuisine: 'Asian', imageUrl: 'url-to-image3.jpg' }
    // Add more featured restaurants as needed
  ];

  constructor(private router: Router,private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    const state = history.state;
    const username = state && state.username ? state.username : null;
    if (username) {
      this.welcomeMessage = `Welcome, ${username}!`;
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/register']);
  }

  navigateToRestroList()
  {
   this.router.navigate(['/restrolist']);
   }

}
