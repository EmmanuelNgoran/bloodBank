import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { CenterListComponent } from './center-list/center-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    CenterListComponent
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
