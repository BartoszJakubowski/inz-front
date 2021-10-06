import css from '@emotion/css';
import variables from 'theme/styles/vars';

export default css`
    html, body {
        @media all and (max-width: ${variables.desktopXL}) {
            font-size: 19px;
            .tablet, .mobile {
                display: none !important;
            }
            .desktop {
                display: block !important;
            }
        }

        @media all and (max-width: ${variables.desktopXL}) {
            font-size: 18px;
            .tablet, .mobile {
                display: none !important;
            }
            .desktop {
                display: block !important;
            }
        }

        @media all and (max-width: ${variables.desktopL}) {
            font-size: 17px;
        }

        @media all and (max-width: ${variables.desktopM}) {
            font-size: 16px;
        }

        @media all and (max-width: ${variables.desktopS}) {
            font-size: 15.5px;
        }

        @media all and (max-width: ${variables.desktopXS}) {
            font-size: 15px;
        }

        @media all and (max-width: ${variables.tabletL}) {
            font-size: 14.5px;
            .mobile, .desktop {
                display: none !important;
            }
            .tablet {
                display: block !important;
            }
        }

        @media all and (max-width: ${variables.tabletS}) {
            font-size: 14px;
        }

        @media all and (max-width: ${variables.mobileL}) {
            font-size: 13px;
            .tablet, .desktop {
                display: none !important;
            }
            .mobile {
                display: block !important;
            }
        }

        @media all and (max-width: ${variables.mobileM}) {
            font-size: 12.5px;
        }

        @media all and (max-width: ${variables.mobileS}) {
            font-size: 12px;
        }

        @media all and (max-width: ${variables.mobileXS}) {
            font-size: 11px;
        }
    }
`;
