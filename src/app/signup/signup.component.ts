import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupService} from './signup.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CalculService} from '../shared/services/calcul.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private  router: Router,
    private signupService: SignupService,
                private calculService: CalculService) {}
    showError = false;
  ERROR_MSG: string;
  error = false;
    ngOnInit() {}


  onSubmit(f) {
    f.value.imc = this.calculService.calculImc(+f.value.current_weight, +f.value.height);
    console.log(f.value.current_weight);
    // tslint:disable-next-line:max-line-length
    f.value.calories_needed = this.calculService.calculCaloriesNeeded(f.value.current_weight, f.value.height, f.value.age, f.value.sex, f.value.activity_lvl);
    console.log(f.value);

    // this.signupService.signup(f.value).subscribe((resp: HttpErrorResponse) => {
    //     console.log(resp.error.error);
    //   },
    //   error1 => {
    //     console.log(error1.error);
    //     if (error1.error === 'Bad request') {
    //       this.ERROR_MSG = 'enter a password and retry';
    //     } else {
    //       this.error = true;
    //       this.ERROR_MSG = error1.error;
    //     }
    //   });

     // this.router.navigate(['part2'], {relativeTo: this.route});
  }
}
