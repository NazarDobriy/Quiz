import { Injectable } from '@angular/core';
import { switchMap, from, map, catchError, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as QuizzesActions from './actions';
import { IPaginationScheme, IQuiz, IQuizResult, QuizService } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class QuizzesEffects {
  public getQuizzes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizzesActions.getQuizzes),
      switchMap(() => {
        return from(this.quizService.getQuizzes()).pipe(
          map((quizzes: IQuiz[]) =>
            QuizzesActions.getQuizzesSuccess({ quizzes: quizzes })
          ),
          catchError((error: Error) =>
            of(QuizzesActions.getQuizzesFailure({ error: error.message }))
          )
        );
      })
    );
  });

  public getPaginationQuizzes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizzesActions.getPaginationQuizzes),
      switchMap((action: { offset: number; count: number; }) => {
        return from(this.quizService.getPaginatedQuizzes(action.offset, action.count)).pipe(
          map((paginationQuizzes: IPaginationScheme<IQuiz>) =>
            QuizzesActions.getPaginationQuizzesSuccess({ paginationQuizzes: paginationQuizzes })
          ),
          catchError((error: Error) =>
            of(QuizzesActions.getPaginationQuizzesFailure({ error: error.message }))
          )
        );
      })
    );
  });

  public getQuizzesResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizzesActions.getQuizzesResults),
      switchMap(() => {
        return from(this.quizService.getPassedQuizzes()).pipe(
          map((results: IQuizResult[]) =>
            QuizzesActions.getQuizzesResultsSuccess({ results: results })
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
