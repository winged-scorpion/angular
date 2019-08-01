import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';

interface login {
  login: string;
  email: string;
}

@Component({
  selector: 'app-send-popup',
  templateUrl: './send-popup.component.html',
  styleUrls: ['./send-popup.component.scss']
})

export class SendPopupComponent implements OnInit {

  user: User = new User();
  loginForm: FormGroup;
  formErrors = {
    'name': '',
    'email': '',
    'send': ''
  };
  validationMessages = {
    'name': {
      'required': 'Обязательное поле.'
    },
    'email': {
      'required': 'Обязательное поле.',
      'pattern': 'Не правильный формат email адреса.'
    },
    'send': {
      'required': 'Обязательное поле.'
    }
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {

    this.loginForm = this.fb.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
      ]],
      'send': [this.user.send, [
        Validators.required
      ]]
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChange(data));
    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.loginForm) return;
    let form = this.loginForm;
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);
      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
