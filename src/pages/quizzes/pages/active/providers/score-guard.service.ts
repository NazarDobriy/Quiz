import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { QuizStoreService } from '@a-core/providers/quiz-store.service';

@Injectable()
export class ScoreGuardService {
  constructor(
    private router: Router,
    private quizStoreService: QuizStoreService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const quizId = parseInt(route.params['id']);
    this.quizStoreService.getQuizResult(quizId);

    return this.quizStoreService.quizResult$.pipe(
      map((res) => {
        if (res === null) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
