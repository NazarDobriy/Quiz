import { Injectable } from '@angular/core';
import { QuizzesApiService } from './api.service';

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

  constructor(private quizzesApiService: QuizzesApiService) { }

  private getThemeById(themes: IQuizTheme[], id: number): IQuizTheme {
    return themes[id];
  }

  public getThemes(): Promise<IQuizTheme[]> {
    return this.quizzesApiService.getAllQuizThemes();
  }

  private calculateTheme(themes: IQuizTheme[], text: string): number {
    let sum: number = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i);
    }
    return sum % themes.length;
  }

  public getThemeByText(themes: IQuizTheme[], text: string): IQuizTheme {
    return this.getThemeById(themes, this.calculateTheme(themes, text));
  }

}
