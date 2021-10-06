import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { HYDRATE, Context, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { serialize, deserialize } from 'json-immutable';

import { ActionResponse } from 'types/redux/ActionResponse'
import state, { initialState, State } from 'store/state';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers(state);

const reducer = (storeState: State, action: ActionResponse) => {
    if (action.type === HYDRATE) {
        return{
            ...storeState, // use previous state
            ...action.payload, // apply delta from hydration
        };
    } else {
        return combinedReducer(storeState, action);
    }
};

export const initStore = (context: Context): any => {
    return createStore(
        reducer,
        initialState,
        bindMiddleware([thunkMiddleware])
    );
};

export const wrapper = createWrapper<Store<State>>(initStore, {
    serializeState: nextState => typeof nextState === 'string'
        ? nextState
        : serialize(nextState),
    deserializeState: nextState => typeof nextState === 'string'
        ? deserialize(nextState)
        : nextState,
});