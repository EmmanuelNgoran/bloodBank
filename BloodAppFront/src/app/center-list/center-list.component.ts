import { Component, OnInit } from '@angular/core';
import { Center } from './center';
import { CenterService } from '../center.service';


@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {

  centers: Center[];

  constructor(private centerService: CenterService) { }


  ngOnInit() {
    this.getAllCenters();
  }

  getAllCenters(){
    this.centerService.getCenters().subscribe(
    centers => this.centers = centers,
    error => console.log(error));
  }

}
