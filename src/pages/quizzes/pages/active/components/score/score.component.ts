import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IQuiz, IQuizResult, QuizService } from 'src/pages/quizzes/providers/quiz.service';
import { Environment } from 'src/utils';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit {
  private quizId: number = 0;
  private isLoadingQuiz: boolean = true;
  private isLoadingQuizAnswers: boolean = true;
  private isLoadingPassedQuizzes: boolean = true;
  private isLoadingQuizzes: boolean = true;

  public quizzesResults: IQuizResult[] = [];
  public quizzes: IQuiz[] = [];

  private currentQuiz: IQuiz = {
    group: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  public currentQuizAnswers: IQuizResult = {
    answersLength: 0,
    correct: 0,
    seconds: 0
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const env = new Environment(this.platformId);
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    if (env.isBrowser) {
      this.setQuizzes();
      this.setQuizById();
      this.setQuizAnswersById();
      this.setPassedQuizzes();
    }
  }

  private async setQuizById(): Promise<void> {
    this.currentQuiz = await this.quizService.getQuizById(this.quizId);
    this.isLoadingQuiz = false;
  }

  private async setQuizAnswersById(): Promise<void> {
    const tempQuizAnswers: IQuizResult | null = await this.quizService.getQuizAnswersById(this.quizId);
    if (tempQuizAnswers) {
      this.currentQuizAnswers = tempQuizAnswers;
    }
    this.isLoadingQuizAnswers = false;
  }

  private async setPassedQuizzes(): Promise<void> {
    this.quizzesResults = await this.quizService.getPassedQuizzes();
    this.isLoadingPassedQuizzes = false;
  }

  private async setQuizzes(): Promise<void> {
    this.quizzes = await this.quizService.getQuizzes();
    this.isLoadingQuizzes = false;
  }

  get amountPassedQuizzes(): number {
    return this.quizzesResults.length;
  }

  get questionsLength(): number {
    return this.currentQuiz.questions.length;
  }

  get isLoading(): boolean {
    return this.isLoadingQuiz && this.isLoadingQuizAnswers && this.isLoadingPassedQuizzes && this.isLoadingQuizzes;
  }

  get durationSeconds(): number {
    return this.currentQuizAnswers.seconds;
  }

  get durationMinutes(): number {
    return Math.floor(this.currentQuizAnswers.seconds / 60);
  }

  get score(): number {
    return this.currentQuizAnswers.correct;
  }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const env = new Environment(this.platformId);
    if (env.isBrowser) {
      const quizId: number = parseInt(route.params['id']);
      const quizResult: IQuizResult | null = await this.quizService.getQuizAnswersById(quizId);
      return !!quizResult;
    }
    return true;
  }

}
