import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestroMenuService {
  private apiUrl = 'https://localhost:7117/api/MenuItem'; // Replace with your API URL
  constructor(private http: HttpClient) { }
  restroMenu(): Observable<any> {
    return this.http.get<any>(this.apiUrl );
}
}
