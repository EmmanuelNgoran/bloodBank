import { TestBed } from '@angular/core/testing';

import { BloodBagService } from './blood-bag.service';

describe('BloodBagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodBagService = TestBed.get(BloodBagService);
    expect(service).toBeTruthy();
  });
});
