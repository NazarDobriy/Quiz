import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { QuizzesApiService } from './quizzes-api.service';
import { IQuizTheme } from '@a-pages/quizzes/types/theme.type';

@Injectable()
export class ThemeService {
  isLoadingThemes$ = new BehaviorSubject<boolean>(true);
  private themes: IQuizTheme[] = [];

  constructor(private quizzesApiService: QuizzesApiService) {}

  getThemeByText(text: string): IQuizTheme {
    return this.getThemeById(this.calculateTheme(text));
  }

  async setThemes(): Promise<void> {
    this.themes = await this.quizzesApiService.getAllQuizThemes();
    this.isLoadingThemes$.next(false);
  }

  private calculateTheme(text: string): number {
    return (
      text.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) %
      this.themes.length
    );
  }

  private getThemeById(id: number): IQuizTheme {
    return this.themes[id];
  }
}
