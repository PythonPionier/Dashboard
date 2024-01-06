import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeschaeftigungComponent } from './beschaeftigung.component';

describe('BeschaeftigungComponent', () => {
  let component: BeschaeftigungComponent;
  let fixture: ComponentFixture<BeschaeftigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeschaeftigungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeschaeftigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
