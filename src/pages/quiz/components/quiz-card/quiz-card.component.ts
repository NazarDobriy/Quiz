import { Component, Input, OnInit } from '@angular/core';
import { IQuizCard } from '../../models/quiz-card.interface';

enum Colors {
  Success = "success",
  Error = "error",
  Accent = "accent",
  Bright = "bright",
  Warning = "warning"
}

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  @Input() currentCardColor: string = "";

  public quizCard: IQuizCard = {
    title: {
      content: '',
      color: ''
    },
    subtitle: {
      content: '',
      color: ''
    },
    iconSrc: '',
    theme: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.quizCard = this.defineCardByColor();
  }

  public defineCardByColor(): IQuizCard {
    const tempQuizCard: IQuizCard = {
      title: {
        content: '10 Qusstions',
        color: ''
      },
      subtitle: {
        content: '',
        color: ''
      },
      iconSrc: '',
      theme: this.currentCardColor
    };
    
    const formPath = (name: string): string => { return `assets/img/${name}.png` };

    if (this.currentCardColor === Colors.Success) {
      tempQuizCard.subtitle.content = "Emoji Bands Quiz!";
      tempQuizCard.iconSrc = formPath("Mili");
    }

    if (this.currentCardColor === Colors.Error) {
      tempQuizCard.subtitle.content = "Easter Emoji Quiz: Can You Get 100 Percent?";
      tempQuizCard.iconSrc = formPath("Meg");
    }

    if (this.currentCardColor === Colors.Accent) {
      tempQuizCard.subtitle.content = "London Underground & Tube Station Emoji Quiz";
      tempQuizCard.iconSrc = formPath("Steven");
    }

    if (this.currentCardColor === Colors.Bright) {
      tempQuizCard.subtitle.content = "Trivia Quiz: Guess The WWE Star From The Emoji!";
      tempQuizCard.iconSrc = formPath("Mili");
    }

    if (this.currentCardColor === Colors.Warning) {
      tempQuizCard.subtitle.content = "What Emoji Am I? Quiz";
      tempQuizCard.iconSrc = formPath("Steven");
    }

    return tempQuizCard;
  }

}
