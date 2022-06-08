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
  public isLoading: boolean = true;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizThemes = this.quizService.quizThemes;
    this.getData();
  }

  private getData(): void {
    this.quizService.getQuizzes().subscribe((quizzes: IQuiz[]) => {
      this.quizzes = quizzes;
      this.isLoading = false;
    });
  }

  public loadCards(): void {
    this.quizzes = [...this.quizzes, ...this.quizzes];
  }

}
