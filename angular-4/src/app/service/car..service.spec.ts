import { TestBed } from '@angular/core/testing';

import { Car.Service } from './car..service';

describe('Car.Service', () => {
  let service: Car.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Car.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
