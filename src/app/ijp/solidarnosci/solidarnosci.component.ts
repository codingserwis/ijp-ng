import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'solidarnosci-data',
  templateUrl: './solidarnosci.component.html',
  styleUrls: ['./solidarnosci.component.scss'],
  providers: [ IjpConnectionService ]
})
export class SolidarnosciComponent implements OnInit {

  constructor(private connectionServ: IjpConnectionService) { }
  data: any;
  stationName = 'Aleja Solidarności';
  ijpData: string;
  ijpString: string;
  pm25Data: string;
  pm10Data: string;
  // insert data to DOM;
  insertData() {
    this.ijpData = this.data.IJP;
    this.ijpString = this.data.IJPString;
    this.pm25Data = this.data.PM25;
    this.pm10Data = this.data.PM10;
  }

  // get data from APi
  getData() {
    this.connectionServ.getDataFromSolidarnosciPoint()
      .subscribe(
        (response) => {
          this.data = response.json();
          this.insertData();
      },
      (error: Response) => {
        console.error(error);
      });
  }

  ngOnInit() {
    this.getData();
  }
}
