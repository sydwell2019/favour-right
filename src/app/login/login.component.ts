import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import * as Global from '../global';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['test', Validators.required],
    password: ['12345']
  });

  @Output() loginEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {

  }

  onLoginSubmit() {
    console.log('formData' );
    console.log(this.loginForm );
    console.log(this.loginForm.value );
    this.apiService.doLogin(this.loginForm.value).subscribe((result) => {
      this.loginEvent.emit('login_success');
    },
    (error) => {
      console.dir(error);
      alert ('error: ' + error.error);
    });
  }

  signUpClick() {
    this.loginEvent.emit('register');
  }

  recoverClick() {
    this.loginEvent.emit('recover');
  }
}
