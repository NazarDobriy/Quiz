import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogConfig } from '@a-pages/quizzes/pages/active/types/dialog.type';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogConfig,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  stay(): void {
    this.dialogRef.close(false);
  }

  exit(): void {
    this.dialogRef.close(true);
  }
}
