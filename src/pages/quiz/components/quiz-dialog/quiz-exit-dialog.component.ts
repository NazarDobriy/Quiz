import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-exit-dialog',
  templateUrl: './quiz-exit-dialog.component.html',
  styleUrls: ['./quiz-exit-dialog.component.scss']
})
export class QuizExitDialogComponent implements OnInit {
  public title: string = '';

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: string
  ) {}

  ngOnInit(): void {
    this.title = this.data;
  }

}
