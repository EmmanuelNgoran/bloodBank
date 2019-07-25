import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBagListComponent } from './blood-bag-list.component';

describe('BloodBagListComponent', () => {
  let component: BloodBagListComponent;
  let fixture: ComponentFixture<BloodBagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
