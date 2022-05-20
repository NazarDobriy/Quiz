import { Component, Input, OnInit } from '@angular/core';
import { IQuizCard } from '../../models/quiz-card.interface';

enum Colors {
  Success = "success",
  Error = "error",
  Accent = "accent",
  Bright = "bright",
  Warning = "warning",
  Lightblue = "lightblue"
}

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  @Input() currentCardColor: string = '';

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

  public circleProfileColor: string = '';
  public personName: string = '';

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
      tempQuizCard.title.color = "primary";
      tempQuizCard.subtitle.content = "Emoji Bands Quiz!";
      tempQuizCard.subtitle.color = "bright";
      tempQuizCard.iconSrc = formPath("Mili");
      this.circleProfileColor = Colors.Warning;
      this.personName = "Mili";
    }

    if (this.currentCardColor === Colors.Error) {
      tempQuizCard.title.color = "primary";
      tempQuizCard.subtitle.content = "Easter Emoji Quiz: Can You Get 100 Percent?";
      tempQuizCard.subtitle.color = "bright";
      tempQuizCard.iconSrc = formPath("Meg");
      this.circleProfileColor = Colors.Lightblue;
      this.personName = "Meg";
    }

    if (this.currentCardColor === Colors.Accent) {
      tempQuizCard.title.color = "secondary";
      tempQuizCard.subtitle.content = "London Underground & Tube Station Emoji Quiz";
      tempQuizCard.subtitle.color = "bright";
      tempQuizCard.iconSrc = formPath("Steven");
      this.circleProfileColor = Colors.Error;
      this.personName = "Steven";
    }

    if (this.currentCardColor === Colors.Bright) {
      tempQuizCard.title.color = "secondary";
      tempQuizCard.subtitle.content = "Trivia Quiz: Guess The WWE Star From The Emoji!";
      tempQuizCard.subtitle.color = "primary";
      tempQuizCard.iconSrc = formPath("Mili");
      this.circleProfileColor = Colors.Warning;
      this.personName = "Mili";
    }

    if (this.currentCardColor === Colors.Warning) {
      tempQuizCard.title.color = "secondary";
      tempQuizCard.subtitle.content = "What Emoji Am I? Quiz";
      tempQuizCard.subtitle.color = "primary";
      tempQuizCard.iconSrc = formPath("Steven");
      this.circleProfileColor = Colors.Error;
      this.personName = "Steven";
    }

    return tempQuizCard;
  }

}
