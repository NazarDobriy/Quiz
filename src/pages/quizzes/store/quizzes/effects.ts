import { Injectable } from '@angular/core';
import { switchMap, from, map, catchError, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as QuizzesActions from './actions';
import { QuizService } from '@a-pages/quizzes/providers/quiz.service';
import { IQuiz, IPaginationScheme, IQuizResult } from '@a-pages/quizzes/types/quiz.type';

@Injectable()
export class QuizzesEffects {
  getQuizzes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizzesActions.getQuizzes),
      switchMap(() => {
        return from(this.quizService.getQuizzes()).pipe(
          map((quizzes: IQuiz[]) =>
            QuizzesActions.getQuizzesSuccess({ quizzes })
          ),
          catchError((error: Error) =>
            of(QuizzesActions.getQuizzesFailure({ error: error.message }))
          )
        );
      })
    );
  });

  getQuizzesScheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizzesActions.getQuizzesScheme),
      switchMap((action: { offset: number; count: number; }) => {
        return from(this.quizService.getPaginatedQuizzes(action.offset, action.count)).pipe(
          map((scheme: IPaginationScheme<IQuiz>) => QuizzesActions.getQuizzesSchemeSuccess({ scheme })
          ),
          catchError((error: Error) =>
            of(QuizzesActions.getQuizzesSchemeFailure({ error: error.message }))
          )
        );
      })
    );
  });

  getQuizzesResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizzesActions.getQuizzesResults),
      switchMap(() => {
        return from(this.quizService.getQuizzesResults()).pipe(
          map((results: IQuizResult[]) =>
            QuizzesActions.getQuizzesResultsSuccess({ results })
          ),
          catchError((error: Error) =>
            of(QuizzesActions.getQuizzesResultsFailure({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private quizService: QuizService) {}
}
