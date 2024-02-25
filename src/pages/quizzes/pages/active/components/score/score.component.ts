import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { combineLatest, map, merge, Observable, of } from 'rxjs';

import { PlatformService } from '@a-core/providers/platform.service';
import { QuizStoreService } from '@a-core/providers/quiz-store.service';
import { QuizzesStoreService } from '@a-core/providers/quizzes-store.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent implements OnInit {
  durationText$ = this.quizStoreService.quizResultSeconds$.pipe(
    map((value) =>
      Math.floor(value / 60) > 0 ? `${value} min` : `${value} sec`
    )
  );

  isLoading$ = combineLatest([
    this.quizStoreService.isLoadingQuiz$,
    this.quizStoreService.isLoadingQuizResult$,
    this.quizzesStoreService.isLoadingQuizzes$,
    this.quizzesStoreService.isLoadingQuizzesResults$,
  ]).pipe(map((item) => item[0] || item[1] || item[2] || item[3]));

  quizzes$ = this.quizzesStoreService.quizzes$;
  quizResultScore$ = this.quizStoreService.quizResultScore$;
  quizQuestionsLength$ = this.quizStoreService.quizQuestionsLength$;
  quizzesResults$ = this.quizzesStoreService.quizzesResults$;

  private quizId = 0;

  constructor(
    private router: Router,
    private quizStoreService: QuizStoreService,
    private quizzesStoreService: QuizzesStoreService,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService
  ) {}

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);

    if (this.platformService.isBrowser) {
      this.quizStoreService.getQuiz(this.quizId);
      this.quizStoreService.getQuizResult(this.quizId);
      this.quizzesStoreService.getQuizzes();
      this.quizzesStoreService.getQuizzesResults();
    }
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const quizId: number = parseInt(route.params['id']);
    if (this.platformService.isBrowser) {
      this.quizStoreService.getQuizResult(quizId);
      return merge(
        this.quizStoreService.isLoadingQuizResult$,
        of(this.router.createUrlTree(['/']))
      );
    }
    return of(true);
  }
}
