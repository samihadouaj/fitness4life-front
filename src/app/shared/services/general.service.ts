import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DayAssesmentService} from '../../aliments/dayAssesment.service';
import {UserService} from '../../user/user.service';

@Injectable()
export class GeneralService {
  dExists ;
  private base_url = 'http://localhost:8080';
  public dayAssesment;
   currentUser;
  emtyDay = {
    'uid': localStorage.getItem('uid'),
    'mekla' : [
    ] ,
    'totalCalIn' : 0,
    'calBurned' : 0,
    'activities' :  [
    ]
  };


  constructor(private http: HttpClient, private dayAssesmentService: DayAssesmentService,
              private userService: UserService) {}
  getDayAssesmet() {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    return this.http.get(this.base_url + '/api/assesment/get/' + localStorage.getItem('uid'), {headers: headers} ).toPromise();
  }

  dayAssesmentExists() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(this.base_url + '/api/assesment/exists/' + localStorage.getItem('uid'), {headers: headers}  ).toPromise();
  }


  createEmptyDay() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
   return  this.http.post('http://localhost:8080/api/assesment/add', this.emtyDay, {headers: headers});
  }

   getCurrentUser() {
   return this.userService.getUserInfo();
  }

  finishday(balance )  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post('http://localhost:8080/api/assesment/finishDay/'
      + localStorage.getItem('uid') , balance , {headers: headers});
  }
}
