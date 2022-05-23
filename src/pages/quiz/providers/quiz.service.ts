import { Injectable } from '@angular/core';

export interface CardTheme {
  titleClass: string;
  subtitleClass: string;
  iconSrc: string;
  backgroudClass: string;
}

export interface ICard {
  id?: number;
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public quizCards: ICard[] = [
    {
      id: 1,
      title: '10 Qusstions',
      subtitle: 'Emoji Bands Quiz!'
    },
    {
      id: 2,
      title: '10 Qusstions',
      subtitle: 'Easter Emoji Quiz: Can You Get 100 Percent?'
    },
    {
      id: 3,
      title: '10 Qusstions',
      subtitle: 'London Underground & Tube Station Emoji Quiz'
    },
    {
      id: 4,
      title: '10 Qusstions',
      subtitle: 'Trivia Quiz: Guess The WWE Star From The Emoji!'
    },
    {
      id: 5,
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

  public getQuizzes(): ICard[] {
    return this.quizCards;
  }

}
