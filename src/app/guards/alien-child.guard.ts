import { CanActivateFn } from '@angular/router';

export const alienChildGuard: CanActivateFn = (route, state) => {
  return true;
};
