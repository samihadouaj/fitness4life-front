import {Injectable} from '@angular/core';
import {assertNumber} from '@angular/core/src/render3/assert';

@Injectable()
export class CalculService {
  private energyfactor: number;
  // Harris Benedict Formula

  calculImc(poid, taille) {
      return poid / (taille * taille);
  }

    calculCaloriesNeeded(weight, height, age, sex, activity) {
       let result = 0;
       height = height * 100;
       this.energyfactor = 1;
       if (sex.toString() === 'M') {
         result =  66.5 + 13.8 * parseFloat(weight) + 5 * parseFloat(height) - 6.755 * parseFloat(age);
       } else {
         result = 655.1 + 9.6 * parseFloat(weight) + 1.9 * parseFloat(height) - 4.676 * parseFloat(age);
       }
       if (activity.toString() === 'Sedentary Person') {
         this.energyfactor = 1.2;
       } else if (activity.toString() === 'Moderately Active Person ') {
         this.energyfactor = 1.3;
       } else {
         this.energyfactor = 1.4;
       }

       result = result * this.energyfactor - 250; // 250 a day => 250 * 14 = 3500 => 0.45359237 kg lost => 1kg in a month
       console.log(result);
      return result;
    }
}
