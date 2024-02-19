import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './providers/quiz.service';
import { QuizListModule } from './pages/quiz-list/quiz-list.module';
import { ActiveQuizModule } from './pages/active/active-quiz.module';
import { ThemeService } from './providers/theme.service';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesApiService } from './providers/quizzes-api.service';
import { EffectsModule } from '@ngrx/effects';
import { QuizzesEffects } from './store/quizzes/effects';
import { QuizEffects } from './store/quiz/effects';

const routes: Routes = [
  {
    path: '', loadChildren: ()=>import('../quizzes/pages/quiz-list/quiz-list.module').then(m => m.QuizListModule)
  },
  {
    path: 'active/:id', loadChildren: ()=>import('../quizzes/pages/active/active-quiz.module').then(m => m.ActiveQuizModule)
  }
];


@NgModule({
  imports: [
    CommonModule,
    QuizListModule,
    ActiveQuizModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([QuizzesEffects, QuizEffects])
  ],
  providers: [
    QuizService,
    ThemeService,
    QuizzesApiService
  ]
})
export class QuizzesModule { }
