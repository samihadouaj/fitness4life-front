import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import {SignupService} from './signup.service';
const routes: Routes = [

       { path: '', component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [SignupService]
})
export class SignupRoutingModule {
}
