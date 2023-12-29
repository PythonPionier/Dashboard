import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybarchartComponent } from './mybarchart.component';

describe('MybarchartComponent', () => {
  let component: MybarchartComponent;
  let fixture: ComponentFixture<MybarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
