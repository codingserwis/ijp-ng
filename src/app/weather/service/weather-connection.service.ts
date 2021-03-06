import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherConnectionService {
  
  apiConfig = {
    key: '48147044f89b4001831152133171402',
    location: 'Opole'
  };

  constructor(private http: Http) { }

  getDataFromApixu() {
    return this.http.get(`http://api.apixu.com/v1/current.json?key=${this.apiConfig.key}&q=${this.apiConfig.location}`);
  }
}
