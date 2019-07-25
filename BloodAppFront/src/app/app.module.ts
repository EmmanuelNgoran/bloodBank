import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { CenterListComponent } from './center-list/center-list.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignCenterListComponent } from './campaign-center-list/campaign-center-list.component';
import { BloodBagListComponent } from './blood-bag-list/blood-bag-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    CenterListComponent,
    CampaignListComponent,
    CampaignCenterListComponent,
    BloodBagListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
