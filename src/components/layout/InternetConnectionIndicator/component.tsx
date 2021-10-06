import { FunctionComponent, useState, useEffect } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Props, States } from './index';

import StyledComponent from './styles';
import LayoutContainer from 'components/layout/LayoutContainer';

const LayoutInternetConnectionIndicator: FunctionComponent<Props> = () => {
    const [isPanelVisible, setIsPanelVisible]: [boolean, Function] = useState(false);
    const [state, setState]: [States, Function] = useState(null);

    useEffect(() => {
        window.addEventListener('online', onSetOnline);
        window.addEventListener('offline', onSetOffline);

        return () => {
            window.removeEventListener('online', onSetOnline);
            window.removeEventListener('offline', onSetOffline);
        };
    }, []);

    const onSetOnline = () => {
        setIsPanelVisible(true);
        setState(States.Online);
        setTimeout(() => {
            setIsPanelVisible(false);
        }, 5000);
    }

    const onSetOffline = () => {
        setIsPanelVisible(true);
        setState(States.Offline);
    }

    if(!isPanelVisible) {
        return null;
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-internet-connection-indicator',
                `state-${state}`
            )}
        >
            <LayoutContainer>
                {state === States.Online && (
                    <div className="indicator-content">
                        <span className="indicator-text">
                            Połączenie internetowe przywrócone
                        </span>
                        <div className="indicator-icon">
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                    </div>
                )}
                {state === States.Offline && (
                    <div className="indicator-content">
                        <span className="indicator-text">
                            Połączenie internetowe zerwane
                        </span>
                        <div className="indicator-icon">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </div>
                    </div>
                )}
            </LayoutContainer>
        </StyledComponent>
    );
};

export default LayoutInternetConnectionIndicator;