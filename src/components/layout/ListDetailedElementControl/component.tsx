import { FunctionComponent } from 'react';
import Link from 'next/link';
import Clipboard from 'react-clipboard.js';
import { toast } from 'react-toastify';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutListDetailedElementControl: FunctionComponent<Props> = ({ label, icon, href, onClick, copy, confirm }) => {
    const defaultConfirmProps = {
        message: 'Potwierdź swój wybór',
    };

    const getCopyWrapper = () => {
        if(!copy || (copy && !copy.enabled)) {
            return getContent();
        }

        return (
            <Clipboard
                data-clipboard-text={copy.content}
                onSuccess={() => toast.info('Skopiowano')}
            >
                {getContent()}
            </Clipboard>
        )
    }

    const onCheckClick = () => {
        if (confirm?.enabled) {
            const confirmConfig = { ...defaultConfirmProps, ...confirm };

            if (window.confirm(confirmConfig.message)) {
                return onClick && onClick();
            } else {
                return null;
            }
        }

        return onClick && onClick();
    };

    const getContent = () => (
        <div className="control-content">
            <div className="control-icon">{icon}</div>
            <span className="control-label">{label}</span>
        </div>
    );

    return (
        <StyledComponent
            className="layout-list-detailed-element-control"
        >
            {href
                ? (
                    <Link
                        href={href}
                    >
                        <a className="control-link">
                            {getCopyWrapper()}
                        </a>
                    </Link>
                )
                : (
                    <a
                        className="control-link"
                        onClick={() => onCheckClick()}
                    >
                        {getCopyWrapper()}
                    </a>
                )
            }
        </StyledComponent>
    );
};

export default LayoutListDetailedElementControl;