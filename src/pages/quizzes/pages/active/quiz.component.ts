import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, combineLatest } from 'rxjs';

import { SnackBarService } from './providers/snack-bar.service';
import { PlatformService } from '@a-core/providers/platform.service';
import { QuizStoreService } from '@a-core/providers/quiz-store.service';
import { Duration } from '@a-models/duration';
import { IAnswer } from '@a-pages/quizzes/types/quiz.type';
import { QuizService } from '@a-pages/quizzes/providers/quiz.service';
import { ThemeService } from '@a-pages/quizzes/providers/theme.service';
import { initialQuizTheme } from './consts/active-quiz.const';
import { initialQuiz } from '@a-pages/quizzes/consts/quizzes.const';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent implements OnInit {
  @HostListener('window:beforeunload')
  beforeunloadHandler(): boolean {
    return false;
  }

  currentQuiz = initialQuiz;
  isLoading$ = combineLatest([
    this.themeService.isLoadingThemes$,
    this.quizStoreService.isLoadingQuiz$,
  ]).pipe(map(item => item[0] || item[1]));
  personsIcons = {
    Mili: 'mili',
    Jake: 'jake',
    Steven: 'steven'
  };
  questionIndex = 0;
  quizId = 0;
  quizTheme = initialQuizTheme;
  timeStart!: Date;

  private userAnswersIds: string[] = [];
  private readonly MIN_AMOUNT_QUESTIONS = 1;

  get currentQuestionAnswers(): string[] {
    return this.currentQuiz?.questions[this.questionIndex]?.answers.map((ans: IAnswer) => ans.text) || [];
  }

  get currentQuestionName(): string {
    return this.currentQuiz?.questions[this.questionIndex]?.name || 'N/A';
  }

  get isLastQuestion(): boolean {
    return this.questionIndex + 1 === this.currentQuiz?.questions.length;
  }

  get isNextQuestionAvailable(): boolean {
    return this.questionCounter > this.currentQuiz.questions.length;
  }

  get isPrevQuestionAvailable(): boolean {
    return this.questionCounter > this.MIN_AMOUNT_QUESTIONS;
  }

  get questionCounter(): number {
    return this.questionIndex + 1;
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService,
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

  finishQuiz(): void {
    const emptyQuestionIndex = this.findUnansweredQuestionIndex();

    if (emptyQuestionIndex != null) {
      this.questionIndex = emptyQuestionIndex;
      this.snackBarService.open('Select the answer', 'X');
      return;
    }

    const duration: Duration = new Duration(this.timeStart, new Date());
    this.quizService.finishQuiz(this.currentQuiz, this.userAnswersIds, duration);
  }

  handleNextQuestion(): void {
    this.questionIndex++;
  }

  handlePrevQuestion(): void {
    this.questionIndex--;
  }

  radioSelect(optionIndex: number): void {
    this.userAnswersIds[this.questionIndex] = this.getAnswerByIndex(optionIndex).id;
  }

  private findUnansweredQuestionIndex(): number | null {
    for (let i = 0; i < this.currentQuiz.questions.length; i++) {
      if (this.userAnswersIds[i] === undefined) {
        return i;
      }
    }
    return null;
  }

  private getAnswerByIndex(id: number): IAnswer {
    return this.currentQuiz?.questions[this.questionIndex]?.answers[id];
  }

  private async setTheme(): Promise<void> {
    await this.themeService.setThemes();
    this.quizTheme = this.themeService.getThemeByText(this.currentQuiz.subtitle);
  }

}
