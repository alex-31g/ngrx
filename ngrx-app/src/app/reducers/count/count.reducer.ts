export const countNode = 'count';

// модель 
export interface CountState {
	count: number;
	updatedAt: number;
}

// начальное значение состояния
const initialState: CountState = {
	count: 0,
	updatedAt: Date.now()
}

export const countReducer = (state = initialState, action) => {
	return state;
}