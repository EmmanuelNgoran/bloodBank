import { Component, OnInit } from '@angular/core';
import { CampaignCenter } from './campaignCenter';
import { CampaignCenterService } from '../campaign-center.service';

@Component({
  selector: 'app-campaign-center-list',
  templateUrl: './campaign-center-list.component.html',
  styleUrls: ['./campaign-center-list.component.css']
})
export class CampaignCenterListComponent implements OnInit {

  campaignCenters: CampaignCenter[];

  constructor(private campaignCenterService: CampaignCenterService) { }

  ngOnInit() {
    this.getAllCampaignCenters();
  }

  getAllCampaignCenters(){
    this.campaignCenterService.getCampaignCenters().subscribe(
      campaignCenters => this.campaignCenters = campaignCenters,
      error => console.log(error)
    );
  }

}
