import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesComponent } from './quizzes.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

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
    RouterModule.forChild(routes),
    AngularSvgIconModule
  ]
})
export class QuizListModule { }
