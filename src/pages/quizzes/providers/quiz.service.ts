import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Duration } from 'src/models/duration';
import { QUIZ_CARDS, QUIZ_THEMES } from '../quiz-data';
import { IQuizTheme } from './theme.service';

export interface IAnswer {
  id: string;
  text: string;
}

export interface ISimpleQuiz {
  id: number;
  title: string;
  subtitle: string;
}

export interface IQuestion {
  name: string;
  answers: IAnswer[];
  correctAnswer: string;
}

export interface IQuiz extends ISimpleQuiz {
  group: string;
  questions: IQuestion[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public quizCards: IQuiz[] = QUIZ_CARDS;
  public quizThemes: IQuizTheme[] = QUIZ_THEMES;
  public duration: string = '';
  public correctAnswersAmount: number = 0;
  public completed: boolean = false;

  constructor(private router: Router) {}

  public getQuizzes(): IQuiz[] {
    return this.quizCards;
  }

  public getQuizById(id: number): IQuiz {
    return this.quizCards[id - 1];
  }

  private getCorrectAnswers(id: number): string[] {
    return this.quizCards[id - 1].questions.map((question: IQuestion) => question.correctAnswer);
  }

  private calcQuizResult(id: number, userAnswers: string[]): number {
    const correctAnswers: string[] = this.getCorrectAnswers(id);
    let amountCorrectAnswers: number = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        amountCorrectAnswers++;
      }
    }
    return amountCorrectAnswers;
  }

  public finishQuiz(id: number, answers: string[], duration: Duration): void {
    this.completed = true;
    this.duration = duration.toString();
    this.correctAnswersAmount = this.calcQuizResult(id, answers);
    this.router.navigateByUrl(`/quizzes/active/${id}/score`);
  }

  public getQuestionAnswersByIndex(id: number, index: number): string[] {
    return this.getQuizById(id)?.questions[index]?.answers.map((ans: IAnswer) => ans.text) || [];
  }

  public getQuestionNameByIndex(id: number, index: number): string {
    return this.getQuizById(id)?.questions[index]?.name || 'N/A';
  }

  public getAnswerByIndex(id: number, questionIndex: number, answerId: number): IAnswer {
    return this.getQuizById(id)?.questions[questionIndex]?.answers[answerId];
  }

}
