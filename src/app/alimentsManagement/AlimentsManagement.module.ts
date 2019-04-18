import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {UserRoutingModule} from '../user/user-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../layout/layout.module';
import {AddalimentComponent} from './addaliment/addaliment.component';
import {DeletealimentComponent} from './deletealiment/deletealiment.component';
import {AlimentsmanagementComponent} from './alimentsmanagement/alimentsmanagement.component';
import {AlimentsManagementRoutingModule} from './AlimentsManagementRoutingModule';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AlimentsManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  declarations: [AddalimentComponent, DeletealimentComponent, AlimentsmanagementComponent ]
})
export class AlimentsManagementModule { }
