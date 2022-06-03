import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { RadioGroupButtonComponent } from '../radio-group-button/radio-group-button.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  { 
    path: 'quiz/:id',
    canDeactivate: [QuizComponent],
    component: QuizComponent
  }
];


@NgModule({
  declarations: [
    QuizComponent,
    RadioButtonComponent,
    RadioGroupButtonComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class ActiveQuizModule { }
