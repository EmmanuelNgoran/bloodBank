import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { Center } from './center-list/center';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private ApiUrl = "http://127.0.0.1:8000/donationCenter/"

  constructor(private http: HttpClient) { }

  getCenters(): Observable<Center[]>{
    return this.http.get<Center[]>(this.ApiUrl);
  }
}
