import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrieproduktionComponent } from './industrieproduktion.component';

describe('IndustrieproduktionComponent', () => {
  let component: IndustrieproduktionComponent;
  let fixture: ComponentFixture<IndustrieproduktionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrieproduktionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrieproduktionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
