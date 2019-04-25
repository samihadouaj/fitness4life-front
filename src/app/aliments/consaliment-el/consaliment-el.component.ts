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
    this.numberOfCalsForThisItem = (this.aliment.cals * this.quantity) / this.aliment.qty;
    console.log(this.quantity);
    this.dayAssesmentService.CalsIn += this.numberOfCalsForThisItem;
  }

  deleteAl() {
    console.log(this.aliment);
     this.dayAssesmentService.deleteAl(this.aliment , this.index);
   }


}
