import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html'
})

export class AskComponent implements OnInit {
  askForm = this.fb.group({
    username: [{value: 'Dummy Name', 'disabled': true} ],
    reward: [1],
    description: ['']
   // firstName: ['check'],
   // lastName: ['Samuel', Validators.required],
   // password: ['']
  });
  localDes:  [[string]];

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.localDes = this.apiService.getDescriptors();
  }

  onAskSubmit() {
    this.apiService.createFavour(this.askForm.value).subscribe((result) => {
      console.log(' onAskSubmit ');
      console.log(this.askForm.value);
    });
  }

  workOut() {
    this.askForm.get('lastName').setValue('maxWell');
    this.askForm.patchValue({firstName: 'now'});
   // alert(' lastName ' + this.askForm.get('lastName').value);
  }

  setOption(option) {
  //  alert('option ' + option);
  }
}
