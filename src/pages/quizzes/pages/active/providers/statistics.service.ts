import { Injectable } from '@angular/core';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class StatisticsService {
  private quizzes: IQuiz[] = [];
  private quizzesResults: IQuizResult[] = [];

  public initialize(quizzes: IQuiz[], results: IQuizResult[]): void {
    this.quizzes = quizzes;
    this.quizzesResults = results;
  }

  get amountPassedQuizzes(): number {
    return this.quizzesResults.length;
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
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      questionCounter += quizResult.answersLength;
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

  get generalSecondsDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return durationCounter;
  }

  get generalMinutesDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return Math.floor(durationCounter / 60);
  }

  get averageSecondsDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes);
  }

  get averageMinutesDuration(): number {
    let durationCounter: number = 0;
    this.quizzesResults.forEach((quizResult: IQuizResult) => {
      durationCounter += quizResult.seconds;
    });
    return Math.floor(durationCounter / this.amountPassedQuizzes / 60);
  }

}
