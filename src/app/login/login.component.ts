import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {LoginService} from './login.service';
import {UserService} from '../user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  private error = false;
    constructor(
      public router: Router,
      private loginService: LoginService,
      private  userService: UserService
    ) {}

    ngOnInit() {}

     async onLogin(login) {
       let resp = await this.loginService.login({username : login.value.username , password: login.value.password});
        // .subscribe(  (resp) => {
        //   console.log(JSON.stringify(resp));
        //   resp = JSON.stringify(resp);
        //   const  r = resp.toString();
        //   const tab = r.split(':');
        //  const t2 = tab[2];
        //  const token = t2.split('"')[1];
        //  this.router.navigate(['dashboard']);
        //  localStorage.setItem('token', token);
        //     console.log(localStorage.getItem('token'));
        //   }
        //
        // ,
        //   error1 => {
        //   console.log(error1.error.error);
        //   console.log('VERIFY USERNAME OR PASSWORD');
        //   this.error = true;
        //   });
       console.log(JSON.stringify(resp));
       resp = JSON.stringify(resp);
       const  r = resp.toString();
       const tab = r.split(':');
       const t2 = tab[1];
       const token = t2.split('"')[1];
       this.router.navigate(['dashboard']);
       localStorage.setItem('token', token);
       console.log(localStorage.getItem('token'));
       this.userService.currentUser = await this.userService.getUserInfo();
    }


}
