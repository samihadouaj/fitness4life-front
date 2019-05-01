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
     this.generalService.dayAssesment = await this.generalService.getDayAssesmet();
     this.generalService.dExists = await this.generalService.dayAssesmentExists();
     console.log(this.generalService.dExists);
     // this.generalService.fetchCalsIn();
     // this.generalService.fetchCalsOut();
    }
}
