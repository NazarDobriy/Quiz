import { Injectable } from '@angular/core';
import { CARDTHEMES, QUIZCARDS } from '../quiz-data';

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
  public cardThemes: ICardTheme[] = CARDTHEMES;

  constructor() { }

  public getQuizzes(): IQuiz[] {
    return this.quizCards;
  }

}
