import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-pm25',
  templateUrl: './pm25.component.html',
  styleUrls: ['./pm25.component.scss']
})
export class Pm25Component {
@Input() pm25Val: number;

  // check the value of PM 2.5
  checkValueOfPm25(): string {
    if (this.pm25Val >= 0 && this.pm25Val <= 12) {
      return 'data__bcg-dgreen';
    } else if (this.pm25Val >= 13 && this.pm25Val <= 36) {
      return 'data__bcg-green';
    } else if (this.pm25Val >= 37 && this.pm25Val <= 60) {
      return 'data__bcg-yellow';
    } else if (this.pm25Val >= 61 && this.pm25Val <= 84) {
      return 'data__bcg-orange';
    } else if (this.pm25Val >= 85 && this.pm25Val <= 120) {
      return 'data__bcg-red';
    } else if (this.pm25Val > 121) {
      return 'data__bcg-black';
    }
  }
}
