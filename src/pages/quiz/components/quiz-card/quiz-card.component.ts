import { Component, Input } from '@angular/core';
import { IQuiz } from '../../providers/quiz.service';
import { IQuizTheme } from '../../providers/theme.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {
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
}
