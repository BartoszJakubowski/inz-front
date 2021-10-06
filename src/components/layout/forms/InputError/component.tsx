import { FunctionComponent } from 'react';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutFormsInputError: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="layout-forms-input-error">
            {children}
        </StyledComponent>
    );
};

export default LayoutFormsInputError;