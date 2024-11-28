import { TestBed } from '@angular/core/testing';

import { DoctauthguardService } from './doctauthguard.service';

describe('DoctauthguardService', () => {
  let service: DoctauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
