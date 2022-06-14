import { Injectable } from '@angular/core';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class StatisticsService {
  public quizzes: IQuiz[] = [];
  public passedQuizzes: IQuizResult[] = [];

  public amountPassedQuizzes(): number {
    return this.passedQuizzes.length;
  }

  public amountQuizzes(): number {
    return this.quizzes.length;
  }

  public quizzesQuestionAmount(): number {
    let questionCounter: number = 0;
    this.quizzes.forEach((quiz: IQuiz) => {
      questionCounter += quiz.questions.length;
    });
    return questionCounter;
  }

  public passedQuizzesQuestionAmount(): number {
    let questionCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      questionCounter += quiz.answers.length;
    });
    return questionCounter;
  }

  public rightAnswersAmount(): number {
    let correctCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      correctCounter += quiz.correct;
    });
    return correctCounter;
  }

  public wrongAnswersAmount(): number {
    return this.passedQuizzesQuestionAmount() - this.rightAnswersAmount();
  }

  public generalSecondsDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return durationCounter;
  }

  public generalMinutesDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return Math.floor(durationCounter / 60);
  }

  public averageSecondsDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes());
  }

  public averageMinutesDuration(): number {
    let durationCounter: number = 0;
    this.passedQuizzes.forEach((quiz: IQuizResult) => {
      durationCounter += quiz.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes() / 60);
  }

}
