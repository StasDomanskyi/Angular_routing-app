import { CanActivateFn } from '@angular/router';

export const alienGuard: CanActivateFn = (route, state) => {
  return true;
};
