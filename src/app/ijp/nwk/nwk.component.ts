import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nwk-data',
  templateUrl: './nwk.component.html',
  styleUrls: ['./nwk.component.scss'],
  providers: [ IjpConnectionService ]
})
export class NwkComponent implements OnInit {
  data: any;
  stationName = 'Nowa Wieś Królweska';
  ijpData: string;
  ijpString: string;
  pm25Data: string;
  pm10Data: string;
  constructor(private connectionServ: IjpConnectionService) { }

  // insert data to DOM;
  insertData() {
    this.ijpData = this.data.IJP;
    this.ijpString = this.data.IJPString;
    this.pm25Data = this.data.PM25;
    this.pm10Data = this.data.PM10;
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
