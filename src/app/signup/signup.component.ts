import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupService} from './signup.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private  router: Router,
    private signupService: SignupService) {}
    showError = false;
    ngOnInit() {}


  onSubmit(f) {
    console.log(f.value.firstName);
    console.log(f.value);
    this.signupService.partomk.firsrt = 'gjhvkln,';
    console.log(this.signupService.partomk);
    (this.signupService.part1).firstName = f.value.firstName;
    this.signupService.part1.firstName = f.value.firstName;
    this.signupService.part1.lastName = f.value.lastName;
    this.signupService.part1.username = f.value.username;
    this.signupService.part1.age = f.value.age;
    this.signupService.part1.email = f.value.email;
    this.signupService.part1.password = f.value.password;
    this.signupService.part1.sex = f.value.sex;
    console.log('aaaaaaaaaaaaaaaa' + this.signupService.part1);

    // this.signupService.check().subscribe((reponse: string) => {
    //   const  rep = JSON.stringify(reponse);
    //   console.log(rep);
    //   if (rep === 'OK') {
    //     this.router.navigate(['part2'], {relativeTo: this.route});
    //   } else {
    //     this.showError = true;
    //   }
    // });
     this.router.navigate(['part2'], {relativeTo: this.route});
  }
}
