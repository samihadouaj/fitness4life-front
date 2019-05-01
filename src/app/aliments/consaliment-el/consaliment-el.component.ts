import {Component, Input, OnInit} from '@angular/core';
import {DayAssesmentService} from '../dayAssesment.service';

@Component({
  selector: 'app-consaliment-el',
  templateUrl: './consaliment-el.component.html',
  styleUrls: ['./consaliment-el.component.scss']
})
export class ConsalimentElComponent implements OnInit {
  @Input() aliment;
  @Input() index: number;
  @Input() quantity: number;
  numberOfCalsForThisItem: number;
  constructor(private dayAssesmentService: DayAssesmentService) { }

  ngOnInit() {
   // this.numberOfCalsForThisItem = (this.aliment.cals * this.quantity) / this.aliment.qty;
    console.log(this.quantity);
   // this.dayAssesmentService.CalsIn += this.numberOfCalsForThisItem;
  }

  deleteAl() {
    console.log(this.aliment);
    console.log('aliment.kcal: ' + this.aliment.cals);
    console.log('aliment.qty: ' + this.aliment.qty);
    console.log('qty: ' + this.quantity);
    console.log(this.dayAssesmentService.CalsIn);

    this.numberOfCalsForThisItem = (this.aliment.cals * this.quantity) / this.aliment.qty ;
    console.log(this.numberOfCalsForThisItem );
    this.dayAssesmentService.CalsIn -= this.numberOfCalsForThisItem;
    if ( this.dayAssesmentService.CalsIn < 0 ) {
      this.dayAssesmentService.CalsIn = 0;
    }
    this.dayAssesmentService.deleteAl(this.aliment , this.index);
    console.log(this.dayAssesmentService.CalsIn);
  }


}
