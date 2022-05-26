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
  name: string;
  listQuestions: IQuestion[];
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

  public getQuizById(id: number = 0): IQuiz {
    return this.quizCards[id - 1];
  } 

}
