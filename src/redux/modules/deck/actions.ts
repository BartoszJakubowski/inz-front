import {useDispatch} from 'react-redux';

import {ApiPaths} from '#constants/apiPaths';
import {reduxRequest} from '#services/api';
import {SHUFFLE} from './types';

export const useShuffleDeck = () => {
  const dispatch = useDispatch();

  return (params: {[key: string]: string | number}) =>
    dispatch(
      reduxRequest({
        method: 'GET',
        params,
        requestParams: params,
        reduxType: SHUFFLE,
        path: ApiPaths.ShuffleDeck,
      }),
    );
};
