// @ts-ignore
import { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props, ButtonElements, ButtonIconTypes } from './index';

import StyledComponent from './styles';
import Spinner, { Colors, Positions } from 'components/layout/Spinner';

const LayoutButton: FunctionComponent<Props> = ({ children, href, onClick, type, element, className, icon, disabled, size, style, variant, layout, loading, confirm, buttonProps, shadow, selected }) => {
    const defaultConfirmProps = {
        message: 'Potwierdź swój wybór',
    };

    const onCheckClick = () => {
        if (disabled) {
            return;
        }

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

    const getIcon = () => {
        if(!icon) return null;

        if(icon.type === ButtonIconTypes.Element) {
            return icon.value || null;        
        }

        if(icon.type === ButtonIconTypes.Image) {
            return (<img className="button-icon-image" src={icon.value} />);    
        }

        return null;
    }

    const getContent = () => {
        return loading
            ? (
                <Spinner
                    color={Colors.White}
                    position={Positions.Relative}
                />
            )
            : (
                <>
                    <span className="button-content">{children}</span>
                    {icon && <div className="button-icon">{getIcon()}</div>}
                </>
            )
    }

    const getElement = () => {
        const button = (
            <button
                type={type}
                onClick={onCheckClick}
                disabled={disabled}
                className="button"
                {...buttonProps}
            >
                {getContent()}
            </button>
        );

        switch (element) {
            case ButtonElements.Anchor:
                return (
                    <a 
                        href={href} 
                        {...buttonProps}
                    >
                        {button}
                    </a>
                )
            default:
                return button
        }
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-button',
                className,
                `element-${element}`,
                `size-${size}`,
                `style-${style}`,
                `variant-${variant}`,
                `layout-${layout}`,
                {
                    disabled,
                    shadow: shadow?.enabled,
                    selected,
                }
            )}
        >
            {getElement()}
            {shadow?.enabled && (
                <div 
                    className="button-shadow"
                    style={shadow.style || {}}
                />
            )}
        </StyledComponent>
    );
};

export default LayoutButton;