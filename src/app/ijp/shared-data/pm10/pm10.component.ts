import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-pm10',
  templateUrl: './pm10.component.html',
  styleUrls: ['./pm10.component.scss']
})
export class Pm10Component implements OnInit {
@Input() pm10Val;

  constructor() { }

  ngOnInit() {
  }

}
