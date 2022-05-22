import { Component, Input, OnInit } from '@angular/core';
import { CardTheme, ICard } from '../../models/quiz-card.interface';

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
