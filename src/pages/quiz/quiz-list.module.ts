import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from './quizzes.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent }
];


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    QuizzesComponent,
    QuizCardComponent
  ]
})
export class QuizListModule { }
