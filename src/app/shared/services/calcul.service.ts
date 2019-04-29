import {Injectable} from '@angular/core';
import {assertNumber} from '@angular/core/src/render3/assert';

@Injectable()
export class CalculService {
 private imc : number;
  private energyfactor: number;
  // Harris Benedict Formula
    calculIMC(weight, height, age, sex, activity, target_weight) {
       this.imc = 0;
       this.energyfactor = 1;
       if (sex.toString() === 'M') {
         this.imc = this.imc + 66.5 + 13.8 * parseFloat(weight) + 5 * parseFloat(height) - 6.755 * parseFloat(age);
       } else {
         this.imc = this.imc + 655.1 + 9.6 * parseFloat(weight) + 1.9 * parseFloat(height) - 4.676 * parseFloat(age);
       }
       if (activity.toString() === 'S') {
         this.energyfactor = 1.2;
       } else if (activity.toString() === 'M') {
         this.energyfactor = 1.3;
       } else {
         this.energyfactor = 1.4;
       }

       this.imc = this.imc * this.energyfactor - 250; // 250 a day => 250 * 14 = 3500 => 0.45359237 kg lost => 1kg in a month
       console.log(this.imc);
      return this.imc;
    }
}
