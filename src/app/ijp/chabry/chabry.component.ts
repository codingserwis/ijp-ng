import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chabry-data',
  templateUrl: './chabry.component.html',
  styleUrls: ['./chabry.component.scss']
})
export class ChabryComponent implements OnInit {
  stationName = 'Osiedle Chabry';
  ijpData = '11';
  ijpString = 'Bardzo dobry';
  pm25Data = '100';
  pm10Data = '666';

  constructor() { }

  ngOnInit() {
  }

}
