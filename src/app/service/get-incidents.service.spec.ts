import { TestBed } from '@angular/core/testing';

import { GetIncidentsService } from './get-incidents.service';

describe('GetIncidentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetIncidentsService = TestBed.get(GetIncidentsService);
    expect(service).toBeTruthy();
  });
});
