import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chabry-data',
  templateUrl: './chabry.component.html',
  styleUrls: ['./chabry.component.scss'],
  providers: [IjpConnectionService]
})
export class ChabryComponent implements OnInit {
  data: any;
  stationName = 'Osiedle Chabry';
  ijpData: string;
  ijpString: string;
  pm25Data: string;
  pm10Data: string;

  constructor(private connectionServ: IjpConnectionService) { }

  insertData() {
    this.ijpData = this.data.IJP;
    this.ijpString = this.data.IJPString;
    this.pm25Data = this.data.PM25;
    this.pm10Data = this.data.PM10;
  }

  getData() {
    this.connectionServ.getDataFromChabryPoint()
      .subscribe((response) => {
        this.data = response.json();
        this.insertData();
        console.log(this.data);
      });
  }

  ngOnInit() {
    this.getData();
  }

}