import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { EmailService } from '../email.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email | any;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {
    this.email = route.snapshot.data['email'];
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit() {}
}
