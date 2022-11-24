import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesComponent } from './quizzes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { SkeletonQuizzesComponent } from './components/skeleton-quizzes/skeleton-quizzes.component';
import { SkeletonQuizCardComponent } from './components/skeleton-quiz-card/skeleton-quiz-card.component';
import { EffectsModule } from '@ngrx/effects';

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
