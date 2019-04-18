import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlimentService} from '../aliment.service';
import {AlimentModel} from '../aliment.model';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.scss']
})
export class AlimentListComponent implements OnInit {
  allAliments: Object = [];
   result: Object = [];
  private str: string;

  constructor(private alimentService: AlimentService,
              private router: Router,
              private route: ActivatedRoute) { }

  async ngOnInit() {
        this.allAliments = await this.alimentService.getAllAliments();
        console.log(this.allAliments);
  }

  async search(alimentName) {
    console.log(this.str);
    console.log(alimentName);
    if (alimentName == '') {
      this.allAliments = await this.alimentService.getAllAliments();
    }
    this.result = await  this.alimentService.search(alimentName);
    this.allAliments = this.result;

  }

  async searchByReg(reg) {
    if (reg == '') {
      this.allAliments = await this.alimentService.getAllAliments();
    }
    console.log(this.str);
    console.log(reg);
    this.result = await  this.alimentService.searchbyReg(reg);
    this.allAliments = this.result;
  }


}
