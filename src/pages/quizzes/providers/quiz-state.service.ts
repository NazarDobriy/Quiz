import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

import { selectQuiz, selectQuizzes } from 'src/app/store/quiz/selectors';
import { IQuiz } from './quiz.service';

@Injectable()
export class QuizStateService {
  quiz$: Promise<IQuiz> = firstValueFrom(this.store.select(selectQuiz));
  quizzes$: Promise<IQuiz[]> = firstValueFrom(this.store.select(selectQuizzes));

  constructor(private store: Store) { }
}
