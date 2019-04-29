import {Injectable} from '@angular/core';
import {AlimentModel} from './aliment.model';
import {forEach} from '@angular/router/src/utils/collection';
import construct = Reflect.construct;
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlimentService} from './aliment.service';
import {WorkoutService} from '../workout/workout.service';
import {workout} from './workout.model';

@Injectable()

export class DayAssesmentService {
  WorkoutstoAddToDayAss: {wk: any, duration: number} [] = [];
  ArrayOfWorkouts = [];
  constructor(private http: HttpClient, private alimentService: AlimentService, private workoutService: WorkoutService) {}
  dayAssesment;
  ArrayOfMekla = [];
  AlimentstoAddToDayAss: {al: any , qty: number} [] = [];
  CalsIn = 0;
  private base_url = 'http://localhost:8080';

  deleteAl(al, index) {
    console.log(index);
    if (index !== -1) {
      this.AlimentstoAddToDayAss.splice(index, 1);
    }
  }

  async  createInvArrayOfMekla() {
      this.ArrayOfMekla.forEach(async el => {
        const aliment = await this.alimentService.getAlimentById(el.food_id);
        console.log(aliment);
        this.AlimentstoAddToDayAss.push({al: aliment, qty: el.qty});
      });

  }

  createArrayOfMekla() {
    this.AlimentstoAddToDayAss.forEach((al) => {
      const leID: string = al.al.id;
      this.ArrayOfMekla.push({id: leID, qty: al.qty });
    });
  }

  getDayAssesmet() {
   console.log(name);
   const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
   console.log(headers);
      return this.http.get(this.base_url + '/api/assesment/get/' + localStorage.getItem('uid'), {headers: headers} ).toPromise();
  }

 // async getMeklaFromServer() {
 //     this.dayAssesment = await this.getDayAssesmet();
 //     this.ArrayOfMekla = this.dayAssesment.mekla;
 //  }

  submitMekla() {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log(this.base_url + '/api/assesment/addMekla/' + localStorage.getItem('uid'));
    console.log(this.ArrayOfMekla);
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.base_url + '/api/assesment/addMekla/' + localStorage.getItem('uid'), {listOfMekla: this.ArrayOfMekla}, {headers: headers});
  }

  deletewk(wk: any, index: number) {
    console.log(index);
    if (index !== -1) {
      this.WorkoutstoAddToDayAss.splice(index, 1);
    }
  }

  createInvArrayOfWorkouts() {
    this.ArrayOfMekla.forEach(async el => {
      const aliment = await this.alimentService.getAlimentById(el.food_id);
      console.log(aliment);
      this.AlimentstoAddToDayAss.push({al: aliment, qty: el.qty});
    });

  }

  createArrayOfWorkouts() {
    this.ArrayOfWorkouts.forEach(async el => {
      const aliment = await this.workoutService.getWorkoutById(el.food_id);
      console.log(aliment);
      this.WorkoutstoAddToDayAss.push({wk: workout, duration: el.duration});
    });
  }

  submitWorkout() {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log(this.base_url + '/api/assesment/addWorkout/' + localStorage.getItem('uid'));
    console.log(this.ArrayOfWorkouts);
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.base_url + '/api/assesment/addWorkout/' + localStorage.getItem('uid'), {listOfWorkouts: this.ArrayOfWorkouts}, {headers: headers});
  }
}
