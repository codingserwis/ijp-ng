import { TestBed, inject } from '@angular/core/testing';

import { WeatherConnectionService } from './weather-connection.service';

describe('WeatherConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherConnectionService]
    });
  });

  it('should be created', inject([WeatherConnectionService], (service: WeatherConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
