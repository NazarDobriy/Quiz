import { Injectable } from '@angular/core';

import { IQuiz, IQuizResult } from '@a-pages/quizzes/types/quiz.type';

@Injectable()
export class StatisticsService {
  private quizzes: IQuiz[] = [];
  private quizzesResults: IQuizResult[] = [];

  get amountPassedQuizzes(): number {
    return this.quizzesResults.length;
  }

  get amountQuizzes(): number {
    return this.quizzes.length;
  }

  get averageMinutesDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes / 60);
  }

  get averageSecondsDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes);
  }

  get generalMinutesDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return Math.floor(durationCounter / 60);
  }

  get generalSecondsDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return durationCounter;
  }

  get passedQuizzesQuestionAmount(): number {
    let questionCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      questionCounter += quizResult.answersLength;
    });
    return questionCounter;
  }

  get quizzesQuestionAmount(): number {
    let questionCounter: number = 0;
    this.quizzes.forEach((quiz: IQuiz) => {
      questionCounter += quiz.questions.length;
    });
    return questionCounter;
  }

  get rightAnswersAmount(): number {
    let correctCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      correctCounter += quizResult.correct;
    });
    return correctCounter;
  }

  get wrongAnswersAmount(): number {
    return this.passedQuizzesQuestionAmount - this.rightAnswersAmount;
  }

  initialize(quizzes: IQuiz[], results: IQuizResult[]): void {
    this.quizzes = quizzes;
    this.quizzesResults = results;
  }

}
