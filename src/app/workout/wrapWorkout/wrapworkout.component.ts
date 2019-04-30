import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../shared/services/general.service';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';

@Component({
  selector: 'app-wrapworkout',
  templateUrl: './wrapworkout.component.html',
  styleUrls: ['./wrapworkout.component.scss']
})
export class WrapworkoutComponent implements OnInit {

  constructor(private generalService: GeneralService, private dayAssesment: DayAssesmentService) { }

  ngOnInit() {
    this.dayAssesment.CalsOut = this.generalService.dayAssesment.calBurned;
  }

}
