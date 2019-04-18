import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchalimentsService {

  private base_url = 'http://localhost:8080';
  private aliments0 = []; // contains the searched aliment
  private aliments1 = []; // contains all aliments
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
    getAllAliments() { // get all aliments in the db
      return this.http.get(this.base_url + '/Aliments/').toPromise();
    }
}
