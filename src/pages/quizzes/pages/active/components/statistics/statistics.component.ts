import { Component, Input, OnInit } from '@angular/core';
import { IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() passedQuizzes: IQuizResult[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get amountPassedQuizzes(): number {
    return this.passedQuizzes.length;
  }

}
