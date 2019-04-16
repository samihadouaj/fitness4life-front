import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {TranslateModule} from '@ngx-translate/core';
import {SignupRoutingModule} from '../signup/signup-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from './user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  declarations: [UserProfileComponent, EditUserComponent]
})
export class UserModule { }
