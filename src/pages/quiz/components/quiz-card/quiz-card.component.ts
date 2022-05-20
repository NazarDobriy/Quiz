import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
