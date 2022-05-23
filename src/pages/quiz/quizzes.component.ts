import { Component, OnInit } from '@angular/core';
import { ICardTheme, QuizService, IQuiz } from './providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  public quizCards: IQuiz[] = this.quizService.quizCards;
  public cardThemes: ICardTheme[] = this.quizService.cardThemes;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  public loadCards(): void {
    this.quizCards = [...this.quizCards, ...this.quizService.getQuizzes()];
  }

}
