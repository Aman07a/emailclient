import { Injectable } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Email } from './email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve: ResolveFn<Email | any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Email> | Promise<Email> | Email => {
    const emailId = route.params['id'];
    return this.emailService.getEmail(emailId).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');

        return EMPTY;
      })
    );
  };
}
