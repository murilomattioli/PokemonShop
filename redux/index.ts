import { createStore } from 'redux';
import { ActionType, InitialStateProps } from './types';

const initialState: InitialStateProps  = {
  user: null,
  canReloadCart: null,
}

const rootReducer = (state = initialState, action: ActionType ): InitialStateProps => {
    switch (action.type) {
        case 'user/set':
            return { ...state, user: { ...action?.value } };
        case 'cart/reload':
            return { ...state, canReloadCart: action?.value };
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;
