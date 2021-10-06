import { HYDRATE } from 'next-redux-wrapper';

import * as types from './types';
import { INIT_FLAG, SUCCESS_FLAG, FAIL_FLAG } from 'consts/redux';
import User from 'models/User';

import { API_RESOURCE_ME } from 'consts/apiResources';

export interface State {
    authToken?: string;
    profile?: User;
}

export const initialState = {
    authToken: null,
    profile: null,
};

export default function UserReducer(state: State = initialState, action: any): any {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return { ...state, ...action.payload };

        case types.SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload?.authToken,
            };

        case types.LOGIN + '_' + INIT_FLAG:
            return {
                ...state,
                authToken: null,
            };
        case types.LOGIN + '_' + SUCCESS_FLAG:
        case types.PASSWORD_CHANGE + '_' + SUCCESS_FLAG:
            return {
                ...state,
                authToken: action.payload?.data?.authToken,
                profile: new User(action.payload?.data[API_RESOURCE_ME]),
            };

        case types.LOGIN + '_' + FAIL_FLAG:
            return {
                ...state,
                authToken: null,
            };

        case types.LOGOUT + '_' + SUCCESS_FLAG:
            return {
                ...state,
                authToken: null,
                profile: null,
            };
        case types.LOGOUT + '_' + FAIL_FLAG:
            return {
                ...state,
                authToken: null,
                profile: null,
            };

        case types.PROFILE_GET + '_' + SUCCESS_FLAG:
        case types.PROFILE_UPDATE + '_' + SUCCESS_FLAG:
            return {
                ...state,
                profile: new User(action.payload.data[API_RESOURCE_ME]),
            };

        default:
            return state;
    }
}
