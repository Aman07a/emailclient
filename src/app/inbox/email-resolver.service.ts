import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';

import { Email } from './email';

export const emailResolverService: ResolveFn<Email | any> = () => {
  return {
    id: 'dsfgdsf',
    subject: 'dsfgdsf',
    text: 'dsfgdsf',
    to: 'dsfgdsf',
    from: 'dsfgdsf',
    html: 'dsfgdsf',
  };
};
