import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from './campaign-list/campaign';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaignApiUrl = "http://127.0.0.1:8000/Campaign/";

  constructor( private http: HttpClient) { }



  getCampaigns(): Observable<Campaign[]>{
    return this.http.get<Campaign[]>(this.campaignApiUrl);
  }
}
