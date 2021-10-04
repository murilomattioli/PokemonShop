import { createStore } from 'redux';
import { ActionType, InitialStateProps } from './types';

const initialState: InitialStateProps  = {
  user: null,
}

const rootReducer = (state = initialState, action: ActionType ): InitialStateProps => {
    switch (action.type) {
        //User
        case 'user/set':
            return { ...state, user: { ...action?.value } };
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;
