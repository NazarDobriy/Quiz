import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IQuiz } from 'src/pages/quizzes/providers/quiz.service';
import * as QuizzesActions from '../../app/store/quizzes/actions';
import * as QuizzesSelectors from '../../app/store/quizzes/selectors';

@Injectable()
export class StoreService {
  public quizzes$: Observable<IQuiz[]> = this.store.select(QuizzesSelectors.selectQuizzes);
  public quizzesError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectError);
  public isLoadingQuizzes$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoading);

  constructor(private store: Store) { }

  public dispatchQuizzes(): void {
    this.store.dispatch(QuizzesActions.getQuizzes());
  }
}
