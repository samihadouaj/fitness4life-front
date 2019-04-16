import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class  SignupService {
  partomk = {firsrt: ' '};
  public part1: {firstName: string, lastName: string, username: string, email: string, age: number, password: string, sex: string};
  public part2: {current_weight: number, height: number, target_weight: number, activity_lvl: string, diet_pace: string, imc: number};
  public part3: {imc: number, calories_needed: number};
  private globalSignup: { lastName: string; sex: string; activity_lvl: string; firstName: string; password: string; diet_pace: string; target_weight: number; current_weight: number; email: string; age: number; imc: number; username: string; height: number };

  public _host: string;


  constructor(private  http: HttpClient) {
  }


  signup() {
    this.globalSignup = {...this.part1, ...this.part2, ...this.part3};
    console.log(this.globalSignup);
    return this.http.post('http://localhost:8080/api/auth/signup', this.globalSignup);
}
  check() {
    return this.http.post('http://localhost:8080/api/auth/check', this.part1);
  }
}


