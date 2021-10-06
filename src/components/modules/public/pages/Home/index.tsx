import { NextPageContext } from 'next';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Props as SectionHeroProps } from 'components/modules/public/pages/Home/sections/Hero';

import { wrapper } from 'store';
import { State } from 'store/state';

import { Page } from 'locales/types/components';
import ListCollection from 'types/redux/ListCollection';
import { ActionResponse } from 'types/redux/ActionResponse';

// import UserEffect from 'models/UserEffect';

import { getLocale } from 'utils/locale'; 

import Component from './component';

// import { list as listEffects, ListParams as ListEffectsParams } from 'store/modules/userEffects/actions';

export interface Props {
    data: Page<PageContent>;
    // actions: {
    //     listEffects: (params: ListEffectsParams) => Promise<ActionResponse>;
    // }
    state: {
        // userEffects: ListCollection<UserEffect>
    };
}

export interface PageContent {
    hero: SectionHeroProps;
}

Component.getInitialProps = wrapper.getInitialPageProps(store => async ({ req, res, query }: NextPageContext) => {
    const locale = getLocale();

    // await store.dispatch(listEffects({ perPage: 999, promoted: true }) as any);
    
    return {
        data: locale.home,
    }
});

const mapStateToProps = (state: State): object => {
    return {
        state: {
            // userEffects: state.userEffects.list,
        },
    };
};

const mapDispatchToProps = (dispatch: Dispatch): object => {
    return {
        actions: {
            // listEffects: bindActionCreators<any, any>(listEffects, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
