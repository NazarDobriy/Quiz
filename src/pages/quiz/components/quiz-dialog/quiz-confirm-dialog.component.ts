import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IConfirmDialog } from '../../providers/dialog.service';

@Component({
  selector: 'app-quiz-confirm-dialog',
  templateUrl: './quiz-confirm-dialog.component.html'
})
export class QuizConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IConfirmDialog) {}

}
