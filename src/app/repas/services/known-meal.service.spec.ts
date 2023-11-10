import { TestBed } from '@angular/core/testing';

import { KnownMealService } from './known-meal.service';

describe('KnownMealService', () => {
  let service: KnownMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnownMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
