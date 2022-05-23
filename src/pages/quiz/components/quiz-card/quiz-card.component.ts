import { Component, Input, OnInit } from '@angular/core';
import { CardTheme, ICard } from '../../providers/quiz.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  @Input() card!: ICard;
  @Input() theme!: CardTheme;

  constructor() { }

  ngOnInit(): void {
  }

}
