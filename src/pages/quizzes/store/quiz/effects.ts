import { Injectable } from '@angular/core';
import { switchMap, from, map, catchError, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as QuizActions from './actions';
import { QuizService } from 'src/pages/quizzes/providers/quiz.service';
import { IQuiz, IQuizResult } from '../../types/quiz.type';

@Injectable()
export class QuizEffects {
  public getQuiz$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizActions.getQuiz),
      switchMap((action: { id: number }) => {
        return from(this.quizService.getQuizById(action.id)).pipe(
          map((quiz: IQuiz) => QuizActions.getQuizSuccess({ quiz })),
          catchError((error: Error) =>
            of(QuizActions.getQuizFailure({ error: error.message }))
          )
        );
      })
    );
  });

  public getQuizResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizActions.getQuizResult),
      switchMap((action: { id: number }) => {
        return from(this.quizService.getQuizResultById(action.id)).pipe(
          map((result: IQuizResult | null) =>
            QuizActions.getQuizResultSuccess({ result })
          ),
          catchError((error: Error) =>
            of(QuizActions.getQuizFailure({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private quizService: QuizService) {}
}
