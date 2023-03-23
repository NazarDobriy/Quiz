import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/types/quiz.type';
import { StatisticsService } from '../../providers/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  providers: [StatisticsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {
  @Input() quizzesResults: IQuizResult[] = [];
  @Input() quizzes: IQuiz[] = [];

  public questionStatistics: [number, number] = [0, 0];

  constructor(public statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.initialize(this.quizzes, this.quizzesResults);
    this.questionStatistics = [
      this.statisticsService.rightAnswersAmount,
      this.statisticsService.wrongAnswersAmount
    ];
  }

}
