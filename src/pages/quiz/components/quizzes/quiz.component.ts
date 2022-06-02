import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService, IQuizTheme } from '../../providers/theme.service';
import { IQuiz, QuizService } from '../../providers/quiz.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuizExitDialogComponent } from '../quiz-dialog/quiz-exit-dialog.component';
import { Duration } from 'src/models/duration';
import { Observable, of } from 'rxjs';

enum DialogExit {
  Leave = "Leave",
  Cancel = "Cancel"
}

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
  public timeStart!: Date;
  public screenWidth: number = window.innerWidth;
  public screenExit: string = DialogExit.Leave;

  @HostListener('window:resize')
  public onResize(): void {
    this.screenWidth = window.innerWidth;
    this.screenExit = this.screenWidth < 640 ?  DialogExit.Cancel : DialogExit.Leave;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.timeStart = new Date();
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
    const duration: Duration = new Duration(this.timeStart, new Date());
    this.quizService.finishQuiz(this.quizId, this.userAnswers, duration);
  }

  private openExitDialog(): MatDialogRef<QuizExitDialogComponent> {
    return this.dialog.open(QuizExitDialogComponent, {
      data: this.screenExit
    });
  }

  canDeactivate(): Observable<boolean> {
    return this.openExitDialog().afterClosed();
  }

}
