import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-ijp',
  templateUrl: './ijp.component.html',
  styleUrls: ['./ijp.component.scss']
})
export class IjpComponent {
@Input() ijpVal: number;
@Input() ijpStringVal: string;

  constructor() { }

    // check the value of IJP
    checkValueOfIjp(): string {
      if (this.ijpVal >= 0 && this.ijpVal <= 1) {
        return 'data__bcg-dgreen';
      } else if (this.ijpVal >= 2 && this.ijpVal <= 3) {
        return 'data__bcg-green';
      } else if (this.ijpVal >= 4 && this.ijpVal <= 5) {
        return 'data__bcg-yellow';
      } else if (this.ijpVal >= 6 && this.ijpVal <= 7) {
        return 'data__bcg-orange';
      } else if (this.ijpVal >= 8 && this.ijpVal <= 9) {
        return 'data__bcg-red';
      } else if (this.ijpVal >= 10) {
       return 'data__bcg-black';
      }
    }
}
