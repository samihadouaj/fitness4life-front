import { Component, OnInit } from '@angular/core';
import {DayAssesmentService} from '../dayAssesment.service';

@Component({
  selector: 'app-consumed-aliments',
  templateUrl: './consumed-aliments.component.html',
  styleUrls: ['./consumed-aliments.component.scss']
})
export class ConsumedAlimentsComponent implements OnInit {
  AlimentstoAddToDayAss: Object = [];
  constructor(
    private dayAssesmentService: DayAssesmentService
  ) { }
  ngOnInit() {
    this.AlimentstoAddToDayAss = this.dayAssesmentService.AlimentstoAddToDayAss;
  }



}
