import { TestBed } from '@angular/core/testing';

import { CriptoServiceApiService } from './cripto-service-api.service';

describe('CriptoServiceApiService', () => {
  let service: CriptoServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptoServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
