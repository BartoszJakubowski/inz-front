import { FunctionComponent, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import { Props, ValidationActions, InputDecorator } from './index';
import { ColorStates } from 'types/states';

import StyledComponent from './styles';
import InputLabel from 'components/layout/forms/InputLabel';
import InputHelper from 'components/layout/forms/InputHelper';
import InputError from 'components/layout/forms/InputError';
import Spinner, { Positions, Colors, Sizes } from 'components/layout/Spinner';

const LayoutFormsInputWrapper: FunctionComponent<Props> = ({ name, children, label, helper, error, validationAction, decoratorLeft, decoratorRight, required }) => {
    const getLeftDecorator = (): ReactNode => {
        if(error && validationAction === ValidationActions.Decorator && !decoratorLeft) {
            return (
                <div
                    className={classnames(
                        'input-decorator',
                        'input-decorator-left',
                        `input-decorator-state-${ColorStates.Warning}`
                    )}
                >
                    {getIcon({
                        visible: true,
                        state: ColorStates.Warning,
                    })}
                </div>
            );
        }

        if(decoratorLeft && decoratorLeft.visible !== false) {
            return (
                <div
                    className={classnames(
                        'input-decorator',
                        'input-decorator-left',
                        `input-decorator-state-${decoratorLeft.state || ColorStates.Info}`
                    )}
                >
                    {decoratorLeft.loading
                        ? (
                            <Spinner
                                size={Sizes.Small}
                                position={Positions.Relative}
                                color={Colors.White}
                            />
                        )
                        : getIcon(decoratorLeft)}
                </div>
            );
        }

        return null;
    }

    const getRightDecorator = (): ReactNode => {
        if(decoratorRight && decoratorRight.visible !== false) {
            return (
                <div
                    className={classnames(
                        'input-decorator',
                        'input-decorator-right',
                        `input-decorator-state-${decoratorRight.state || ColorStates.Info}`
                    )}
                >
                    {decoratorRight.loading
                        ? (
                            <Spinner
                                size={Sizes.Small}
                                position={Positions.Relative}
                                color={Colors.White}
                            />
                        )
                        : getIcon(decoratorRight)}
                </div>
            );
        }

        return null;
    }

    const getIcon = (decorator: InputDecorator): ReactNode => {
        if(decorator.children) {
            return decorator.children;
        }

        if(decorator.state) {
            switch (decorator.state) {
                case ColorStates.Success:
                    return (<FontAwesomeIcon icon={faCheckCircle} className="check-icon" />);
                case ColorStates.Warning:
                    return (<FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon" />);
                case ColorStates.Alert:
                    return (<FontAwesomeIcon icon={faTimes} className="times-icon" />);
            }
        }

        return null;
    }

    return (
        <StyledComponent className="layout-forms-input-wrapper">
            {(label || helper) && (
                <div className="label-wrapper">
                    {helper && (
                        <InputHelper
                            name={name}
                            text={helper}
                        />
                    )}
                    {label && (
                        <InputLabel required={required}>
                            {label}
                        </InputLabel>
                    )}
                </div>
            )}
            <div className="internal-wrapper">
                {getLeftDecorator()}
                <div className="input-body">
                    {children}
                </div>
                {getRightDecorator()}
            </div>
            {error && (
                <InputError>
                    {error}
                </InputError>
            )}
        </StyledComponent>
    );
};

export default LayoutFormsInputWrapper;