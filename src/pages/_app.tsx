import React from 'react';
import App, { AppInitialProps } from 'next/app';
import { Global } from '@emotion/core';
import { ToastContainer } from 'react-toastify';

import stylesScrollbar from 'theme/styles/scrollbar';
import stylesReset from 'theme/styles/reset';
import stylesGlobal from 'theme/styles/global';
import stylesBreakpoints from 'theme/styles/breakpoints';
import stylesToastify from 'theme/styles/toastify';

import { wrapper } from 'store';

import WrapperApp from 'components/wrappers/App';

class WrapperRoot extends App<AppInitialProps> {
    public static getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
            },
        };
    });

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Global
                    styles={[
                        stylesReset,
                        stylesGlobal,
                        stylesBreakpoints,
                        stylesToastify,
                        stylesScrollbar,
                    ]}
                />
                <ToastContainer
                    newestOnTop={true}
                    limit={2}
                />
                <WrapperApp {...pageProps}>
                    <Component {...pageProps} />
                </WrapperApp>
            </>
        );
    }
}

export default wrapper.withRedux(WrapperRoot);