import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsplotComponent } from './tsplot.component';

describe('TsplotComponent', () => {
  let component: TsplotComponent;
  let fixture: ComponentFixture<TsplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
