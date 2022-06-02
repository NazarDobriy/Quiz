import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuizConfirmDialogComponent } from '../components/quiz-dialog/quiz-confirm-dialog.component';

export interface IConfirmDialog {
  title: string;
  message: string;
  dismissText: string;
  confirmText: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public dialogExitData: IConfirmDialog = {
    title: "Leave",
    message: "Are you sure you want to exit and cancel the quiz? Your answers will not be saved.",
    dismissText: "Back to quiz",
    confirmText: "Go on main page"
  };

  constructor(private dialog: MatDialog) { }

  public openExitDialog(): MatDialogRef<QuizConfirmDialogComponent> {
    return this.dialog.open(QuizConfirmDialogComponent, { data: this.dialogExitData });
  }

}
