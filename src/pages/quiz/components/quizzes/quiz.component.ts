import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService, IQuizTheme } from '../../providers/theme.service';
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
    description: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  public quizTheme: IQuizTheme = {
    primaryTextClass: '',
    secondaryTextClass: '',
    secondaryActiveTextClass: '',
    numberTextClass: '',
    numberBackgroudClass: '',
    backgroudClass: '',
    btnsBackgroudClass: '',
    btnsTextClass: '',
    radioButtonColor: ''
  };

  public quizId: number = 0;
  public questionIndex: number = 0;
  public userAnswers: Map<number, string> = new Map();

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.currentQuiz = this.quizService.getQuizById(this.quizId);
    this.quizTheme = this.themeService.getThemeByText(this.currentQuiz.subtitle);
  }

  get questionCounter(): number {
    return this.questionIndex + 1;
  }

  get isPrevQuestionAvailable(): boolean {
    return this.questionCounter > this.MIN_AMOUNT_QUESTIONS;
  }

  get isNextQuestionAvailable(): boolean {
    return this.questionCounter <= this.MIN_AMOUNT_QUESTIONS;
  }

  get currentQuestionName(): string {
    return this.currentQuiz?.questions[this.questionIndex]?.name || 'N/A';
  }

  get currentQuestionAnswers(): string[] {
    return this.currentQuiz?.questions[this.questionIndex]?.answers || [];
  }

  get userSelectedAnswer(): string | null {
    return this.userAnswers.get(this.questionIndex) || null;
  }

  public handleNextQuestion(): void {
    if (this.isLastQuestion()) {
      console.log(this.quizService.calcQuizResult(this.quizId, this.userAnswers));
      return;
    }
    this.questionIndex++;
  }

  public handlePrevQuestion(): void {
    this.questionIndex--;
  }

  public onSelect(option: string): void {
    this.userAnswers.set(this.questionIndex, option);
  }

  public isLastQuestion(): boolean {
    return this.questionIndex + 1 === this.MAX_AMOUNT_QUESTIONS;
  }

  public allQuestionsCompleted(): boolean {
    return this.userAnswers.size === this.currentQuiz.questions.length;
  }

}
