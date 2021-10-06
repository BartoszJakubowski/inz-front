import { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { Props } from './index';

import { getLocale } from 'utils/locale'; 
import * as ga from 'utils/ga';

import StyledComponent from './styles';
import Topbar from 'components/modules/public/layout/Topbar';
import Footer from 'components/modules/public/layout/Footer';

const WrapperPublic: FunctionComponent<Props> = ({ children }) => {
    const [isScrollTop, setIsScrollTop]: [boolean, Function]= useState(true);
    const [isMobileView, setIsMobileView]: [boolean, Function] = useState(false);
    const locale = getLocale();
    const router = useRouter();

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset === 0 && !isScrollTop) {
                setIsScrollTop(true)
            } else if(window.pageYOffset > 0 && isScrollTop) {
                setIsScrollTop(false)
            }
        }
        return () => (window.onscroll = null);
    }, [isScrollTop]);

    useEffect(() => {
        window.onresize = () => {
            if(window.innerWidth <= 1024 && !isMobileView) {
                setIsMobileView(true)
            } else if (window.innerWidth > 1024 && isMobileView) {
                setIsMobileView(false)
            }
        }
    }, [isMobileView]);

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)
    
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <StyledComponent className="wrapper-public">
            <Topbar
                main={locale.navigation.main} 
                side={locale.navigation.side}
            />
            <div className="wrapper-content">
                {children}
            </div>
            <Footer
                footerAddress={locale.navigation.footerAddress}
                footerContact={locale.navigation.footerContact}
                footerAbout={locale.navigation.footerAbout}
                footerServices={locale.navigation.footerServices}
                footerTerms={locale.navigation.footerTerms}
                footerSocials={locale.navigation.footerSocials}
            />
        </StyledComponent>
    )
};

export default WrapperPublic;