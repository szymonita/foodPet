import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginErrorMessageDialog } from '../../dialogs/login-error-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  enterApp() {
    const login = 'szymon@pl.pl';
    const password = '1234';
    const form = this.loginForm.value;

    if (login != form.email || password != form.password) {
      this.openDialog("Wrong login or password.");
    }
  }

  openDialog(message: string) {
    this.dialog.open(LoginErrorMessageDialog, {
      width: '250px',
      data: { message: message }
    });
  }

  /* form getters */

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
