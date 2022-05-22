import { Component, OnInit } from '@angular/core';
import { CardTheme, ICard } from './models/quiz-card.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
  public quizCards: ICard[] = [
    {
      title: '10 Qusstions',
      subtitle: 'Emoji Bands Quiz!'
    },
    {
      title: '10 Qusstions',
      subtitle: 'Easter Emoji Quiz: Can You Get 100 Percent?'
    },
    {
      title: '10 Qusstions',
      subtitle: 'London Underground & Tube Station Emoji Quiz'
    },
    {
      title: '10 Qusstions',
      subtitle: 'Trivia Quiz: Guess The WWE Star From The Emoji!'
    },
    {
      title: '10 Qusstions',
      subtitle: 'What Emoji Am I? Quiz'
    }
  ];

  public cardThemes: CardTheme[] = [
    {
      titleClass: 'text-primary',
      subtitleClass: 'text-bright',
      iconSrc: 'assets/img/Mili.svg',
      backgroudClass: 'bg-success'
    },
    {
      titleClass: 'text-primary',
      subtitleClass: 'text-bright',
      iconSrc: 'assets/img/Meg.svg',
      backgroudClass: 'bg-error'
    },
    {
      titleClass: 'text-secondary',
      subtitleClass: 'text-bright',
      iconSrc: 'assets/img/Steven.svg',
      backgroudClass: 'bg-accent'
    },
    {
      titleClass: 'text-secondary',
      subtitleClass: 'text-primary',
      iconSrc: 'assets/img/Mili.svg',
      backgroudClass: 'bg-bright'
    },
    {
      titleClass: 'text-secondary',
      subtitleClass: 'text-primary',
      iconSrc: 'assets/img/Steven.svg',
      backgroudClass: 'bg-warning'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
