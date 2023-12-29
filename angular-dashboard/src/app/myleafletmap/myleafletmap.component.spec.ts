import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleafletmapComponent } from './myleafletmap.component';

describe('MyleafletmapComponent', () => {
  let component: MyleafletmapComponent;
  let fixture: ComponentFixture<MyleafletmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyleafletmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyleafletmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
