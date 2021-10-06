import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers, { initialState } from '#redux/state';

export default function () {
    return createStore(
        combineReducers({ ...reducers }),
        initialState,
        ...[applyMiddleware(thunk)],
    );
}
