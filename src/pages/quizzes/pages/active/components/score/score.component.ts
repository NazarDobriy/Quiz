import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { merge, Observable, of } from 'rxjs';
import { PlatformService } from 'src/core/providers/platform.service';
import { QuizStoreService } from 'src/core/providers/quiz-store.service';
import { QuizzesStoreService } from 'src/core/providers/quizzes-store.service';
import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit {
  private quizId: number = 0;

  public quizQuestionsLength$: Observable<number> = this.quizStoreService.quizQuestionsLength$;
  public isLoadingQuiz$: Observable<boolean> = this.quizStoreService.isLoadingQuiz$;
  public quizError$: Observable<string | null> = this.quizStoreService.quizError$;

  public quizResult$: Observable<IQuizResult | null> = this.quizStoreService.quizResult$;
  public isLoadingQuizResult$: Observable<boolean> = this.quizStoreService.isLoadingQuizResult$;
  public quizResultError$: Observable<string | null> = this.quizStoreService.quizResultError$;

  public quizzes$: Observable<IQuiz[]> = this.quizzesStoreService.quizzes$;
  public isLoadingQuizzes$: Observable<boolean> = this.quizzesStoreService.isLoadingQuizzes$;
  public quizzesError$: Observable<string | null> = this.quizzesStoreService.quizzesError$;

  public quizzesResults$: Observable<IQuizResult[]> = this.quizzesStoreService.quizzesResults$;
  public isLoadingQuizzesResults$: Observable<boolean> = this.quizzesStoreService.isLoadingQuizzesResults$;
  public quizzesResultsError$: Observable<string | null> = this.quizzesStoreService.quizzesResultsError$;

  public currentQuizResult: IQuizResult = {
    answersLength: 0,
    correct: 0,
    seconds: 0
  };

  constructor(
    private router: Router,
    private quizStoreService: QuizStoreService,
    private quizzesStoreService: QuizzesStoreService,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);

    if (this.platformService.isBrowser) {
      this.quizStoreService.getQuiz(this.quizId);
      this.quizStoreService.getQuizResult(this.quizId);
      this.quizzesStoreService.getQuizzes();
      this.quizzesStoreService.getQuizzesResults();
      this.listenQuizResult();
    }
  }

  private listenQuizResult(): void {
    this.quizResult$.subscribe(quizResult => {
      if (quizResult) {
        this.currentQuizResult = quizResult;
      }
    });
  }

  get durationSeconds(): number {
    return this.currentQuizResult.seconds;
  }

  get durationMinutes(): number {
    return Math.floor(this.currentQuizResult.seconds / 60);
  }

  get score(): number {
    return this.currentQuizResult.correct;
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const quizId: number = parseInt(route.params['id']);
    if (this.platformService.isBrowser) {
      this.quizStoreService.getQuizResult(quizId);
      return merge(
        this.isLoadingQuizResult$,
        of(this.router.createUrlTree(['/']))
      );
    }
    return of(true);
  }

}
