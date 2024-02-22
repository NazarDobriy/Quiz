import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogService } from './providers/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score.component';
import { ScoreCounterComponent } from './components/score-counter/score-counter.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './providers/snack-bar.service';
import { SkeletonQuizComponent } from './components/skeleton-quiz/skeleton-quiz.component';
import { SharedModule } from '@a-shared/shared.module';
import { QuizGuardService } from './providers/quiz-guard.service';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [QuizGuardService],
    component: QuizComponent
  },
  {
    path: 'score',
    canActivate: [ScoreComponent],
    component: ScoreComponent
  }
];


@NgModule({
  declarations: [
    QuizComponent,
    RadioButtonComponent,
    RadioGroupButtonComponent,
    ConfirmDialogComponent,
    ScoreCounterComponent,
    ScoreComponent,
    StatisticsComponent,
    DoughnutChartComponent,
    SkeletonQuizComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    QuizComponent,
    ScoreComponent,
    DialogService,
    SnackBarService,
    QuizGuardService
  ]
})
export class ActiveQuizModule { }
