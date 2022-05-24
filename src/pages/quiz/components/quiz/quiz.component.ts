import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz, QuizService } from '../../providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quizId!: number;
  public quizzes!: IQuiz[];
  public currentQuiz!: IQuiz;
  public questionCounter: number = 1;
  public listAnswers!: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.currentQuiz = this.quizzes[this.quizId - 1];
    this.listAnswers = this.currentQuiz.listQuestions[this.questionCounter - 1].listAnswers;
    
    if (this.lastWordIncludeQuiz()) {
      const tempQuizSubtitle: string[] = this.currentQuiz.subtitle.split(' ');
      tempQuizSubtitle.pop();
      this.currentQuiz.subtitle = tempQuizSubtitle.join(' ');
    }
  }

  public lastWordIncludeQuiz(): boolean {
    const subtitleArray: string[] = this.currentQuiz.subtitle.split(' ');
    return subtitleArray[subtitleArray.length - 1].toLocaleLowerCase().includes('quiz')
  }

}
