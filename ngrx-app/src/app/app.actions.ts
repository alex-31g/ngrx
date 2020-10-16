import { createAction } from '@ngrx/store';

// =1= actions счетчика по увеличению, уменьшению и сбросу его значения
export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');