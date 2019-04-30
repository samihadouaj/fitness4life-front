import { Component, OnInit } from '@angular/core';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';
import {GeneralService} from '../../shared/services/general.service';

@Component({
  selector: 'app-done-workout',
  templateUrl: './done-workout.component.html',
  styleUrls: ['./done-workout.component.scss']
})
export class DoneWorkoutComponent implements OnInit {

  WorkoutstoAddToDayAss: Object[] = [];
  CalsOut: number;
  workout ;
  constructor(
    private dayAssesmentService: DayAssesmentService,
    private generalService: GeneralService
  ) {
  }

  async ngOnInit() {
    // this is a test bloc
    // console.log('hetha e test bloc le genreal service');
    // console.log(this.generalService.dayAssesment);
    // end of the test bloc
    this.dayAssesmentService.dayAssesment = await this.dayAssesmentService.getDayAssesmet();
    this.dayAssesmentService.ArrayOfWorkouts = this.dayAssesmentService.dayAssesment.activities;
    console.log('ligne ejeya feha dayAssesment: ');
    console.log(this.dayAssesmentService.dayAssesment);
    this.dayAssesmentService.createInvArrayOfWorkouts();
    this.WorkoutstoAddToDayAss = this.dayAssesmentService.WorkoutstoAddToDayAss;
    this.CalsOut = this.dayAssesmentService.CalsOut;
    console.log(this.dayAssesmentService.WorkoutstoAddToDayAss);
    console.log('ligne ejeya feha calsout jeya metable toul:');
    console.log(this.dayAssesmentService.CalsOut);
    this.CalsOut = this.dayAssesmentService.CalsOut;
  }

  // createWorkoutsArray() {
  //   this.dayAssesmentService.createArrayOfWorkouts();
  //   console.log(this.dayAssesmentService.ArrayOfMekla);
  // }

  submit() {
    this.dayAssesmentService.ArrayOfWorkouts = [];

    this.CalsOut = this.dayAssesmentService.CalsOut;

    this.dayAssesmentService.createArrayOfWorkouts();
    // this.dayAssesmentService.dayAssesment.calBurned = this.dayAssesmentService.CalsOut;
    // console.log(this.dayAssesmentService.ArrayOfWorkouts);
    this.dayAssesmentService.submitWorkout().subscribe((res) => {
      console.log(res);
    });
  }
}
