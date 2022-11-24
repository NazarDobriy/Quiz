import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlatformService } from 'src/core/providers/platform.service';
import { StoreService } from 'src/core/providers/store.service';
import { IQuiz, IQuizResult, QuizService } from 'src/pages/quizzes/providers/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit {
  private quizId: number = 0;
  private isLoadingQuiz: boolean = true;
  private isLoadingQuizAnswers: boolean = true;

  private currentQuiz: IQuiz = {
    group: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  public quizzes$: Observable<IQuiz[]> = of([]);
  public isLoadingQuizzes$: Observable<boolean> = of(true);
  public quizzesError$: Observable<string | null> = of(null);

  public quizzesResults$: Observable<IQuizResult[]> = of([]);
  public isLoadingQuizzesResults$: Observable<boolean> = of(true);
  public quizzesResultsError$: Observable<string | null> = of(null);

  public currentQuizAnswers: IQuizResult = {
    answersLength: 0,
    correct: 0,
    seconds: 0
  };

  constructor(
    private router: Router,
    private quizService: QuizService,
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);

    if (this.platformService.isBrowser) {
      this.handleQuizzes();
      this.handlePassedQuizzes();
      this.setQuizById();
      this.setQuizAnswersById();
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

  private handleQuizzes(): void {
    this.isLoadingQuizzes$ = this.storeService.isLoadingQuizzes$;
    this.quizzesError$ = this.storeService.quizzesError$;
    this.quizzes$ = this.storeService.quizzes$;
    this.storeService.getQuizzes();
  }

  private handlePassedQuizzes(): void {
    this.isLoadingQuizzesResults$ = this.storeService.isLoadingQuizzesResults$;
    this.quizzesResultsError$ = this.storeService.quizzesResultsError$;
    this.quizzesResults$ = this.storeService.quizzesResults$;
    this.storeService.getQuizzesResults();
  }

  private async hasQuizAnswers(route: ActivatedRouteSnapshot): Promise<boolean> {
    const quizId: number = parseInt(route.params['id']);
    const quizResult: IQuizResult | null = await this.quizService.getQuizAnswersById(quizId);
    return !!quizResult;
  }

  get questionsLength(): number {
    return this.currentQuiz.questions.length;
  }

  get isLoading(): boolean {
    return this.isLoadingQuiz || this.isLoadingQuizAnswers;
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

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
    if (this.platformService.isBrowser) {
      return (await this.hasQuizAnswers(route)) || this.router.createUrlTree(['/']);
    }
    return true;
  }

}
