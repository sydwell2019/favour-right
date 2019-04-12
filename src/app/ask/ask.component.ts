import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html'
})

export class AskComponent implements OnInit {
  localDes:  [[string]] = [['dd']];

  askForm = this.fb.group({
    username: [{value: 'Dummy Name', 'disabled': true} ],
    reward: [1],
    favourType: [''],
    description: ['']
   // firstName: ['check'],
   // lastName: ['Samuel', Validators.required],
   // password: ['']
  });

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.localDes = this.apiService.getDescriptors();
    const items = this.askForm.get('items') as FormArray;
    items.push(this.fb.group({
      // name: '',
      // description: '',
      // price: ''
    }));
  }

  onAskSubmit() {
    console.log(' onAskSubmit ');
    this.apiService.createFavour(this.askForm.value).subscribe((result) => {
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
