import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class CreateAccountComponent implements OnInit {
  namesGroup: FormGroup;
  userGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.namesGroup = this.formBuilder.group({
      firstName: ['', [
        Validators.required
      ]],
      secondName: ['', [
        Validators.required
      ]]
    });

    this.userGroup = this.formBuilder.group({
      userName: ['', [
        Validators.required
      ]],
      passwordName: ['', [
        Validators.required
      ]]
    });
  }

}
