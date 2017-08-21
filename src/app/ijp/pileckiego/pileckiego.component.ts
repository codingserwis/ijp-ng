import { IjpData } from './../model/ijp-data-model';
import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pileckiego-data',
  templateUrl: './pileckiego.component.html',
  styleUrls: ['./pileckiego.component.scss'],
  providers: [IjpConnectionService]
})
export class PileckiegoComponent implements OnInit {

  data: any;
  lookoData = new IjpData(null, null, null, null);
  stationName = 'Rondo Pileckiego';
  ijpData: string;
  ijpString: string;
  pm25Data: string;
  pm10Data: string;

  constructor(private connectionServ: IjpConnectionService) { }

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
    this.connectionServ.getDataFromPileckiegoPoint()
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
