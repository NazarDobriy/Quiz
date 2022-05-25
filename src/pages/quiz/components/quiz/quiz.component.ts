import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz, QuizService } from '../../providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  readonly MIN_AMOUNT_QUESTIONS: number = 1;
  readonly MAX_AMOUNT_QUESTIONS: number = 10;

  public currentQuiz: IQuiz = {
    name: '',
    listQuestions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  public quizId: number = 0;
  public quizzes: IQuiz[] = [];
  public questionCounter: number = 1;
  public listAnswers: string[] = [];

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

  get currentQuestionName(): string {
    return this.currentQuiz?.listQuestions[this.questionCounter - 1]?.name || 'N/A';
  }

  get currentQuestionAnswers(): string[] {
    return this.currentQuiz?.listQuestions[this.questionCounter - 1]?.listAnswers || [];
  }

  set fillAnswers(answers: string[]) {
    this.listAnswers = answers;
  }

  public lastWordIncludeQuiz(): boolean {
    const subtitleArray: string[] = this.currentQuiz.subtitle.split(' ');
    return subtitleArray[subtitleArray.length - 1].toLocaleLowerCase().includes('quiz');
  }

  public nextQuestion(): void {
    this.questionCounter++;
    this.fillAnswers = this.currentQuiz.listQuestions[this.questionCounter - 1].listAnswers;
  }

  public prevQuestion(): void {
    this.questionCounter--;
    this.fillAnswers = this.currentQuiz.listQuestions[this.questionCounter - 1].listAnswers;
  }

}
