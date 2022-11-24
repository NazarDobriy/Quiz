import { Injectable } from '@angular/core';
import { from, map, catchError, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as ResultsActions from './actions';
import { IQuizResult, QuizService } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class ResultsEffects {
  public getResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ResultsActions.getResults),
      switchMap(() => {
        return from(this.quizService.getPassedQuizzes()).pipe(
          map((results: IQuizResult[]) =>
            ResultsActions.getResultsSuccess({ results: results })
          ),
          catchError((error: Error) =>
            of(ResultsActions.getResultsFailure({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private quizService: QuizService) {}
}
