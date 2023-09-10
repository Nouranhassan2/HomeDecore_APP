import { TestBed } from '@angular/core/testing';

import { OrederdetailsService } from './orederdetails.service';

describe('OrederdetailsService', () => {
  let service: OrederdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrederdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
