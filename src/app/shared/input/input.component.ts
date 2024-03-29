import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string | any;
  @Input() control: FormControl | any;
  @Input() inputType: string | any;
  @Input() controlType = 'input';

  constructor() {}

  ngOnInit() {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
