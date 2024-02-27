import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: ()=>import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'quizzes', loadChildren: ()=>import('../pages/quizzes/quizzes.module').then(m => m.QuizzesModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
