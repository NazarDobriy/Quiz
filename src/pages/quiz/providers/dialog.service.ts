import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuizExitDialogComponent } from '../components/quiz-dialog/quiz-exit-dialog.component';
import { DIALOG_EXIT_DATA } from '../quiz-data';

export interface IDialogExit {
  title: string;
  message: string;
  textBack: string;
  textMainPage: string;
}

enum DialogExit {
  Leave = "Leave",
  Cancel = "Cancel"
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public dialogExitData: IDialogExit = DIALOG_EXIT_DATA;

  constructor(private dialog: MatDialog) { }

  public openExitDialog(screenWidth: number): MatDialogRef<QuizExitDialogComponent> {
    this.dialogExitData.title = screenWidth < 640 ? DialogExit.Cancel : DialogExit.Leave;
    return this.dialog.open(QuizExitDialogComponent, { data: this.dialogExitData });
  }

}
