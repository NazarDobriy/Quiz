import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IQuiz } from '@a-pages/quizzes/types/quiz.type';
import { IQuizTheme } from '@a-pages/quizzes/types/theme.type';
import { ThemeService } from '@a-pages/quizzes/providers/theme.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizCardComponent implements OnInit {
  @Input() quiz!: IQuiz;

  theme!: IQuizTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme = this.themeService.getThemeByText(this.quiz.subtitle);
  }

}
