import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogExit } from '../../providers/quiz.service';

@Component({
  selector: 'app-quiz-exit-dialog',
  templateUrl: './quiz-exit-dialog.component.html'
})
export class QuizExitDialogComponent implements OnInit {
  public dialogData!: IDialogExit;

  constructor(@Inject(MAT_DIALOG_DATA) private data: IDialogExit) {}

  ngOnInit(): void {
    this.dialogData = this.data;
  }

}
