import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pages/active/quiz.component';

const routes: Routes = [
  {
    path: '/', loadChildren: ()=>import('../quizzes/pages/quiz-list/quiz-list.module').then(m => m.QuizListModule)
  },
  {
    path: '/active/:id',
    canDeactivate: [QuizComponent],
    loadChildren: ()=>import('../quizzes/pages/active/active-quiz.module').then(m => m.ActiveQuizModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
