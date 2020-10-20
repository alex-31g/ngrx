import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './a.actions';

export const initialState = 0;

// =2= reducer для обработки изменений значения счетчика на основе предоставленных action.
// reducer принимает два аргумента: предыдущее состояние (state) и действие (action). 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}