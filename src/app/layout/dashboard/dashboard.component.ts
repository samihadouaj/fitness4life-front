import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {GeneralService} from '../../shared/services/general.service';
import {CalculService} from '../../shared/services/calcul.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    dexists;
    currentdayAss;
    InMoinOut = 0;
  gaugeType = 'semi' ;
  gaugeLabel = 'IMC' ;

  thresholdConfig = {
    '0': {color: 'blue'},
    '18': {color: 'green'},
    '25': {color: 'orange'},
    '27': {color: 'red'}
  };

  thresholdConfigCals = {
    '0': {color: 'black'},
    '20': {color: 'orange'},
    '40': {color: 'purple'},
    '60': {color: 'blue'},
    '100': {color: 'green'},
    '110': {color: 'red'}
  };

  public currentuser;
  public currentPourcentage = 0;
  private alert1: { id: number; type: string; message: string };
  private alert2: { id: number; type: string; message: string };
  public balance;
  private predctedWeight;
    constructor(private generalService: GeneralService, private calculService :CalculService) {
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

    }

   async ngOnInit() {
      // njibou el user
     this.generalService.currentUser = await this.generalService.getCurrentUser();
     this.currentuser = await this.generalService.currentUser;
     console.log(this.currentuser);

     // ne7sboulou el prediction mte3ou baa 5 weeks
     this.predctedWeight = this.calculService.predictDifferenceIn5Weeks(this.currentuser.balance , this.currentuser.current_weight, this.currentuser.target_weight) + this.currentuser.current_weight;
     console.log(this.predctedWeight);
     // nchoufouh andou day assesment walla le
      this.dexists = await this.generalService.dayAssesmentExists();
      console.log(this.dexists);

          // ken andou day asseesment :
      if (this.dexists) {
        // njouh
        this.currentdayAss = await this.generalService.getDayAssesmet();
        console.log(this.currentdayAss);
        this.InMoinOut = this.currentdayAss.totalCalIn - this.currentdayAss.calBurned ;
        this.currentPourcentage = (this.InMoinOut / this.currentuser.calories_needed) * 100;
        console.log(this.InMoinOut);
        this.balance = this.InMoinOut - this.currentuser.calories_needed;
        this.alert2 = {
          id: 2,
          type: 'danger',
          message: 'ATTENTION !! you have surpassed your daily allowed calories by ' + (this.balance)
        };
      } else {
            this.balance = 0;
            this.InMoinOut = 0;
            this.currentPourcentage = 0;
      }


       this.alert1 = {
         id: 1,
         type: 'success',
         message: 'your goal is to consume ' + this.currentuser.calories_needed + ' Kcals'
       };


   }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);

    }

  createDay() {
      this.generalService.createEmptyDay().subscribe(res => {console.log(res); window.location.reload(); });
  }

  finishDay() {
    this.generalService.finishday(this.balance).subscribe((res) => {console.log(res);
      window.location.reload();
    });
  }
}
