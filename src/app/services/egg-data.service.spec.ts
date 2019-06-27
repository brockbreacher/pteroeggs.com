import { TestBed } from '@angular/core/testing';

import { EggDataService } from './egg-data.service';

describe('EggDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EggDataService = TestBed.get(EggDataService);
    expect(service).toBeTruthy();
  });
});
