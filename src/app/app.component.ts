import { Component, OnInit } from '@angular/core';
import {GeneralService} from './shared/services/general.service';
import {CalculService} from './shared/services/calcul.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private generalService: GeneralService , private calculService: CalculService) {
    }

    async ngOnInit() {
     // this.generalService.dayAssesment = await this.generalService.getDayAssesmet();
     const r = this.calculService.calculCaloriesNeeded(68, 1.78, 22, 'M', 'Sedentary Person');
    console.log(r);
     // this.generalService.fetchCalsIn();
     // this.generalService.fetchCalsOut();
    }
}
