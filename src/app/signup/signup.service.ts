import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class  SignupService {



  constructor(private  http: HttpClient) {
  }


  signup(global) {
    return this.http.post('http://localhost:8080/api/auth/signup', global);
}
  // check() {
  //   return this.http.post('http://localhost:8080/api/auth/check', this.part1);
  // }
}


