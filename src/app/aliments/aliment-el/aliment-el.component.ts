import {Component, Input, OnInit} from '@angular/core';
import {DayAssesmentService} from '../dayAssesment.service';

@Component({
  selector: 'app-aliment-el',
  templateUrl: './aliment-el.component.html',
  styleUrls: ['./aliment-el.component.scss']
})
export class AlimentElComponent implements OnInit {
  @Input() aliment;
 // @Input() index: number;
  quantity: number;
  private numberOfCalsForThisItem: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
    this.quantity = this.aliment.qty;
    console.log(this.quantity);
  }

  add() {
    this.numberOfCalsForThisItem = (this.aliment.cals * this.quantity) / this.aliment.qty;
    this.dayAssesmentService.AlimentstoAddToDayAss.push({al: this.aliment, qty: this.quantity});

    this.dayAssesmentService.CalsIn += this.numberOfCalsForThisItem;
  }
}
