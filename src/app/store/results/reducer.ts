import { createReducer, on } from "@ngrx/store";

import * as ResultsActions from "./actions";
import { IResultsState, resultsInitialState } from "./state";

export const resultsReducer = createReducer(
  resultsInitialState,
  on(ResultsActions.getResults, (state): IResultsState => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(ResultsActions.getResultsSuccess, (state, action): IResultsState => {
    return {
      ...state,
      results: action.results,
      isLoading: false
    }
  }),
  on(ResultsActions.getResultsFailure, (state, action): IResultsState => {
    return  {
      ...state,
      error: action.error
    }
  })
);
