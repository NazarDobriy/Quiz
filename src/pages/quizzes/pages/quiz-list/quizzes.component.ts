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

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.quizCards;
    this.quizThemes = this.quizService.quizThemes;
  }

  public loadCards(): void {
    this.quizzes = [...this.quizzes, ...this.quizService.getQuizzes()];
  }

}
