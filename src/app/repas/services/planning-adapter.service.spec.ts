import { TestBed } from '@angular/core/testing';

import { PlanningAdapterService } from './planning-adapter.service';

describe('PlanningAdapterService', () => {
  let service: PlanningAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanningAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
