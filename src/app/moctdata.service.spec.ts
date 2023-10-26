import { TestBed } from '@angular/core/testing';

import { MoctdataService } from './moctdata.service';

describe('MoctdataService', () => {
  let service: MoctdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoctdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
