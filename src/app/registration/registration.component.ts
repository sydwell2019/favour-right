import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import * as Global from '../global';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group({
    username: [],
    firstName: [],
    lastName: [],
    emailAddress: [''],
    mobileNumber: ['', Validators.required],
    password: ['']
  });

  @Output() registrationEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {

  }

  onRegistrationSubmit() {
    console.log('formData' );
    console.log(this.registrationForm );
    console.log(this.registrationForm.value );
    this.apiService.doRegistration(this.registrationForm.value).subscribe((result) => {
      this.registrationEvent.emit('login_success');
    });
  }

  recoverClick() {
    this.registrationEvent.emit('recover');
  }

  loginClick() {
    this.registrationEvent.emit('login');
  }
}

