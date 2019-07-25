import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { CampaignCenter } from './campaign-center-list/campaignCenter';

@Injectable({
  providedIn: 'root'
})
export class CampaignCenterService {

  private campaignCenterApi = "http://127.0.0.1:8000/CampaignCenter/";


  constructor( private http: HttpClient) { }

  getCampaignCenters(): Observable<CampaignCenter[]>{
    return this.http.get<CampaignCenter[]>(this.campaignCenterApi);
  }
}
