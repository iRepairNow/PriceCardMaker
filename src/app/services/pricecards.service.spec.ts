import { TestBed } from '@angular/core/testing';

import { PricecardsService } from './pricecards.service';

describe('PricecardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricecardsService = TestBed.get(PricecardsService);
    expect(service).toBeTruthy();
  });
});
