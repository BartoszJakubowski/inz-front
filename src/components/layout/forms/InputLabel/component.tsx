import { FunctionComponent } from 'react';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutFormsInputLabel: FunctionComponent<Props> = ({ children, required }) => {
    return (
        <StyledComponent className="layout-forms-input-label">
            {required && <span className="required-true">*</span>}
            <span className="label">{children}</span>
        </StyledComponent>
    );
};

export default LayoutFormsInputLabel;