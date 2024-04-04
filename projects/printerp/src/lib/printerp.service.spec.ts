import { TestBed } from '@angular/core/testing';

import { PrinterpService } from './printerp.service';

describe('PrinterpService', () => {
  let service: PrinterpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
