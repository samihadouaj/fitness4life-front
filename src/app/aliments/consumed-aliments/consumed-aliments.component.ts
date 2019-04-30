import { Component, OnInit } from '@angular/core';
import {DayAssesmentService} from '../dayAssesment.service';

@Component({
  selector: 'app-consumed-aliments',
  templateUrl: './consumed-aliments.component.html',
  styleUrls: ['./consumed-aliments.component.scss']
})
export class ConsumedAlimentsComponent implements OnInit {
  AlimentstoAddToDayAss: Object = [];
  CalsIn: number;
  constructor(
    private dayAssesmentService: DayAssesmentService
  ) { }

  async ngOnInit() {
    this.dayAssesmentService.dayAssesment = await this.dayAssesmentService.getDayAssesmet();
    this.dayAssesmentService.ArrayOfMekla = this.dayAssesmentService.dayAssesment.mekla;
    console.log(this.dayAssesmentService.ArrayOfMekla);


    this.dayAssesmentService.createInvArrayOfMekla();
    this.AlimentstoAddToDayAss = this.dayAssesmentService.AlimentstoAddToDayAss;
    this.CalsIn = this.dayAssesmentService.CalsIn;
    console.log(this.CalsIn);
    console.log(localStorage.getItem('uid'));
  }

  // createMeklaArray() {
  //   this.dayAssesmentService.createArrayOfMekla();
  //   console.log(this.dayAssesmentService.ArrayOfMekla);
  // }

 submit() {
    this.dayAssesmentService.ArrayOfMekla = [];
   this.dayAssesmentService.createArrayOfMekla();
     console.log(this.dayAssesmentService.ArrayOfMekla);
     this.CalsIn = this.dayAssesmentService.CalsIn;
     this.dayAssesmentService.submitMekla().subscribe((res) =>  {
       console.log(res);
     });
}
}
