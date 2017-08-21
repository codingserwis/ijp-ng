import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-pm10',
  templateUrl: './pm10.component.html',
  styleUrls: ['./pm10.component.scss']
})
export class Pm10Component {
@Input() pm10Val;
// check value of PM 10
checkValueOfPm10(): string {
  if (this.pm10Val >= 0 && this.pm10Val <= 20) {
    return 'data__bcg-dgreen';
  } else if (this.pm10Val >= 21 && this.pm10Val <= 60) {
    return 'data__bcg-green';
  } else if (this.pm10Val >= 61 && this.pm10Val <= 100) {
    return 'data__bcg-yellow';
  } else if (this.pm10Val >= 101 && this.pm10Val <= 140) {
    return 'data__bcg-orange';
  } else if (this.pm10Val >= 141 && this.pm10Val <= 200) {
    return 'data__bcg-red';
  } else if (this.pm10Val > 201) {
    return 'data__bcg-black';
  }
}

}
