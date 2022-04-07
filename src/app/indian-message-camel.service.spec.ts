import { TestBed } from '@angular/core/testing';

import { IndianMessageCamelService } from './indian-message-camel.service';

describe('IndianMessageCamelService', () => {
  let service: IndianMessageCamelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianMessageCamelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
