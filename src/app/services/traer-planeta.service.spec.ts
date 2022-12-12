import { TestBed } from '@angular/core/testing';

import { TraerPlanetaService } from './traer-planeta.service';

describe('TraerPlanetaService', () => {
  let service: TraerPlanetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerPlanetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
