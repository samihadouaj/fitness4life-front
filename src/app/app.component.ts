import { Component, OnInit } from '@angular/core';
import {GeneralService} from './shared/services/general.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private generalService: GeneralService) {
    }

    async ngOnInit() {
     this.generalService.dayAssesment = await this.generalService.getDayAssesmet();
     // this.generalService.fetchCalsIn();
     // this.generalService.fetchCalsOut();
    }
}
