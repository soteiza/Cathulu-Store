import { TestBed } from '@angular/core/testing';

import { JuegodemesaService } from './juegodemesa.service';

describe('JuegodemesaService', () => {
  let service: JuegodemesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegodemesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
