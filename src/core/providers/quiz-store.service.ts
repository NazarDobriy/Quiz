import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';
import * as QuizActions from '../../pages/quizzes/store/quiz/actions';
import * as QuizSelectors from '../../pages/quizzes/store/quiz/selectors';

@Injectable()
export class QuizStoreService {
  public quiz$: Observable<IQuiz> = this.store.select(QuizSelectors.selectQuiz);
  public quizError$: Observable<string | null> = this.store.select(QuizSelectors.selectErrorQuiz);
  public isLoadingQuiz$: Observable<boolean> = this.store.select(QuizSelectors.selectIsLoadingQuiz);
  public quizQuestionsLength$: Observable<number> = this.store.select(QuizSelectors.selectQuizQuestionsLength);

  public quizResult$: Observable<IQuizResult | null> = this.store.select(QuizSelectors.selectQuizResult);
  public quizResultError$: Observable<string | null> = this.store.select(QuizSelectors.selectErrorQuizResult);
  public isLoadingQuizResult$: Observable<boolean> = this.store.select(QuizSelectors.selectIsLoadingQuizResult);
  public quizResultScore$: Observable<number> = this.store.select(QuizSelectors.selectQuizResultScore);
  public quizResultSeconds$: Observable<number> = this.store.select(QuizSelectors.selectQuizResultSeconds);

  constructor(private store: Store) { }

  public getQuiz(id: number): void {
    this.store.dispatch(QuizActions.getQuiz({ id }));
  }

  public getQuizResult(id: number): void {
    this.store.dispatch(QuizActions.getQuizResult({ id }));
  }
}
