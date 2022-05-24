import { Component, OnInit } from '@angular/core';
import { ICardTheme, QuizService, IQuiz } from './providers/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  public quizCards!: IQuiz[];
  public cardThemes!: ICardTheme[];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizCards = this.quizService.quizCards;
    this.cardThemes = this.quizService.cardThemes;
  }

  public loadCards(): void {
    this.quizCards = [...this.quizCards, ...this.quizService.getQuizzes()];
  }

}
