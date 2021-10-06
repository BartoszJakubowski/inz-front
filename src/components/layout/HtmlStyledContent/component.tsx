import { FunctionComponent } from 'react';
import ReactHtmlParser from 'react-html-parser';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutHtmlStyledContent: FunctionComponent<Props> = ({ html }) => {
    return (
        <StyledComponent>
            {ReactHtmlParser(html)}
        </StyledComponent>
    );
}

export default LayoutHtmlStyledContent;