import { Component, Input, OnInit } from '@angular/core';
import { ICardTheme, IQuiz } from '../../providers/quiz.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  @Input() card!: IQuiz;
  @Input() theme!: ICardTheme;

  constructor() { }

  ngOnInit(): void {
  }

}
