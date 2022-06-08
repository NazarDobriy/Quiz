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

  private setQuizzes(): void {
    this.quizService.getQuizzes().subscribe((quizzes: IQuiz[]) => {
      this.quizzes = quizzes;
      this.isLoadingQuizzes = false;
    });
  }

  private setThemes(): void {
    this.quizService.getThemes().subscribe((themes: IQuizTheme[]) => {
      this.quizThemes = themes;
      this.isLoadingThemes = false;
    })
  }

  public loadCards(): void {
    this.quizzes = [...this.quizzes, ...this.quizzes];
  }

}
