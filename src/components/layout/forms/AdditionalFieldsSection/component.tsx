import { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutFormsAdditionalFieldsSection: FunctionComponent<Props> = ({ initialExpandState, expandLabel, unexpandLabel, onToggleExpand, children }) => {
    const [expandState, setExpandState] = useState(initialExpandState);

    const onExpand = () => {
        setExpandState(!expandState);
        onToggleExpand(!expandState);
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-additional-fields-section',
                `state-${expandState}`
            )}
        >
            <div className="section-header">
                <h5
                    className="section-header-control"
                    onClick={() => onExpand()}
                >
                    {expandState
                        ? (
                            <div className="control-label">
                                <span className="control-label-text">
                                    {unexpandLabel}
                                </span>
                                <span className="control-label-icon">
                                    <FontAwesomeIcon icon={faArrowDown} className="arrow-down-icon" />
                                </span>
                            </div>
                        )
                        : (
                            <div className="control-label">
                                <span className="control-label-text">
                                    {expandLabel}
                                </span>
                                <span className="control-label-icon">
                                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right-icon" />
                                </span>
                            </div>
                        )
                    }
                </h5>
            </div>
            {expandState && (
                <div className="section-body">
                    {children}
                </div>
            )}
        </StyledComponent>
    );
};

export default LayoutFormsAdditionalFieldsSection;