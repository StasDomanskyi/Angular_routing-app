import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { alienGuard } from './alien.guard';

describe('alienGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alienGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
