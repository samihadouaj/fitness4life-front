import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapworkoutComponent} from './wrapWorkout/wrapworkout.component';


const routes: Routes = [
  {
    path: '',
    component: WrapworkoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
