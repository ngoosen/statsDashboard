import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCompareComponent } from './stats-compare.component';

describe('StatsCompareComponent', () => {
  let component: StatsCompareComponent;
  let fixture: ComponentFixture<StatsCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
