import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesComponent } from './quizzes.component';



@NgModule({
  declarations: [
    QuizzesComponent,
    QuizCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizListModule { }
