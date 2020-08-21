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
  emailGroup: FormGroup;
  userGroup: FormGroup;
  passwordGroup: FormGroup;

  private _ifPasswordHasSpecialCharacter: boolean;
  private _ifPasswordHas8characters: boolean;
  private _ifPasswordHasNumber: boolean;
  private _ifPasswordAlright: boolean;

  constructor(private formBuilder: FormBuilder) {
    this._ifPasswordHasSpecialCharacter = false;
    this._ifPasswordHas8characters = false;
    this._ifPasswordHasNumber = false;
    this._ifPasswordAlright = false;
  }

  ngOnInit(): void {
    this.namesGroup = this.formBuilder.group({
      firstName: ['', [
        Validators.required
      ]],
      secondName: ['', [
        Validators.required
      ]]
    });

    this.emailGroup = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });

    this.userGroup = this.formBuilder.group({
      userName: ['', [
        Validators.required
      ]]
    });

    this.passwordGroup = this.formBuilder.group({
      passwordName: ['', [
        Validators.required
      ]]
    });
  }

  onPasswordType(event:any) {
    const currentPassword:string = event.target.value;
    const regNumber = new RegExp('[0-9]', 'i');
    const regSpecialCharacter = new RegExp('[!@#$%^&*()]', 'i');

    if (regNumber.test(currentPassword)) {
      this.setPasswordHasNumber(true);
    }

    if (currentPassword.length > 8) {
      this.setPasswordHas8characters(true);
    }

    if (regSpecialCharacter.test(currentPassword)) {
      this.setIfPasswordHasSpecialCharacter(true);
    }

    if (this.getIfPasswordHasSpecialCharacter() && this.getIfPasswordHas8characters() && this.getIfPasswordHasNumber()) {
      this.setPasswordAlright(true);
    }

  }

  sendUserData() {

  }

  /* getters */

  getIfPasswordHasSpecialCharacter():boolean {
    return this._ifPasswordHasSpecialCharacter;
  }

  getIfPasswordHas8characters():boolean {
    return this._ifPasswordHas8characters;
  }

  getIfPasswordHasNumber():boolean {
    return this._ifPasswordHasNumber;
  }

  getIfPasswordAlright():boolean {
    return this._ifPasswordAlright;
  }

  /* setters */

  setIfPasswordHasSpecialCharacter(ifOk):void {
    this._ifPasswordHasSpecialCharacter = ifOk;
  }

  setPasswordHas8characters(ifOk):void {
    this._ifPasswordHas8characters = ifOk;
  }

  setPasswordHasNumber(ifOk):void {
    this._ifPasswordHasNumber = ifOk;
  }

  setPasswordAlright(ifOk):void {
    this._ifPasswordAlright = ifOk;
  }

}
