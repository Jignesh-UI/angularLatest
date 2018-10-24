import { TestBed, inject } from '@angular/core/testing';

import { LvmService } from './lvm.service';

describe('LvmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LvmService]
    });
  });

  it('should be created', inject([LvmService], (service: LvmService) => {
    expect(service).toBeTruthy();
  }));
});
