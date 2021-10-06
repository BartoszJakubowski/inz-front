import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Props } from './index';

import StyledComponent from './styles';

const LayoutModal: FunctionComponent<Props> = ({ children, title, onClose }) => {
    return (
        <StyledComponent
            className="layout-modal"
        >
            <div
                className="modal-backdrop"
                onClick={onClose}
            />

            <div className="modal-container">
                <div className="modal-header">
                    {title && (
                        <h3 className="modal-header-title">
                            {title}
                        </h3>
                    )}
                    <a
                        className="modal-header-close"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                </div>

                <div className="modal-body">
                    {children}
                </div>
            </div>
        </StyledComponent>
    )
};

export default LayoutModal;