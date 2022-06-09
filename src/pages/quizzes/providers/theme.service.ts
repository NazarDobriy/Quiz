import { Injectable } from '@angular/core';
import { QUIZ_THEMES } from '../quiz-data';

export interface IQuizTheme {
  primaryTextClass: string;
  secondaryTextClass: string;
  secondaryActiveTextClass: string;
  numberTextClass: string;
  numberBackgroundClass: string;
  backgroundClass: string;
  btnsBackgroundClass: string;
  btnsTextClass: string;
  radioButtonColor: string;
  titleTextClass: string;
  iconSrc: string;
  personName: string;
}

@Injectable()
export class ThemeService {
  public quizThemes: IQuizTheme[] = QUIZ_THEMES;

  constructor() { }

  public calculateTheme(text: string): number {
    let sum: number = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i);
    }
    return sum % this.quizThemes.length;
  }

  private getThemeById(id: number = 0): IQuizTheme {
    return this.quizThemes[id];
  }

  public getThemeByText(text: string): IQuizTheme {
    return this.getThemeById(this.calculateTheme(text));
  }

}
