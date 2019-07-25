import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BloodBag } from './blood-bag-list/bloodBag';
import {Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodBagService {

  private bloodBagApiUrl = "http://127.0.0.1:8000/bloodBag/";

  constructor(private http: HttpClient) { }

  getBloodBags(): Observable<BloodBag[]>{
    return this.http.get<BloodBag[]>(this.bloodBagApiUrl);
  }
}
