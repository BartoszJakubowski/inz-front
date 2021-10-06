import { FunctionComponent } from 'react';

import { Props } from './types';

const LayoutPageContainer: FunctionComponent<Props> = ({ children }) => ((
    <div className="layout-page-container">
        {children}
    </div>
));

LayoutPageContainer.defaultProps = {
    children: null,
};
export default LayoutPageContainer;