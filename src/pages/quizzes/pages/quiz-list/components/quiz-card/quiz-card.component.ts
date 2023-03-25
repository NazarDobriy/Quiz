import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IQuiz } from 'src/pages/quizzes/types/quiz.type';
import { IQuizTheme } from 'src/pages/quizzes/types/theme.type';
import { ThemeService } from '../../../../providers/theme.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizCardComponent implements OnInit {
  @Input() quiz!: IQuiz;

  public theme!: IQuizTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme = this.themeService.getThemeByText(this.quiz.subtitle);
  }

}
