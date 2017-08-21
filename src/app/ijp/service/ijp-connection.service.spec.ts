import { TestBed, inject } from '@angular/core/testing';

import { IjpConnectionService } from './ijp-connection.service';

describe('IjpConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IjpConnectionService]
    });
  });

  it('should be created', inject([IjpConnectionService], (service: IjpConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
