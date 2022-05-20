import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
  public cardsColors: string[] = [
    "success",
    "error",
    "accent",
    "bright",
    "warning"
  ];

  public counterCardRows: number = 2;

  public numSequence(n: number): Array<number> {
    return Array(n);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
