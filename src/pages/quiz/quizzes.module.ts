import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesComponent } from './quizzes.component';
import { QuizComponent } from './components/quizzes/quiz.component';
import { QuizService } from './providers/quiz.service';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuizExitDialogComponent } from './components/quiz-dialog/quiz-exit-dialog.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent },
  { path: 'quiz/:id', component: QuizComponent }
];


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizCardComponent,
    QuizComponent,
    RadioButtonComponent,
    RadioGroupButtonComponent,
    QuizExitDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    QuizService
  ]
})
export class QuizzesModule { }
