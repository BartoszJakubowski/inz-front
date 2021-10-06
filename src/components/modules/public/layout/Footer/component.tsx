import { FunctionComponent } from 'react';

import { Props } from './index';

import StyledComponent from './styles';
import LayoutContainer from 'components/layout/LayoutContainer';
import Logo from 'components/layout/Logo';

const PublicLayoutFooter: FunctionComponent<Props> = ({ footerAddress, footerContact, footerAbout, footerServices, footerTerms, footerSocials }) => ((
    <StyledComponent className="public-layout-footer" id="public-layout-footer">
        <div className="top">
            <LayoutContainer>
                <div className="logo">
                    <Logo/>
                </div>
            </LayoutContainer>
        </div>
        <div className="bottom">
            <LayoutContainer>
                <div className="bottom-left">
                    {footerAddress && Array.isArray(footerAddress.elements) && footerAddress.elements.length > 0 && (
                        <div className="col col-address">
                            {footerAddress.elements.map(elem => (
                                <span className="elem address-elem" key={elem.key}>{elem.text}</span>
                            ))}
                        </div>
                    )}
                    {footerContact && Array.isArray(footerContact.elements) && footerContact.elements.length > 0 && (
                        <div className="col col-contact">
                            {footerContact.elements.map(elem => (
                                <span className="elem contact-elem" key={elem.key}>{elem.text}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="bottom-right">
                    <div className="about-services-wrapper">
                        {footerAbout && Array.isArray(footerAbout.elements) && footerAbout.elements.length > 0 && (
                            <div className="col col-about">
                                {footerAbout.elements.map(elem => (
                                    <a className="elem about-elem" key={elem.key} href={elem.href} target={elem.outgoing ? "_blank" : undefined}>{elem.text}</a>
                                ))}
                            </div>
                        )}
                        {footerServices && Array.isArray(footerServices.elements) && footerServices.elements.length > 0 && (
                            <div className="col col-services">
                                {footerServices.elements.map(elem => (
                                    <a className="elem service-elem" key={elem.key} href={elem.href} target={elem.outgoing ? "_blank" : undefined}>{elem.text}</a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="terms-socials-wrapper">
                        {footerTerms && Array.isArray(footerTerms.elements) && footerTerms.elements.length > 0 && (
                            <div className="col col-terms">
                                {footerTerms.elements.map(elem => (
                                    <a 
                                        className="elem terms-elem" 
                                        key={elem.key} 
                                        href={elem.href} 
                                        target={elem.outgoing ? "_blank" : undefined} 
                                    >
                                        {elem.text}
                                    </a>
                                ))}
                            </div>
                        )}
                        {footerSocials && Array.isArray(footerSocials.elements) && footerSocials.elements.length > 0 && (
                            <div className="col col-socials">
                                {footerSocials.elements.map(elem => (
                                    <a className="elem socials-elem" key={elem.key} href={elem.href} target="_blank"><img src={elem.icon}/></a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </LayoutContainer>
        </div>
        <div className="super-bottom">
            <LayoutContainer>
                <p className="copyright">
                © 2021 SoccerScores. Wszystkie prawa zastrzeżone.
                </p>
            </LayoutContainer>
        </div>
    </StyledComponent>
));

export default PublicLayoutFooter;