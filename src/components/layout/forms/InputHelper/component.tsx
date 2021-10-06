import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Props } from './index';

import StyledComponent from './styles';
import Tooltip from 'components/layout/Tooltip';

const LayoutFormsInputHelper: FunctionComponent<Props> = ({ name, text }) => {
    return (
        <StyledComponent className="layout-forms-input-helper">
            <Tooltip name={name} text={text}>
                <div className="helper-icon">
                    <FontAwesomeIcon icon={faInfoCircle} />
                </div>
            </Tooltip>
        </StyledComponent>
    );
};

export default LayoutFormsInputHelper;