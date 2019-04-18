import { Component, OnInit } from '@angular/core';
import {SearchalimentsService} from './services/searchaliments.service';


@Component({
  selector: 'app-addaliment',
  templateUrl: './addaliment.component.html',
  styleUrls: ['./addaliment.component.css']
})
export class AddalimentComponent implements OnInit {
  private name: string;
  private aliments;
  private result;
  str;
  constructor(private searchalimentsService: SearchalimentsService) { }

  ngOnInit() {

  }

  async search(alimentName) {
         console.log(this.str);
         console.log(alimentName)
          this.result = await  this.searchalimentsService.search(alimentName);
          console.log(this.result);

   }
   getAllAliments() {

   }

}
