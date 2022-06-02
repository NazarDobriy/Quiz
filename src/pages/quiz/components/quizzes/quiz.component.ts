import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService, IQuizTheme } from '../../providers/theme.service';
import { IQuiz, QuizService } from '../../providers/quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { QuizExitDialogComponent } from '../quiz-dialog/quiz-exit-dialog.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  readonly MIN_AMOUNT_QUESTIONS: number = 1;

  public currentQuiz: IQuiz = {
    group: '',
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
    radioButtonColor: '',
    titleTextClass: '',
    iconSrc: '',
    personName: ''
  };

  public quizId: number = 0;
  public questionIndex: number = 0;
  public userAnswers: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService,
    private dialog: MatDialog
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
    return this.questionCounter > this.currentQuiz.questions.length;
  }

  get currentQuestionName(): string {
    return this.currentQuiz?.questions[this.questionIndex]?.name || 'N/A';
  }

  get currentQuestionAnswers(): string[] {
    return this.currentQuiz?.questions[this.questionIndex]?.answers || [];
  }

  get selectedAnswer(): string | null {
    return this.userAnswers[this.questionIndex] || null;
  }

  get isLastQuestion(): boolean {
    return this.questionIndex + 1 === this.currentQuiz.questions.length;
  }

  get allQuestionsCompleted(): boolean {
    return this.userAnswers.length === this.currentQuiz.questions.length;
  }

  public handleNextQuestion(): void {
    this.questionIndex++;
  }

  public handlePrevQuestion(): void {
    this.questionIndex--;
  }

  public onSelect(option: string): void {
    this.userAnswers[this.questionIndex] = option;
  }

  public finishQuiz(): void {
    console.log(this.quizService.calcQuizResult(this.quizId, this.userAnswers));
  }

  public openExitDialog(): void {
    this.dialog.open(QuizExitDialogComponent);
  }

}
