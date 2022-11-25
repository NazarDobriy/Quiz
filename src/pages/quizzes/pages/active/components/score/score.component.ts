import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlatformService } from 'src/core/providers/platform.service';
import { QuizzesStoreService } from 'src/core/providers/quizzes-store.service';
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

  public quizzes$: Observable<IQuiz[]> = this.quizzesStoreService.quizzes$;
  public isLoadingQuizzes$: Observable<boolean> = this.quizzesStoreService.isLoadingQuizzes$;
  public quizzesError$: Observable<string | null> = this.quizzesStoreService.quizzesError$;

  public quizzesResults$: Observable<IQuizResult[]> = this.quizzesStoreService.quizzesResults$;
  public isLoadingQuizzesResults$: Observable<boolean> = this.quizzesStoreService.isLoadingQuizzesResults$;
  public quizzesResultsError$: Observable<string | null> = this.quizzesStoreService.quizzesResultsError$;

  public currentQuizAnswers: IQuizResult = {
    answersLength: 0,
    correct: 0,
    seconds: 0
  };

  constructor(
    private router: Router,
    private quizService: QuizService,
    private quizzesStoreService: QuizzesStoreService,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);

    if (this.platformService.isBrowser) {
      this.quizzesStoreService.getQuizzes();
      this.quizzesStoreService.getQuizzesResults();
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
