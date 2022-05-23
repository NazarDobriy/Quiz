import { Component, OnInit } from '@angular/core';
import { CardTheme, ICard, QuizService } from './providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  public quizCards: ICard[] = this.quizService.quizCards;
  public cardThemes: CardTheme[] = this.quizService.cardThemes;
  public initialCards: ICard[] = this.quizCards;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  public loadCards(): void {
    this.quizCards = [...this.quizCards, ...this.quizService.getQuizzes()];
  }

}
