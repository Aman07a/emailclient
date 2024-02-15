import { Injectable } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Email } from './email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService {
  constructor(private emailService: EmailService) {}

  resolve: ResolveFn<Email | any> = (
    route: ActivatedRouteSnapshot
  ): Observable<Email> | Promise<Email> | Email => {
    const emailId = route.params['id'];
    return this.emailService.getEmail(emailId);
  };
}
