import { TestBed } from '@angular/core/testing';

import { StatsSearchService } from './stats-search.service';

describe('StatsSearchService', () => {
  let service: StatsSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
