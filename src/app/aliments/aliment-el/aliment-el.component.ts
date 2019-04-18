import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aliment-el',
  templateUrl: './aliment-el.component.html',
  styleUrls: ['./aliment-el.component.scss']
})
export class AlimentElComponent implements OnInit {
  @Input() aliment;
 // @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
