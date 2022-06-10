import { Component, OnInit } from '@angular/core';
import { QuizService, IQuiz } from '../../providers/quiz.service';
import { IQuizTheme, ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  public quizzes: IQuiz[] = [];
  public quizThemes: IQuizTheme[] = [];

  private isLoadingThemes: boolean = true;
  private isLoadingQuizzes: boolean = true;

  constructor(
    private quizService: QuizService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.setThemes();
    this.setQuizzes();
  }

  get isLoading(): boolean {
    return this.isLoadingQuizzes && this.isLoadingThemes;
  }

  private async setQuizzes(): Promise<void> {
    this.quizzes = await this.quizService.getQuizzes();
    this.isLoadingQuizzes = false;
  }

  private async setThemes(): Promise<void> {
    this.quizThemes = await this.themeService.getThemes();
    this.themeService.themes = this.quizThemes;
    this.isLoadingThemes = false;
  }

  public async loadCards(): Promise<void> {
    const newQuizzes: IQuiz[] = await this.quizService.getQuizzes();
    this.quizzes = [...this.quizzes, ...newQuizzes];
  }

}
