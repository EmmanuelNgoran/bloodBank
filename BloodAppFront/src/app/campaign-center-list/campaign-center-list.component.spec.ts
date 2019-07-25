import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCenterListComponent } from './campaign-center-list.component';

describe('CampaignCenterListComponent', () => {
  let component: CampaignCenterListComponent;
  let fixture: ComponentFixture<CampaignCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
