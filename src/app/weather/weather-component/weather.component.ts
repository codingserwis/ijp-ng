import { WeatherDataModel } from './../model/weather-data-model';
import { WeatherConnectionService } from './../service/weather-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-data',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [ WeatherConnectionService ]
})
export class WeatherComponent implements OnInit {
  data: any;
  dataLoaded = false;
  weatherData = new WeatherDataModel(null, null, null, null, null, null);
  constructor(private connectionServ: WeatherConnectionService) { }

  // insert data to DOM
  insertData() {
    this.weatherData.location = this.data.location.name;
    this.weatherData.lastUpdated = this.data.current.last_updated;
    this.weatherData.currTemp = this.data.current.temp_c;
    this.weatherData.feelsTemp = this.data.current.feelslike_c;
    this.weatherData.windString = this.data.current.wind_dir;
    this.weatherData.windSpeed = this.data.current.wind_kph;
  }

  // check wind direction
  checkWindDir(): string {
    if (this.data.current.wind_dir === 'N') {
      return `wi-from-n`;
    } else if (this.data.current.wind_dir === 'NNE') {
      return `wi-from-nne`;
    } else if (this.data.current.wind_dir === 'NE') {
      return `wi-from-ne`;
    } else if (this.data.current.wind_dir === 'ENE') {
      return `wi-from-ene`;
    } else if (this.data.current.wind_dir === 'E') {
      return `wi-from-e`;
    } else if (this.data.current.wind_dir === 'ESE') {
      return `wi-from-ese`;
    } else if (this.data.current.wind_dir === 'SE') {
      return `wi-from-se`;
    } else if (this.data.current.wind_dir === 'SSE') {
      return `wi-from-sse`;
    } else if (this.data.current.wind_dir === 'S') {
      return `wi-from-s`;
    } else if (this.data.current.wind_dir === 'SSW') {
      return `wi-from-ssw`;
    } else if (this.data.current.wind_dir === 'SW') {
      return `wi-from-sw`;
    } else if (this.data.current.wind_dir === 'WSW') {
      return `wi-from-wsw`;
    } else if (this.data.current.wind_dir === 'W') {
      return `wi-from-w`;
    } else if (this.data.current.wind_dir === 'WNW') {
      return `wi-from-wnw`;
    } else if (this.data.current.wind_dir === 'NW') {
      return `wi-from-nw`;
    } else if (this.data.current.wind_dir === 'NNW') {
      return `wi-from-NNW`;
    }
  }

   // check the status of current weather
   checkStatus(): string {
    if (this.data.current.is_day === 1) {
      if (this.data.current.condition.code === 1000) {
          return `wi-day-sunny`;
      } else if (this.data.current.condition.code === 1003) {
          return `wi-day-cloudy`;
      } else if (this.data.current.condition.code === 1030) { 
        return `wi-day-cloudy-windy`;
      } else if (this.data.current.condition.code === 1135) {
          return `wi-day-fog`;
      } else if (this.data.current.condition.code === 1183) {
          return `wi-day-showers`;
      }
    } else {
      if (this.data.current.condition.code === 1000) {
          return `wi-night-alt-clear`;
      } else if(this.data.current.condition.code === 1003) {
          return `wi-night-alt-cloudy`;
      } else if (this.data.current.condition.code === 1030) { 
        return `wi-night-alt-cloudy-windy`;
      } else if (this.data.current.condition.code === 1135) {
          return `wi-night-fog`;
      } else if (this.data.current.code === 1183) {
          return `wi-night-alt-showers`;
      }
    }
  }
  // get data from API
  getData() {
    this.connectionServ.getDataFromApixu()
      .subscribe(
        (response) => {
          this.data = response.json();
          this.insertData();
          this.dataLoaded = true;
          console.log(this.data);
      },
      (error: Response) => {
        console.error('Wystąpił błąd połączenia - ', error.statusText);
      });
  }

  // refreshing data
  onRefresh() {
    this.weatherData = new WeatherDataModel(null, null, null, null, null, null);
    this.getData();
  }
  ngOnInit() {
    this.getData();
  }

}