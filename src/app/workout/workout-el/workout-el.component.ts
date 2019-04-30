import {Component, Input, OnInit} from '@angular/core';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';

@Component({
  selector: 'app-workout-el',
  templateUrl: './workout-el.component.html',
  styleUrls: ['./workout-el.component.scss']
})
export class WorkoutElComponent implements OnInit {
  @Input() workout;
  // @Input() index: number;
  qty: number;
  private numberOfCalsForThisItem: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
    this.qty = this.workout.qty ;
    console.log(this.qty);
  }

  add() {
    this.numberOfCalsForThisItem = (this.workout.kcal * this.qty) ;
    this.dayAssesmentService.WorkoutstoAddToDayAss.push({wk: this.workout, qty: this.qty});
    console.log(this.dayAssesmentService.WorkoutstoAddToDayAss);
    this.dayAssesmentService.CalsOut += this.numberOfCalsForThisItem;
    console.log(this.dayAssesmentService.CalsOut);
  }
}
