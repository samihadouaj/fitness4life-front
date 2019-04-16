import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import {SignupService} from './signup.service';
import {Part2Component} from './part2/part2.component';

const routes: Routes = [

       { path: '', component: SignupComponent},
        {path: 'part2', component: Part2Component}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [SignupService]
})
export class SignupRoutingModule {
}
