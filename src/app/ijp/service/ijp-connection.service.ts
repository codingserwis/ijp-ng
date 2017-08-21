import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IjpConnectionService {

  apiConfig = {
    key: '1487184056',
    location: {
      chabry: '5ccf7fc18200', // done
      pulaskiego: '5ccf7fc255ee', // done
      pileckiego: '6001940094f8', // done
      pasieka: '5ccf7fc17d7d', // done
      nowaWiesKrol: '5ccf7fc18052', // done
      grudzice: '60019400a82b',
      osAlSolid: 'a020a6036801' // done
    }
  };

  constructor(private http: Http) { }

  getDataFromChabryPoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.chabry}&token=${this.apiConfig.key}`);
  }

  getDataFromPulaskiegoPoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.pulaskiego}&token=${this.apiConfig.key}`); 
  }

  getDataFromPileckiegoPoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.pileckiego}&token=${this.apiConfig.key}`); 
  }

  getDataFromSolidarnosciPoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.osAlSolid}&token=${this.apiConfig.key}`); 
  }

  getDataFromPasiekaPoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.pasieka}&token=${this.apiConfig.key}`); 
  }

  getDataFromNwkPoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.nowaWiesKrol}&token=${this.apiConfig.key}`); 
  }

  getDataFromGrudzicePoint() {
    return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.grudzice}&token=${this.apiConfig.key}`); 
  }  
}
