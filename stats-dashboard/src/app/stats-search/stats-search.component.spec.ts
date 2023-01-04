import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSearchComponent } from './stats-search.component';

describe('StatsSearchComponent', () => {
  let component: StatsSearchComponent;
  let fixture: ComponentFixture<StatsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
