import { IjpData } from './../model/ijp-data-model';
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
  lookoData = new IjpData(null, null, null, null);
  stationName = 'Aleja Solidarności';
  ijpData: string;
  ijpString: string;
  pm25Data: string;
  pm10Data: string;
  // insert data to DOM;
  insertData() {
    this.lookoData.ijp = this.data.IJP;
    this.lookoData.ijpString = this.data.IJPString;
    this.lookoData.pm25 = this.data.PM25;
    this.lookoData.pm10 = this.data.PM10;
  }
    // refresh data
    onDataRefresh() {
      this.lookoData = new IjpData('0', '-', '0', '0');
      this.getData();
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
