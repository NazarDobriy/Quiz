import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService, IQuizTheme } from '../../providers/theme.service';
import { IAnswer, IQuiz, QuizService } from '../../providers/quiz.service';
import { Duration } from 'src/models/duration';
import { map, Observable, combineLatest } from 'rxjs';
import { DialogService } from './providers/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SnackBarService } from './providers/snack-bar.service';
import { PlatformService } from 'src/core/providers/platform.service';
import { QuizStoreService } from 'src/core/providers/quiz-store.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    personName: ''
  };

  public quizId: number = 0;
  public questionIndex: number = 0;
  public timeStart!: Date;

  public personsIcons = {
    Mili: 'mili',
    Jake: 'jake',
    Steven: 'steven'
  };

  private userAnswersIds: string[] = [];

  public isLoading$: Observable<boolean> = combineLatest([
    this.themeService.isLoadingThemes$,
    this.quizStoreService.isLoadingQuiz$,
  ]).pipe(map(item => item[0] || item[1]));

  @HostListener('window:beforeunload')
  public beforeunloadHandler(): boolean {
    return false;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService,
    private platformService: PlatformService,
    private quizStoreService: QuizStoreService
  ) { }

  ngOnInit(): void {
    this.timeStart = new Date();
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.platformService.isBrowser) {
      this.quizStoreService.getQuiz(this.quizId);
      this.quizStoreService.quiz$.subscribe(quiz => this.currentQuiz = quiz);
      this.setTheme();
    }
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

  get selectedAnswer(): string | null {
    const answers: IAnswer[] = this.currentQuiz?.questions[this.questionIndex]?.answers;
    for (const answer of answers) {
      if (answer.id === this.userAnswersIds[this.questionIndex]) {
        return answer.text;
      }
    }
    return null;
  }

  get isLastQuestion(): boolean {
    return this.questionIndex + 1 === this.currentQuiz?.questions.length;
  }

  private findUnansweredQuestionIndex(): number | null {
    for (let i = 0; i < this.currentQuiz.questions.length; i++) {
      if (this.userAnswersIds[i] === undefined) {
        return i;
      }
    }
    return null;
  }

  private async setTheme(): Promise<void> {
    await this.themeService.setThemes();
    this.quizTheme = this.themeService.getThemeByText(this.currentQuiz.subtitle);
  }

  public handleNextQuestion(): void {
    this.questionIndex++;
  }

  public handlePrevQuestion(): void {
    this.questionIndex--;
  }

  public radioSelect(optionIndex: number): void {
    this.userAnswersIds[this.questionIndex] = this.getAnswerByIndex(optionIndex).id;
  }

  public finishQuiz(): void {
    const emptyQuestionIndex = this.findUnansweredQuestionIndex();

    if (emptyQuestionIndex != null) {
      this.questionIndex = emptyQuestionIndex;
      this.snackBarService.open('Select the answer', 'X');
      return;
    }

    const duration: Duration = new Duration(this.timeStart, new Date());
    this.quizService.finishQuiz(this.currentQuiz, this.userAnswersIds, duration);
  }

  private getAnswerByIndex(id: number): IAnswer {
    return this.currentQuiz?.questions[this.questionIndex]?.answers[id];
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
