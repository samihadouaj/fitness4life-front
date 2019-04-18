import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteserviceService {
  private base_url = 'http://localhost:8080/UserAliments/name/';
  constructor(private http: HttpClient) { }

  delete(name) {
   this.http.delete(this.base_url + name).subscribe((resp) => {
     console.log(resp);
   });
  }
}
