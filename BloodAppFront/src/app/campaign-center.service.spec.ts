import { TestBed } from '@angular/core/testing';

import { CampaignCenterService } from './campaign-center.service';

describe('CampaignCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignCenterService = TestBed.get(CampaignCenterService);
    expect(service).toBeTruthy();
  });
});
