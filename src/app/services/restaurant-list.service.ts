import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantListService {

  private apiUrl = 'https://localhost:7117/api/Restaurant'; // Replace with your API URL

  constructor(private http: HttpClient) { }
  restaurantList(): Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
}
