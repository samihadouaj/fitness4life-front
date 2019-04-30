import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class GeneralService {
  private base_url = 'http://localhost:8080';
  public dayAssesment;
  constructor(private http: HttpClient) {}
  getDayAssesmet() {
    console.log(name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers);
    return this.http.get(this.base_url + '/api/assesment/get/' + localStorage.getItem('uid'), {headers: headers} ).toPromise();
  }
}
