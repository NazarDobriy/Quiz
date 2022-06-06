import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogService } from './providers/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score.component';
import { ScoreCounterComponent } from './components/score-counter/score-counter.component';

const routes: Routes = [
  { 
    path: '',
    canDeactivate: [QuizComponent],
    component: QuizComponent
  },
  {
    path: 'score',
    component: ScoreComponent
  }
];


@NgModule({
  declarations: [
    QuizComponent,
    RadioButtonComponent,
    RadioGroupButtonComponent,
    ConfirmDialogComponent,
    ScoreCounterComponent,
    ScoreComponent
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
