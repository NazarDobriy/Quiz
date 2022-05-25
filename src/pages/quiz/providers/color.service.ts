import { Injectable } from '@angular/core';
import { QUIZ_THEMES } from '../quiz-data';

export interface IQuizTheme {
  questionClass: string;
  answerClass: string;
  answerActiveClass: string;
  numberBackgroudClass: string;
  totalNumberClass: string;
  backgroudClass: string;
  btnsBackgroudClass: string;
  btnsTextClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public quizThemes: IQuizTheme[] = QUIZ_THEMES;

  constructor() { }

  public calculateColor(text: string): number {
    let sum: number = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i);
    }
    return sum % this.quizThemes.length;
  }

  public getColorById(id: number = 0): IQuizTheme {
    return this.quizThemes[id];
  }

}
