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
  qty: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
    this.qty = this.aliment.qty;
    console.log(this.qty);
  }

  add() {
    this.dayAssesmentService.AlimentstoAddToDayAss.push(this.aliment);
  }
}
