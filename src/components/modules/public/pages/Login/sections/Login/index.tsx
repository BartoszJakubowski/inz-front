import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ActionResponse } from 'types/redux/ActionResponse';
import { ListProps as ButtonListProps } from 'components/layout/Button';
import { submit as submitContact, SubmitParams } from 'store/modules/contact/actions';

import Component from './component';

export interface Props {
    headline: string;
    buttons?: ButtonListProps[];
    actions: {
        // submitContact: (params: SubmitParams) => Promise<ActionResponse>;
    };
}

Component.defaultProps = {
    buttons: [],
};

const mapDispatchToProps = (dispatch: Dispatch): object => {
    return {
        actions: {
            // submitContact: bindActionCreators<any, any>(submitContact, dispatch),
        },
    };
};

export default connect(null, mapDispatchToProps)(Component);
