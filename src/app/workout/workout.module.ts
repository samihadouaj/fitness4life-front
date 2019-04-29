import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkoutElComponent} from './workout-el/workout-el.component';
import {DoneWorkoutComponent} from './done-workout/done-workout.component';
import {WorkoutTodoComponent} from './workout-todo/workout-todo.component';
import {WrapworkoutComponent} from './wrapWorkout/wrapworkout.component';
import {WorkoutListComponent} from './workout-list/workout-list.component';
import {WorkoutRoutingModule} from './workout-routing.module';
import {FormsModule} from '@angular/forms';
import {DayAssesmentService} from '../aliments/dayAssesment.service';


@NgModule({
  declarations: [WorkoutElComponent, DoneWorkoutComponent, WorkoutTodoComponent, WrapworkoutComponent, WorkoutListComponent],
  providers : [DayAssesmentService],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    FormsModule
  ]
})
export class WorkoutModule { }
