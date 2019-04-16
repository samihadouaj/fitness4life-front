import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class  LoginService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
     return this.http.post('http://localhost:8080/api/auth/signin' , credentials).toPromise();
  }

  isAuth() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') != null;
  }

}
