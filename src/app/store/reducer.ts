import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { IAppState } from './state';
import { environment } from '@a-environments/environment';
import { quizReducer } from '@a-pages/quizzes/store/quiz/reducer';
import { quizzesReducer } from '@a-pages/quizzes/store/quizzes/reducer';

export const reducers: ActionReducerMap<IAppState> = {
  quiz: quizReducer,
  quizzes: quizzesReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
