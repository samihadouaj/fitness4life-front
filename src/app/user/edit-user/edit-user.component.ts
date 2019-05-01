import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
user;
@ViewChild('f') f: NgForm;
  constructor(private userService: UserService) { }

 async ngOnInit() {
   this.userService.currentUser = await this.userService.getUserInfo();
   this.user =  this.userService.currentUser;
   console.log(this.user);
   this.f.setValue({
     firstName: this.user.firstName,
     lastName: this.user.lastName,
     username: this.user.username,
     email: this.user.email,
     age: this.user.age,
     sex: this.user.gender,
     current_weight: this.user.current_weight,
     height: this.user.height,
     target_weight: this.user.target_weight,
     activity_lvl:  this.user.activity_lvl,
   //  diet_pace: this.user.diet_pace
   });
   console.log(this.f.value);
  }

  async onSubmit(f: NgForm) {
      const user = {
         id: this.userService.currentUser.id,
        firstName: f.value.firstName,
          lastName: f.value.lastName,
          username: f.value.username,
          email: f.value.email,
          age: f.value.age,
          sex: f.value.gender,
          current_weight: f.value.current_weight,
          height: f.value.high,
          target_weight: f.value.target_weight,
          activity_lvl: f.value.activity_lvl,
          diet_pace: f.value.diet_pace
      };

     await this.userService.updateUser(user);
  }
}
