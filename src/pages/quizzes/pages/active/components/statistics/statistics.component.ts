import { Component, Input, OnChanges } from '@angular/core';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';
import { StatisticsService } from '../../providers/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  providers: [StatisticsService]
})
export class StatisticsComponent implements OnChanges {
  @Input() quizzesResults: IQuizResult[] = [];
  @Input() quizzes: IQuiz[] = [];

  constructor(public statisticsService: StatisticsService) { }

  ngOnChanges(): void {
    this.statisticsService.initialize(this.quizzes, this.quizzesResults);
  }

}
