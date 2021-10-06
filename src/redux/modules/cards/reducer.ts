import {ApiFlags} from '#constants/redux';
import {ActionResponseType} from '#types/redux/actionResponse';

import DrawedCards from '#models/DrawedCards';

import * as types from './types';

export type State = {
  data: DrawedCards | null;
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

export default function CardsReducer(
  state: State = initialState,
  action: ActionResponseType,
): any {
  switch (action.type) {
    case types.DRAW + ApiFlags.Init:
      return {
        ...state,
        data: null,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };

    case types.DRAW + ApiFlags.Success:
      return {
        ...state,
        //@ts-ignore
        data: new DrawedCards(action.payload),
        isLoaded: true,
        isLoading: false,
        isError: false,
      };

    case types.DRAW + ApiFlags.Fail:
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
