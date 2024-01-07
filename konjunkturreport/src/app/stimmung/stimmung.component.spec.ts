import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimmungComponent } from './stimmung.component';

describe('StimmungComponent', () => {
  let component: StimmungComponent;
  let fixture: ComponentFixture<StimmungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StimmungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StimmungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
