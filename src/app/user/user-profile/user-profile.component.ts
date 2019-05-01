import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user;
  private collapedSideBar: boolean;
  constructor(private userService: UserService ,
              private  router: Router,
              private route: ActivatedRoute) {
  }

   async ngOnInit() {
     this.userService.currentUser = await this.userService.getUserInfo();
     this.user = this.userService.currentUser ;
    console.log(this.user);
  }

  onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.route});
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
