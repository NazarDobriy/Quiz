import { Component, OnInit } from '@angular/core';
import { QuizService, IQuiz } from '../../providers/quiz.service';
import { IQuizTheme } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  public quizzes: IQuiz[] = [];
  public quizThemes: IQuizTheme[] = [];

  private isLoadingThemes: boolean = true;
  private isLoadingQuizzes: boolean = true;

  constructor(private quizService: QuizService) { }

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
    this.quizThemes = await this.quizService.getThemes();
    this.isLoadingThemes = false;
  }

  public loadCards(): void {
    this.quizzes = [...this.quizzes, ...this.quizzes];
  }

}
