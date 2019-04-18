import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {
  private base_url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  search(name) {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log(this.base_url + '/Aliment/name/' + name);
    return this.http.get(this.base_url + '/Aliment/name/' + name, {headers: headers}).toPromise();
  }

  searchbyReg(reg) {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log(this.base_url + '/Aliment/reg/' + reg);
    return this.http.get(this.base_url + '/Aliment/reg/' + reg, {headers: headers}).toPromise();
  }

  getAllAliments() { // get all aliments in the db
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    return this.http.get(this.base_url + '/Aliment/get', {headers: headers}).toPromise();
  }
}
