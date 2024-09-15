import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { loadStripe, Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  cardElement: StripeCardElement | null = null;
  cardError: string | null = null;  // Updated type: string | null

  constructor(
    private paymentService: PaymentService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load Stripe.js and initialize Stripe Elements
    loadStripe('pk_test_51Pxo8Y06WkaCI5etTX0TPbiCn8Bt3cfLEVzVw41mPTlK45MAswSuR4gB9G5Ri83CB6jpZNzZmi7vW8lqueAhnvzN00uLsb4M0j').then((stripe) => {
      if (stripe) {
        this.stripe = stripe;
        this.elements = stripe.elements();

        // Create an instance of the card Element.
        this.cardElement = this.elements.create('card');
        // Add an instance of the card Element into the `card-element` <div>.
        if (this.cardElement) {
          this.cardElement.mount('#card-element');
        }
      }
    });
  }

  async onSubmit() {
    if (!this.stripe || !this.cardElement) {
      this.snackBar.open('Stripe has not loaded yet.', 'Error', {
        duration: 3000,
      });
      return;
    }

    // Create a token using the card details
    const { token, error } = await this.stripe.createToken(this.cardElement);

    if (error) {
      // Ensure that cardError is either string or null
      this.cardError = error.message || null;  // Fixed the type assignment
      this.snackBar.open('Payment Failed: ' + (error.message || 'Unknown error'), 'Error', {
        duration: 3000,
      });
    } else if (token) {
      const paymentData = {
        token: token.id,  // Send the token to the backend
        amount: 1000  // Replace with actual amount
      };

      // this.paymentService.processPayment(paymentData).subscribe(
      //   (response) => {
      //     this.snackBar.open('Payment successful!', 'Success', { duration: 3000 });
      //     this.router.navigate(['/order-summary']);
      //   },
      //   (error) => {
      //     this.snackBar.open('Payment Failed', 'Error', { duration: 3000 });
      //   }
      // );
      this.router.navigate(['/order-summary']);
    }
  }
}
