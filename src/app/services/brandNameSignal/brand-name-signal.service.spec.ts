import { TestBed } from '@angular/core/testing';

import { BrandNameSignalService } from './brand-name-signal.service';

describe('BrandNameSignalService', () => {
  let service: BrandNameSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandNameSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
