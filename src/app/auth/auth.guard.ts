import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';
import { take, skipWhile, map } from 'rxjs';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = (route, segments) => {
  return inject(AuthService).signedin$.pipe(
    skipWhile((value) => value === null),
    map((value) => !!value),
    take(1)
  );
};
