import { Injectable } from '@angular/core';
import { switchMap, from, map, catchError, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as QuizzesActions from './actions';
import { IQuiz, QuizService } from 'src/pages/quizzes/providers/quiz.service';

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

  constructor(private actions$: Actions, private quizService: QuizService) {}
}
