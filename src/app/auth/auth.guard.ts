import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { take, skipWhile, map, tap } from 'rxjs';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = (route, segments) => {
  const router: Router = new Router();

  return inject(AuthService).signedin$.pipe(
    skipWhile((value) => value === null),
    map((value) => !!value),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        router.navigate(['/']);
      }
    })
  );
};
