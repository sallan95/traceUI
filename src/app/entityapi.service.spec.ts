import { TestBed } from '@angular/core/testing';

import { EntityApiService } from './entityapi.service';

describe('EntityApiService', () => {
  let service: EntityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
