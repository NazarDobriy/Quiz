import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectQuiz } from 'src/app/store/quiz/selectors';
import { IQuiz } from './quiz.service';

@Injectable()
export class QuizStateService {
  quiz$: Observable<IQuiz> = this.store.select(selectQuiz);

  constructor(private store: Store) { }
}
