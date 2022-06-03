import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './providers/quiz.service';
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizListModule } from './pages/quiz-list/quiz-list.module';
import { ActiveQuizModule } from './pages/active/active-quiz.module';
import { ThemeService } from './providers/theme.service';


@NgModule({
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    QuizListModule,
    ActiveQuizModule
  ],
  providers: [
    QuizService,
    ThemeService
  ]
})
export class QuizzesModule { }
