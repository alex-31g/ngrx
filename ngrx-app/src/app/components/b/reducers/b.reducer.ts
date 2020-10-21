import { Action } from '@ngrx/store'
import { Tutorial } from '../models/b.model'
import * as TutorialActions from '../actions/b.actions'

// Section 1 - defining an initial or default state
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2 - this is our actual reducer. It takes in a state, which we're defining as a Tutorial type and we've optionally bound it to initialState. It also takes in the action from our /actions/b.actions file.
export function B_Reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3 - First, we use a switch to determine the type of action. In the case of adding a tutorial, we return the new state with the help of our newState() function. We're simply passing in the previous state in the first parameter, and then our action in the second.
		// In the event that the action.type does not match any cases, it will simply return the state, as provided in the first parameter of our reducer.
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
					console.log('ADD_TUTORIAL state', state)
					console.log('ADD_TUTORIAL action.payload', action.payload)
					console.log([...state, action.payload]);
					return [...state, action.payload];

				case TutorialActions.REMOVE_TUTORIAL:
					console.log('REMOVE_TUTORIAL state', state)
					console.log('REMOVE_TUTORIAL action.payload', action.payload)

					const index = action.payload;

					// ...state.slice(0, index) - вернет элементы с 0 включительно по index не включительно
					// ...state.slice(index + 1) - вернет элементы с (index + 1) включительно до конца
					// то-есть будут возвращены все исходные элементы, кроме index
					return [...state.slice(0, index), ...state.slice(index + 1)];

        default:
          return state;
    }
}
