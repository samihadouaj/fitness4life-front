import { Component, OnInit } from '@angular/core';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';

@Component({
  selector: 'app-done-workout',
  templateUrl: './done-workout.component.html',
  styleUrls: ['./done-workout.component.scss']
})
export class DoneWorkoutComponent implements OnInit {

  WorkoutstoAddToDayAss: Object = [];
  CalsIn: number;

  constructor(
    private dayAssesmentService: DayAssesmentService
  ) {
  }

  async ngOnInit() {
    this.dayAssesmentService.dayAssesment = await this.dayAssesmentService.getDayAssesmet();
    this.dayAssesmentService.ArrayOfMekla = this.dayAssesmentService.dayAssesment.mekla;
    console.log(this.dayAssesmentService.ArrayOfMekla);


    this.dayAssesmentService.createInvArrayOfWorkouts();
    this.WorkoutstoAddToDayAss = this.dayAssesmentService.AlimentstoAddToDayAss;
    this.CalsIn = this.dayAssesmentService.CalsIn;
    console.log(this.CalsIn);
    console.log(localStorage.getItem('uid'));
  }

  createWorkoutsArray() {
    this.dayAssesmentService.createArrayOfWorkouts();
    console.log(this.dayAssesmentService.ArrayOfMekla);
  }

  submit() {
    this.dayAssesmentService.ArrayOfWorkouts = [];
    this.dayAssesmentService.createArrayOfWorkouts();
    console.log(this.dayAssesmentService.ArrayOfWorkouts);
    this.dayAssesmentService.submitWorkout().subscribe((res) => {
      console.log(res);
    });

  }
}
