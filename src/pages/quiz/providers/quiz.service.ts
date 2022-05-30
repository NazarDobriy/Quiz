import { Injectable } from '@angular/core';
import { CARD_THEMES, QUIZCARDS } from '../quiz-data';

export interface ICardTheme {
  titleClass: string;
  subtitleClass: string;
  iconSrc: string;
  backgroudClass: string;
}

export interface ISimpleQuiz {
  id: number;
  title: string;
  subtitle: string;
}

export interface IQuestion {
  name: string;
  listAnswers: string[];
  correctAnswer: string;
}

export interface IQuiz extends ISimpleQuiz {
  description: string;
  questions: IQuestion[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public quizCards: IQuiz[] = QUIZCARDS;
  public cardThemes: ICardTheme[] = CARD_THEMES;

  constructor() { }

  public getQuizzes(): IQuiz[] {
    return this.quizCards;
  }

  public getQuizById(id: number): IQuiz {
    return this.quizCards[id - 1];
  }

  private getCorrectAnswers(id: number): string[] {
    return this.quizCards[id - 1].questions.map((question: IQuestion) => question.correctAnswer);
  }

  public calcQuizResult(id: number, userAnswers: Map<number, string>): number {
    const correctAnswers: string[] = this.getCorrectAnswers(id);
    let amountCorrectAnswers: number = 0;
    for (let i = 0; i < this.getCorrectAnswers(id).length; i++) {
      if (userAnswers.has(i)) {
        if (userAnswers.get(i) === correctAnswers[i]) {
          amountCorrectAnswers++;
        }
      }
    }
    return amountCorrectAnswers;
  }

}
