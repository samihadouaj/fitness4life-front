import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../shared/services/general.service';
import {DayAssesmentService} from '../dayAssesment.service';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss']
})
export class WrapComponent implements OnInit {
  collapedSideBar: boolean;

  constructor(private generalService: GeneralService, private dayAssesment: DayAssesmentService) { }

  ngOnInit() {
    this.dayAssesment.CalsIn = this.generalService.dayAssesment.totalCalIn;

  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }


}
