import { Component, Input } from '@angular/core';
import { IQuiz } from '../../../../providers/quiz.service';
import { IQuizTheme, ThemeService } from '../../../../providers/theme.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html'
})
export class QuizCardComponent {
  @Input() quiz!: IQuiz;

  constructor(private themeService: ThemeService) {}

  get theme(): IQuizTheme {
    return this.themeService.getThemeByText(this.quiz.subtitle);
  }

}
