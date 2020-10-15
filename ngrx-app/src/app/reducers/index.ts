import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { countReducer, CountState, countNode } from './count/count.reducer';

// здесь описываем, что хранится в состоянии
export interface State {
	[countNode]: CountState;
}

// здесь добавляем свои редюсеры
export const reducers: ActionReducerMap<State> = {
	[countNode]: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
