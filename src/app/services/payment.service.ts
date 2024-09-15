import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'https://localhost:7117/api/Payment/process-payment'; // Update with your backend API URL


  constructor(private http:HttpClient) { }
  processPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, paymentData);
  }
}
