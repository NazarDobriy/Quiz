import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonQuizzesComponent } from './components/skeleton-quizzes/skeleton-quizzes.component';
import { SkeletonQuizCardComponent } from './components/skeleton-quiz-card/skeleton-quiz-card.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesComponent } from './quizzes.component';
import { SharedModule } from '@a-shared/shared.module';

const routes: Routes = [
  { path: '', component: QuizzesComponent }
];


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizCardComponent,
    SkeletonQuizzesComponent,
    SkeletonQuizCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizListModule { }
