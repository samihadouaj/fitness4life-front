import {Component, Input, OnInit} from '@angular/core';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';

@Component({
  selector: 'app-workout-todo',
  templateUrl: './workout-todo.component.html',
  styleUrls: ['./workout-todo.component.scss']
})
export class WorkoutTodoComponent implements OnInit {

  @Input() workout;
  @Input() index: number;
  @Input() duration: number;
  private numberOfCalsForThisItem: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
    this.numberOfCalsForThisItem = this.workout.cals * this.duration;
    console.log(this.duration);
    this.dayAssesmentService.CalsIn += this.numberOfCalsForThisItem;
  }


  deletewk() {
    console.log(this.workout);
    this.dayAssesmentService.deletewk(this.workout , this.index);
  }


}
