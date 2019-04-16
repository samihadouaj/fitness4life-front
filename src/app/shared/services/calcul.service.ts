import {Injectable} from '@angular/core';

@Injectable()
export class CalculService {
    calculIMC(weight, height) {
      return weight / ((height / 100 * (height / 100)));
    }
}
