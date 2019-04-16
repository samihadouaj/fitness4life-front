import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {UserService} from '../../../user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
      user;
    constructor(private translate: TranslateService, public router: Router, private userService: UserService) {

        // this.router.events.subscribe(val => {
        //     if (
        //         val instanceof NavigationEnd &&
        //         window.innerWidth <= 992 &&
        //         this.isToggled()
        //     ) {
        //         this.toggleSidebar();
        //     }
        // });
    }

   async ngOnInit() {
      this.user = await this.userService.getUserInfo();
        // this.pushRightClass = 'push-right';
    }

    // isToggled(): boolean {
    //     const dom: Element = document.querySelector('body');
    //     return dom.classList.contains(this.pushRightClass);
    // }
    //
    // toggleSidebar() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle(this.pushRightClass);
    // }
    //
    // rltAndLtr() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle('rtl');
    // }
    //
    onLoggedout() {
        localStorage.removeItem('token');
    }
    //
    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
}
