import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
          {
            imagePath: 'assets/images/slide55.jpg',
            label: 'Ija nrodouk 3abd',
            text: 'By Sami and the team'
          },
            {
                imagePath: 'assets/images/slide44.jpeg',
                label: 'time to change',
                text:
                    'By Sami and the team'
            },

            {
                imagePath: 'assets/images/slide33.jpeg',
                label: 'your way  for a better life',
                text:
                    'By Sami and the team'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `na9es merahj ya boti rak bech tetarche9`
            },
            {
                id: 2,
                type: 'danger',
                message: `zid koul la tmout wenti kil 7atba`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
