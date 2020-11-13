import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../credentials';


@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.sass']
})
export class UserCredentialsComponent implements OnInit {

  @Input() titre: string;
  @Input() submitLabel: string;

  @Output() readonly credentialsChange = new EventEmitter<Credentials>();

  credentialsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    const {email, required, minLength} = Validators;

    this.credentialsForm = this.fb.group({
      email: [ 'test@test.fr', [email, required]],
      password: [ 'test@test.fr', [minLength(8), required]],
    });
  }

  sendCredentials(): void {
    const {email, password} = this.credentialsForm.value;
    this.credentialsChange.emit({email, password});
  }
}
