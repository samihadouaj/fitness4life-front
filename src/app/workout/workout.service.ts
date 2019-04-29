import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private base_url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  search(name) {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log(this.base_url + '/workout/name/' + name);
    return this.http.get(this.base_url + '/workout/name/' + name, {headers: headers}).toPromise();
  }

  searchbyReg(reg) {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log(this.base_url + '/workout/reg/' + reg);
    return this.http.get(this.base_url + '/workout/reg/' + reg, {headers: headers}).toPromise();
  }

  getAllWorkouts() { // get all workouts in the db
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    return this.http.get(this.base_url + '/workouts', {headers: headers}).toPromise();
  }

  getWorkoutById(WorkoutId) { // get all aliments in the db
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    return this.http.get(this.base_url + '/Aliment/' + WorkoutId, {headers: headers}).toPromise();
  }

}
