import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-new',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  askForm = this.fb.group({
    username: [{value: 'ryrtyrt', 'disabled': true} ],
    firstName: ['check'],
    lastName: ['Samuel', Validators.required],
    password: ['']
  }, {username: [{'disabled': true}]});
  name = 'unknown';
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
  }

  profileUpdate() {

  }

  workOut() {
    this.askForm.get('lastName').setValue('maxWell');
    this.askForm.patchValue({firstName: 'now'});
    alert(' lastName ' + this.askForm.get('lastName').value);
  }

  onProfileSubmit() {
    alert(' lastName ' + this.askForm.get('lastName').value);
  }
}
