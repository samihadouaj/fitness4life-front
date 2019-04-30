import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkoutService} from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  allworkouts: Object = [];
  result: Object = [];
   str: string;

  constructor(private workoutService: WorkoutService,
              private router: Router,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    this.allworkouts = await this.workoutService.getAllWorkouts();
    console.log(this.allworkouts);
  }

  async search(workoutName) {
    console.log(this.str);
    console.log(workoutName);
    if (workoutName == '') {
      this.allworkouts = await this.workoutService.getAllWorkouts();
    }
    this.result = await  this.workoutService.search(workoutName);
    this.allworkouts = this.result;

  }

  async searchByReg() {
    if (this.str === '') {
      this.allworkouts = await this.workoutService.getAllWorkouts();
    }
    console.log(this.str);
    console.log(this.str);

    this.result = await  this.workoutService.searchbyReg(this.str);
    this.allworkouts = this.result;
  }

}
