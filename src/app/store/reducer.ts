import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { quizReducer } from './quiz/reducer';
import { AppState } from './state';

export const reducers: ActionReducerMap<AppState> = {
  quiz: quizReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
