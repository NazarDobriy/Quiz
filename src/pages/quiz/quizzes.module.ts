import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quizzes/quiz.component';
import { QuizService } from './providers/quiz.service';
import { DialogService } from './providers/dialog.service';
import { QuizListModule } from './quiz-list.module';
import { ActiveQuizModule } from './components/quizzes/active-quiz.module';


@NgModule({
  imports: [
    CommonModule,
    ActiveQuizModule,
    QuizListModule
  ],
  providers: [
    QuizService,
    QuizComponent,
    DialogService
  ]
})
export class QuizzesModule { }
