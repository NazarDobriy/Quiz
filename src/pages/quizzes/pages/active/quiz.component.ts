import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService, IQuizTheme } from '../../providers/theme.service';
import { IAnswer, IQuiz, QuizService } from '../../providers/quiz.service';
import { Duration } from 'src/models/duration';
import { Observable } from 'rxjs';
import { DialogService } from './providers/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
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
    numberBackgroundClass: '',
    backgroundClass: '',
    btnsBackgroundClass: '',
    btnsTextClass: '',
    radioButtonColor: '',
    titleTextClass: '',
    iconSrc: '',
    personName: ''
  };

  public quizId: number = 0;
  public questionIndex: number = 0;
  public timeStart!: Date;
  public isLoading: boolean = false;

  private userAnswersIndexes: number[] = [];
  private userAnswersIds: string[] = [];

  @HostListener('window:beforeunload')
  public beforeunloadHandler(): boolean {
    return false;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.timeStart = new Date();
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getData();
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
    return this.currentQuiz?.questions[this.questionIndex]?.answers.map((ans: IAnswer) => ans.text) || [];
  }

  get selectedAnswer(): number {
    return this.userAnswersIndexes[this.questionIndex];
  }

  get isLastQuestion(): boolean {
    return this.questionIndex + 1 === this.currentQuiz.questions.length;
  }

  get allQuestionsCompleted(): boolean {
    return this.userAnswersIndexes.length === this.currentQuiz.questions.length;
  }

  private async getData(): Promise<void> {
    this.currentQuiz = await this.quizService.getQuizById(this.quizId);
    this.isLoading = true;
  }

  public handleNextQuestion(): void {
    this.questionIndex++;
  }

  public handlePrevQuestion(): void {
    this.questionIndex--;
  }

  public onSelect(optionId: number): void {
    const params: [number, number, number] = [this.quizId, this.questionIndex, optionId];
    this.userAnswersIndexes[this.questionIndex] = optionId;
    this.userAnswersIds[this.questionIndex] = this.quizService.getAnswerByIndex(...params).id;
  }

  public finishQuiz(): void {
    const duration: Duration = new Duration(this.timeStart, new Date());
    this.quizService.finishQuiz(this.quizId, this.userAnswersIds, duration);
  }

  private openExitDialog(): MatDialogRef<ConfirmDialogComponent> {
    return this.dialogService.open({
      title: "Leave",
      message: "Are you sure you want to exit and cancel the quiz? Your answers will not be saved.",
      dismissText: "Back to quiz",
      confirmText: "Go on main page"
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.quizService.completed) {
      return true;
    }
    return this.openExitDialog().afterClosed();
  }

}
