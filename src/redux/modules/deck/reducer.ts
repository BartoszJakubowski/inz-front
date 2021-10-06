import {ApiFlags} from '#constants/redux';
import {ActionResponseType} from '#types/redux/actionResponse';

import Deck from '#models/Deck';

import * as types from './types';

export type State = {
  data: Deck | null;
  isLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
};

export const initialState = {
  data: null,
  isLoaded: false,
  isLoading: false,
  isError: false,
};

export default function DeckReducer(
  state: State = initialState,
  action: ActionResponseType,
): any {
  switch (action.type) {
    case types.SHUFFLE + ApiFlags.Init:
      return {
        ...state,
        data: null,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };

    case types.SHUFFLE + ApiFlags.Success:
      return {
        ...state,
        //@ts-ignore
        data: new Deck(action.payload),
        isLoaded: true,
        isLoading: false,
        isError: false,
      };

    case types.SHUFFLE + ApiFlags.Fail:
      return {
        ...state,
        data: null,
        isLoading: false,
        isLoaded: true,
        isError: true,
      };

    default:
      return state;
  }
}
