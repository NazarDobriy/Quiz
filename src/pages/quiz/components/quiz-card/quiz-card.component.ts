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
    title: '',
    subtitle: '',
    iconSrc: '',
    theme: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.quizCard = this.defineCardByColor();
  }

  public defineCardByColor(): IQuizCard {
    const tempQuizCard: IQuizCard = {
      title: '',
      subtitle: '',
      iconSrc: '',
      theme: this.currentCardColor
    };
    
    const formPath = (name: string): string => { return `assets/img/${name}.png` };

    if (this.currentCardColor === Colors.Success) {
      tempQuizCard.title = "primary";
      tempQuizCard.subtitle = "bright";
      tempQuizCard.iconSrc = formPath("Mili");
    }

    if (this.currentCardColor === Colors.Error) {
      tempQuizCard.title = "primary"
      tempQuizCard.subtitle = "bright";
      tempQuizCard.iconSrc = formPath("Meg");
    }

    if (this.currentCardColor === Colors.Accent) {
      tempQuizCard.title = "secondary"
      tempQuizCard.subtitle = "bright";
      tempQuizCard.iconSrc = formPath("Steven");
    }

    if (this.currentCardColor === Colors.Bright) {
      tempQuizCard.title = "secondary"
      tempQuizCard.subtitle = "primary";
      tempQuizCard.iconSrc = formPath("Mili");
    }

    if (this.currentCardColor === Colors.Warning) {
      tempQuizCard.title = "secondary"
      tempQuizCard.subtitle = "primary";
      tempQuizCard.iconSrc = formPath("Steven");
    }

    return tempQuizCard;
  }

}
