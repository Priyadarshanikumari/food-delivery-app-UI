import { TestBed } from '@angular/core/testing';

import { RestroMenuService } from './restro-menu.service';

describe('RestroMenuService', () => {
  let service: RestroMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestroMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
