import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IQuizResult, IQuiz } from '@a-pages/quizzes/types/quiz.type';
import { StatisticsService } from '@a-pages/quizzes/pages/active/providers/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  providers: [StatisticsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {
  @Input() quizzes: IQuiz[] = [];
  @Input() quizzesResults: IQuizResult[] = [];

  questionStatistics: [number, number] = [0, 0];

  constructor(public statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.initialize(this.quizzes, this.quizzesResults);
    this.questionStatistics = [
      this.statisticsService.rightAnswersAmount,
      this.statisticsService.wrongAnswersAmount
    ];
  }

}
