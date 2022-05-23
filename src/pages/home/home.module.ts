import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from '../quiz/quizzes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quizzes', component: QuizzesComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
