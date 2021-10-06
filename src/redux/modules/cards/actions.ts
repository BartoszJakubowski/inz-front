import {useDispatch} from 'react-redux';

import {ApiPaths} from '#constants/apiPaths';
import {reduxRequest} from '#services/api';
import {DRAW} from './types';
import {withVariables} from '#helpers/querystring';

export const useDrawCard = () => {
  const dispatch = useDispatch();

  return (params: {[key: string]: string | number}) =>
    dispatch(
      reduxRequest({
        method: 'GET',
        params,
        requestParams: params,
        reduxType: DRAW,
        path: withVariables(ApiPaths.DrawCard, params),
      }),
    );
};
