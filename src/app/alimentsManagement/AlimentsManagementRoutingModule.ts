import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlimentsmanagementComponent} from './alimentsmanagement/alimentsmanagement.component';
import {AddalimentComponent} from './addaliment/addaliment.component';

const routes: Routes = [
  {
    path: '',
    component: AlimentsmanagementComponent
  },
  {
    path: 'addaliment',
    component : AddalimentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentsManagementRoutingModule {}
