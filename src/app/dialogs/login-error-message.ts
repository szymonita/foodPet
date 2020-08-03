import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message: string
}

@Component({
  selector: 'login-error-message',
  templateUrl: 'login-error-message.html',
})
export class LoginErrorMessageDialog {

  constructor(
    public dialogRef: MatDialogRef<LoginErrorMessageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

}
