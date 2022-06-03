import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogService } from './providers/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'active/:id',
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
  ],
  providers: [
    QuizComponent,
    DialogService
  ]
})
export class ActiveQuizModule { }
