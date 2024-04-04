import { TestBed } from '@angular/core/testing';

import { CommonpService } from './commonp.service';

describe('CommonpService', () => {
  let service: CommonpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
