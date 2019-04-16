import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {LoginService} from '../../login/login.service';
import {computeStyle} from '@angular/animations/browser/src/util';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}

    canActivate() {
      console.log('in auth gauard');
        if (this.loginService.isAuth()) {
          console.log('bienvenue');
            return true;
        }
        console.log('authentifier vous');
        this.router.navigate(['/login']);
        return false;
    }
}
