import { Component, OnInit } from '@angular/core';
import { BloodBag } from './bloodBag';
import { BloodBagService } from '../blood-bag.service';

@Component({
  selector: 'app-blood-bag-list',
  templateUrl: './blood-bag-list.component.html',
  styleUrls: ['./blood-bag-list.component.css']
})
export class BloodBagListComponent implements OnInit {

  bloodBags: BloodBag[];

  constructor(private bloodBagService: BloodBagService) { }

  ngOnInit() {

    this.getAllBloodBags();
  }

  getAllBloodBags(){
    this.bloodBagService.getBloodBags().subscribe(
      bloodBags => this.bloodBags = bloodBags,
      error => console.log(error)
    );
  }

}
