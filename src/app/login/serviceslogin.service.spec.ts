import { TestBed } from '@angular/core/testing';

import { ServicesloginService } from './serviceslogin.service';

describe('ServicesloginService', () => {
  let service: ServicesloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
