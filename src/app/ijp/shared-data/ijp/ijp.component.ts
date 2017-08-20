import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-ijp',
  templateUrl: './ijp.component.html',
  styleUrls: ['./ijp.component.scss']
})
export class IjpComponent implements OnInit {
@Input() ijpVal;
@Input() ijpStringVal;

  constructor() { }

  ngOnInit() {
  }

}
