import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';

const routes: Routes = [
  { path: '', component: QuizComponent }
];


@NgModule({
  declarations: [
    QuizComponent,
    QuizCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizModule { }
