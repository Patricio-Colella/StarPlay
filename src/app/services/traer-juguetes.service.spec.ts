import { TestBed } from '@angular/core/testing';

import { TraerJuguetesService } from './traer-juguetes.service';

describe('TraerJuguetesService', () => {
  let service: TraerJuguetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerJuguetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
