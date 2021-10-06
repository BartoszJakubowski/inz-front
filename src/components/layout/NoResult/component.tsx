import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutNoResult: FunctionComponent<Props> = ({ headline }) => ((
    <StyledComponent className="layout-no-result">
        <h2 className="text-statement">{headline}</h2>
        <FontAwesomeIcon
            className="icon"
            icon={faSearch}
        />
    </StyledComponent>
));

export default LayoutNoResult;