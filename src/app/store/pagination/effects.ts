import { Injectable } from '@angular/core';
import { mergeMap, from, map, catchError, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as PaginationActions from './actions';
import { IPaginationScheme, IQuiz, QuizService } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class PaginationEffects {
  public getPaginationQuizzes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PaginationActions.getPaginationQuizzes),
      switchMap((action: { offset: number; count: number; }) => {
        return from(this.quizService.getPaginatedQuizzes(action.offset, action.count)).pipe(
          map((paginationQuizzes: IPaginationScheme<IQuiz>) =>
            PaginationActions.getPaginationQuizzesSuccess({ paginationQuizzes: paginationQuizzes })
          ),
          catchError((error: Error) =>
            of(PaginationActions.getPaginationQuizzesFailure({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private quizService: QuizService) {}
}
