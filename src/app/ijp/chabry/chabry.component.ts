import { IjpData } from './../model/ijp-data-model';
import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chabry-data',
  templateUrl: './chabry.component.html',
  styleUrls: ['./chabry.component.scss'],
  providers: [IjpConnectionService]
})
export class ChabryComponent implements OnInit {
  lookoData = new IjpData(null, null, null, null);
  data: any;
  stationName = 'Osiedle Chabry';
  ijpData: string;
  ijpString: string;
  pm25Data: string;
  pm10Data: string;

  constructor( private connectionServ: IjpConnectionService ) { }
  
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
    this.connectionServ.getDataFromChabryPoint()
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
