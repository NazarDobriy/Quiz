import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: ()=>import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'quizzes', loadChildren: ()=>import('../pages/quiz/quizzes.module').then(m => m.QuizzesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
