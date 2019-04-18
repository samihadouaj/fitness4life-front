// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
// import {SignupService} from '../signup.service';
// import {HttpErrorResponse} from '@angular/common/http';
// import {CalculService} from '../../shared/services/calcul.service';
//
// @Component({
//   selector: 'app-part2',
//   templateUrl: './part2.component.html',
//   styleUrls: ['./part2.component.scss']
// })
// export class Part2Component implements OnInit {
//   ERROR_MSG: string;
//   error = false;
//   constructor(private route: ActivatedRoute,
//               private  router: Router,
//               private signupService: SignupService,
//               private calculService: CalculService) { }
//
//   ngOnInit() {
//     console.log(this.signupService.part1);
//   }
//   onSubmit(f) {
//     this.signupService.part2.activity_lvl = f.value.activity_lvl;
//     this.signupService.part2.current_weight = f.value.current_weight;
//     this.signupService.part2.diet_pace = f.value.diet_pace;
//     this.signupService.part2.height = f.value.height;
//     this.signupService.part2.target_weight = f.value.target_weight;
//     this.signupService.part3.calories_needed = 0;
//     this.signupService.part3.imc = this.calculService.calculIMC(f.value.weight, f.value.height);
//     console.log(this.signupService.part2);
//     this.signupService.signup().subscribe((resp: HttpErrorResponse) => {
//       console.log(resp.error.error);
//     },
//       error1 => {
//       console.log(error1.error);
//       if (error1.error === 'Bad request') {
//         this.ERROR_MSG = 'enter a password and retry';
//       } else {
//         this.error = true;
//       this.ERROR_MSG = error1.error;
//       }
//       });
//   }
// }
