import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesComponent } from './quizzes.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizService } from './providers/quiz.service';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent },
  { path: 'quiz/:id', component: QuizComponent }
];


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizCardComponent,
    QuizComponent,
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    QuizService
  ]
})
export class QuizzesModule { }
