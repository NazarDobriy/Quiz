import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IQuiz } from 'src/pages/quizzes/providers/quiz.service';
import * as QuizActions from '../../pages/quizzes/store/quiz/actions';
import * as QuizSelectors from '../../pages/quizzes/store/quiz/selectors';

@Injectable()
export class QuizStoreService {
  public quiz$: Observable<IQuiz> = this.store.select(QuizSelectors.selectQuiz);
  public quizError$: Observable<string | null> = this.store.select(QuizSelectors.selectErrorQuiz);
  public isLoadingQuiz$: Observable<boolean> = this.store.select(QuizSelectors.selectIsLoadingQuiz);

  constructor(private store: Store) { }

  public getQuiz(id: number): void {
    this.store.dispatch(QuizActions.getQuiz({ id }));
  }
}
