import {Component, Input, OnInit} from '@angular/core';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';
import {workout} from '../../aliments/workout.model';

@Component({
  selector: 'app-workout-todo',
  templateUrl: './workout-todo.component.html',
  styleUrls: ['./workout-todo.component.scss']
})
export class WorkoutTodoComponent implements OnInit {

  @Input() workout;
  @Input() index: number;
  @Input() qty: number;
  private numberOfCalsForThisItem: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
    console.log(workout);
   // this.numberOfCalsForThisItem = this.workout.kcal * this.qty;
    console.log(this.qty);
   // this.dayAssesmentService.CalsIn += this.numberOfCalsForThisItem;
  }


  deletewk() {
    console.log('workout.kcal: ' + this.workout.kcal);
    console.log('workout.qty: ' + this.workout.qty);
    console.log('qty: ' + this.qty);
    this.numberOfCalsForThisItem = (this.workout.kcal * this.qty) / this.workout.qty ;
    this.dayAssesmentService.CalsOut -= this.numberOfCalsForThisItem;
    if ( this.dayAssesmentService.CalsOut < 0 ) {
      this.dayAssesmentService.CalsOut = 0;
    }

    console.log(this.dayAssesmentService.CalsOut);
    this.dayAssesmentService.deletewk(this.workout , this.index);
  }


}
