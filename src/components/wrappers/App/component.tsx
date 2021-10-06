import { Component, ReactNode } from 'react';

import { Props } from './index';

import StyledComponent from './styles';
import WrapperPublic from 'components/wrappers/Public';

import InternetConnectionIndicator from 'components/layout/InternetConnectionIndicator';

export default class WrapperApp extends Component<Props> {
    static defaultProps = {
        children: null,
    };

    render = (): ReactNode => {
        const { children } = this.props;

        return (
            <StyledComponent className="wrapper-app">
                <InternetConnectionIndicator />
                <WrapperPublic>
                    {children}
                </WrapperPublic>
            </StyledComponent>
        );
    };
}
