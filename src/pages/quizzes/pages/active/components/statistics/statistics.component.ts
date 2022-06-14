import { Component, Input } from '@angular/core';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent {
  @Input() passedQuizzes: IQuizResult[] = [];
  @Input() quizzes: IQuiz[] = [];

  constructor() { }

  get amountPassedQuizzes(): number {
    return this.passedQuizzes.length;
  }

  get amountQuizzes(): number {
    return this.quizzes.length;
  }

  get quizzesQuestionAmount(): number {
    let questionCounter: number = 0;
    this.quizzes.forEach((quiz: IQuiz) => {
      questionCounter += quiz.questions.length;
    });
    return questionCounter;
  }

  get passedQuizzesQuestionAmount(): number {
    let questionCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      questionCounter += quiz.answers.length;
    });
    return questionCounter;
  }

  get rightAnswersAmount(): number {
    let correctCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      correctCounter += quiz.correct;
    });
    return correctCounter;
  }

  get wrongAnswersAmount(): number {
    return this.passedQuizzesQuestionAmount - this.rightAnswersAmount;
  }

  get generalSecondsDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return durationCounter;
  }

  get generalMinutesDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return Math.floor(durationCounter / 60);
  }

  get averageSecondsDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes);
  }

  get averageMinutesDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes / 60);
  }

}
