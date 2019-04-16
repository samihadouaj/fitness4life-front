import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
  currentUser;
  constructor(private http: HttpClient) {}
  getUserInfo() {
  const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  return  this.http.get('http://localhost:8080/api/user/info', {headers: headers}).toPromise();
  }

  updateUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'

    });
    console.log(headers);

    return this.http.put( 'http://localhost:8080/api/user/edit/' + user.id, user, {headers: headers} ).toPromise();
  }


}

