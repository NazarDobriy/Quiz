import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { quizzesReducer } from './quizzes/reducer';
import { IAppState } from './state';

export const reducers: ActionReducerMap<IAppState> = {
  quizzes: quizzesReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
