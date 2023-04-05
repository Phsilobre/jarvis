import { TestBed } from '@angular/core/testing';

import { MealsService } from './meals.service';

describe('MealsServiceService', () => {
  let service: MealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
