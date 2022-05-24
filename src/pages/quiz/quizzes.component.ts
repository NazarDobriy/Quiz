import { Component, HostListener, OnInit } from '@angular/core';
import { ICardTheme, QuizService, IQuiz } from './providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  readonly MAX_CARDS_IN_ROW: number = 5;
  public quizCards!: IQuiz[];
  public cardThemes!: ICardTheme[];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizCards = this.quizService.quizCards;
    this.cardThemes = this.quizService.cardThemes;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    if(window.innerWidth < 1400) {
      const separators: NodeListOf<HTMLElement> = document.querySelectorAll('.separator');
      separators.forEach((separator: HTMLElement) => {
        separator.style.display = 'none';
      });
    }
  }

  public loadCards(): void {
    this.quizCards = [...this.quizCards, ...this.quizService.getQuizzes()];
  }

  public isFullCardsRow(index: number = 0): boolean {
    return (index + 1) % this.MAX_CARDS_IN_ROW === 0;
  }

}
