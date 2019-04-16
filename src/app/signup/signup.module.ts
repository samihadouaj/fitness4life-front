import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { Part2Component } from './part2/part2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupComponent, Part2Component]
})
export class SignupModule { }
