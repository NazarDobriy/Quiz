import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IQuizTheme } from '../types/theme.type';
import { QuizzesApiService } from './quizzes-api.service';

@Injectable()
export class ThemeService {
  public themes: IQuizTheme[] = [];
  public isLoadingThemes$ = new BehaviorSubject<boolean>(true);

  constructor(private quizzesApiService: QuizzesApiService) { }

  private getThemeById(id: number): IQuizTheme {
    return this.themes[id];
  }

  public async setThemes(): Promise<void> {
    this.themes = await this.quizzesApiService.getAllQuizThemes();
    this.isLoadingThemes$.next(false);
  }

  private calculateTheme(text: string): number {
    let sum: number = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i);
    }
    return sum % this.themes.length;
  }

  public getThemeByText(text: string): IQuizTheme {
    return this.getThemeById(this.calculateTheme(text));
  }

}
