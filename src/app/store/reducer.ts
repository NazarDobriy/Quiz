import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { quizReducer } from './quiz/reducer';
import { State } from './state';

export const reducers: ActionReducerMap<State> = {
  quiz: quizReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
