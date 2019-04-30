import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlimentService} from './aliment.service';
import {WorkoutService} from '../workout/workout.service';

@Injectable()

export class DayAssesmentService {
  WorkoutstoAddToDayAss: {wk: any, qty: number} [] = [];
  ArrayOfWorkouts = [];
  CalsOut: number ;
  constructor(private http: HttpClient,
              private alimentService: AlimentService,
              private workoutService: WorkoutService
  ) {}
  dayAssesment;
  ArrayOfMekla = [];
  AlimentstoAddToDayAss: {al: any , qty: number} [] = [];
  CalsIn: number;
  private base_url = 'http://localhost:8080';

  deleteAl(al, index) {
    console.log(index);
    if (index !== -1) {
      this.AlimentstoAddToDayAss.splice(index, 1);
    }
  }


  createArrayOfMekla() {
    this.AlimentstoAddToDayAss.forEach((al) => {
      const leID: string = al.al.id;
      this.ArrayOfMekla.push({food_id: leID, qty: al.qty });
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
    // console.log(this.ArrayOfMekla);
    console.log('calsIn elli bech nsubmiteha');
    console.log(this.CalsIn);
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.base_url + '/api/assesment/addMekla/' + localStorage.getItem('uid'), {listOfMekla: this.ArrayOfMekla , calsIn: this.CalsIn}, {headers: headers});
  }

  deletewk(wk: any, index: number) {
    console.log(index);
    if (index !== -1) {
      this.WorkoutstoAddToDayAss.splice(index, 1);
    }
  }


  async createInvArrayOfMekla() {
    this.ArrayOfMekla.forEach(async el => {
      const aliment = await this.alimentService.getAlimentById(el.food_id);
      console.log(aliment);
      this.AlimentstoAddToDayAss.push({al: aliment, qty: el.qty});
    });
  }


  createInvArrayOfWorkouts() {
    this.ArrayOfWorkouts.forEach(async el => {
      console.log(el);
      const workout = await this.workoutService.getWorkoutById(el.activity_id);
      console.log(workout);
      this.WorkoutstoAddToDayAss.push({wk: workout, qty: el.qty});
    });

  }

  createArrayOfWorkouts() {
    this.WorkoutstoAddToDayAss.forEach((al) => {
      const leID: string = al.wk.id;
      this.ArrayOfWorkouts.push({activity_id: leID, qty: al.qty });
    });
  }

  submitWorkout() {
    console.log('ligne ejeya el CalsOut elli bech ensubmitih ');
    console.log(this.CalsOut);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    console.log('ligne ejeya el ArrayOfWorkouts elli bech ensubmitih ');
    console.log(this.ArrayOfWorkouts);
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.base_url + '/api/assesment/addWorkout/' + localStorage.getItem('uid'), {listOfActivity: this.ArrayOfWorkouts, calsOut: this.CalsOut}, {headers: headers});
  }
}
