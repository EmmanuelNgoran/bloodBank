import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Donation } from './donation-list/donation';
@Injectable({
  providedIn: 'root'
})
export class BloodService {

  private ApiUrl = 'http://127.0.0.1:8000/donation/';

  constructor(private http: HttpClient) {
  }
  getDonations(): Observable<Donation[]> {
    return this.http.get<Donation[]>(this.ApiUrl);
  }

}
