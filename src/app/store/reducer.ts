import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { paginationReducer } from './pagination/reducer';
import { quizzesReducer } from './quizzes/reducer';
import { resultsReducer } from './results/reducer';
import { IAppState } from './state';

export const reducers: ActionReducerMap<IAppState> = {
  quizzes: quizzesReducer,
  results: resultsReducer,
  pagination: paginationReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
