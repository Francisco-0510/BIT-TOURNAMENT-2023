import { TestBed } from '@angular/core/testing';

import { EstudiantesServicesService } from './estudiantes-services.service';

describe('EstudiantesServicesService', () => {
  let service: EstudiantesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
