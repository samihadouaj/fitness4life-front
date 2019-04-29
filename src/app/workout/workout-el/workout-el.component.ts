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
  duration: number;
  private numberOfCalsForThisItem: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
    this.duration = this.workout.duration;
    console.log(this.duration);
  }

  add() {
    this.numberOfCalsForThisItem = (this.workout.kcal * this.duration) ;
    this.dayAssesmentService.WorkoutstoAddToDayAss.push({wk: this.workout, duration: this.duration});
    this.dayAssesmentService.CalsIn += this.numberOfCalsForThisItem;
  }
}
