import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AlimentListComponent} from './aliment-list/aliment-list.component';


const routes: Routes = [
  {
    path: '',
    component: AlimentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentRoutingModule {}
