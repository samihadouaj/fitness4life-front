import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutElComponent } from './workout-el/workout-el.component';
import { DoneWorkoutComponent } from './done-workout/done-workout.component';
import { WorkoutTodoComponent } from './workout-todo/workout-todo.component';
import { WrapComponent } from './wrap/wrap.component';
import {FormsModule} from '@angular/forms';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@NgModule({
  declarations: [WorkoutElComponent, DoneWorkoutComponent, WorkoutTodoComponent, WrapComponent, WorkoutListComponent],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    FormsModule
  ]
})
export class WorkoutModule { }
