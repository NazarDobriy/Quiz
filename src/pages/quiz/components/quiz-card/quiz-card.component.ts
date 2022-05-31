import { Component, Input, OnInit } from '@angular/core';
import { IQuiz } from '../../providers/quiz.service';
import { IQuizTheme, ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  @Input() quiz: IQuiz = {
    group: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };
  @Input() theme: IQuizTheme = {
    primaryTextClass: '',
    secondaryTextClass: '',
    secondaryActiveTextClass: '',
    numberTextClass: '',
    numberBackgroudClass: '',
    backgroudClass: '',
    btnsBackgroudClass: '',
    btnsTextClass: '',
    radioButtonColor: '',
    titleTextClass: '',
    iconSrc: '',
    personName: ''
  };

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme = this.themeService.getThemeByText(this.quiz.subtitle);
  }

}
