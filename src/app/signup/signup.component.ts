import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupService} from './signup.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CalculService} from '../shared/services/calcul.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  userForm = new FormGroup({
    fname: new FormControl([Validators.required]),
    lname: new FormControl([Validators.required]),
    uname: new FormControl([Validators.required, Validators.maxLength(20)]),
    umail: new FormControl([Validators.required]),
    uage: new FormControl([Validators.required, Validators.min(1), Validators.max(99)]),
    c_weight: new FormControl([Validators.required, Validators.min(1)]),
    uheight: new FormControl([Validators.required, Validators.min(1)]),
    t_weight: new FormControl([Validators.required, Validators.min(1)])
  });
showError = false;
  ERROR_MSG: string;
  error = false;
    ngOnInit() {}


  onSubmit(f) {
    f.value.imc = this.calculService.calculImc(+f.value.current_weight, +f.value.height);
    Math.round(f.value.imc);
    console.log(f.value.current_weight);
    // tslint:disable-next-line:max-line-length
    f.value.calories_needed = this.calculService.calculCaloriesNeeded(f.value.current_weight, f.value.height, f.value.age, f.value.sex, f.value.activity_lvl, f.value.target_weight);
    Math.round(f.value.calories_needed);

    console.log(f.value);

    this.signupService.signup(f.value).subscribe((resp: HttpErrorResponse) => {
        console.log(resp.error.error);
        this.router.navigate(['/login']);

      },
      error1 => {
        console.log(error1.error);
        if (error1.error === 'Bad request') {
          this.ERROR_MSG = 'enter a password and retry';
        } else {
          this.error = true;
          this.ERROR_MSG = error1.error;
        }
      });

  }
}
