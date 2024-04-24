import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { alienChildGuard } from './alien-child.guard';

describe('alienChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alienChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
