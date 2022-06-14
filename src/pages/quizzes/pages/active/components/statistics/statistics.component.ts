import { Component, DoCheck, Input } from '@angular/core';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';
import { StatisticsService } from '../../providers/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements DoCheck {
  @Input() passedQuizzes: IQuizResult[] = [];
  @Input() quizzes: IQuiz[] = [];

  constructor(private statisticsService: StatisticsService) { }

  ngDoCheck(): void {
    this.statisticsService.quizzes = this.quizzes;
    this.statisticsService.passedQuizzes = this.passedQuizzes;
  }

  get amountPassedQuizzes(): number {
    return this.statisticsService.amountPassedQuizzes();
  }

  get amountQuizzes(): number {
    return this.statisticsService.amountQuizzes();
  }

  get quizzesQuestionAmount(): number {
    return this.statisticsService.quizzesQuestionAmount();
  }

  get passedQuizzesQuestionAmount(): number {
    return this.statisticsService.passedQuizzesQuestionAmount();
  }

  get rightAnswersAmount(): number {
    return this.statisticsService.rightAnswersAmount();
  }

  get wrongAnswersAmount(): number {
    return this.statisticsService.wrongAnswersAmount();
  }

  get generalSecondsDuration(): number {
    return this.statisticsService.generalSecondsDuration();
  }

  get generalMinutesDuration(): number {
    return this.statisticsService.generalMinutesDuration();
  }

  get averageSecondsDuration(): number {
    return this.statisticsService.averageSecondsDuration();
  }

  get averageMinutesDuration(): number {
    return this.statisticsService.averageMinutesDuration();
  }

}
