import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { Donation } from './donation';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  donations: Donation[];

  constructor(private bloodService: BloodService ) { }

  getDonations() {
    this.bloodService.getDonations().subscribe(
      donations => this.donations = donations,
      error => console.log(error) );
  }
  ngOnInit() {
    this.getDonations();
  }
}
