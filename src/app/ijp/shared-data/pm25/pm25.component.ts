import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-pm25',
  templateUrl: './pm25.component.html',
  styleUrls: ['./pm25.component.scss']
})
export class Pm25Component implements OnInit {
@Input() pm25Val;

  constructor() { }

  ngOnInit() {
  }

}
