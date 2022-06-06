import { Component, Input, OnInit } from '@angular/core';
import { IQuiz } from '../../../../providers/quiz.service';
import { IQuizTheme, ThemeService } from '../../../../providers/theme.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html'
})
export class QuizCardComponent implements OnInit {
  @Input() quiz!: IQuiz;
  
  public theme!: IQuizTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme = this.themeService.getThemeByText(this.quiz.subtitle);
  }

}
