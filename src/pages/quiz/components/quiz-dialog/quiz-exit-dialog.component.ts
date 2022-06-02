import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IConfirmDialog } from '../../providers/dialog.service';

@Component({
  selector: 'app-quiz-exit-dialog',
  templateUrl: './quiz-exit-dialog.component.html'
})
export class QuizExitDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IConfirmDialog) {}

}
