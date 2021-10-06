import { ChangeEvent, FunctionComponent, useRef } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Props } from './index';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsInput: FunctionComponent<Props> = ({ formik, name, label, type, placeholder, helper, value, onChange, style, styles, disabled, error, validationAction, decoratorLeft, decoratorRight, spinButtons, inputProps, required }) => {
    const inputRef = useRef(null);
    const errorMessage = formik?.errors[name]?.toString() || error;
    const isNumbericValue = !isNaN(value as number);

    const onIncrement = (): void => {
        if(!isNumbericValue) return;

        let nextValue = value as number;
        if(inputProps?.max && nextValue >= inputProps?.max) {
            nextValue = inputProps?.max -1;
        }

        fireOnChangeEvent(nextValue + 1);
    }

    const onDecrement = (): void => {
        if(!isNumbericValue) return;

        let nextValue = value as number;
        if(inputProps?.min && nextValue <= inputProps?.min) {
            nextValue = inputProps?.min + 1;
        }

        fireOnChangeEvent(nextValue - 1);
    }

    const fireOnChangeEvent = (value: any): void => {
        Object
            .getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
            .set
            .call(inputRef.current, value);

        inputRef.current.dispatchEvent(
            new Event('input', { bubbles: true})
        );
    }
    
    return (
        <StyledComponent
            className={classnames(
                'layout-forms-input',
                [`style-${style}`],
                {
                    'error': Boolean(error),
                    'decorator-left': Boolean(
                        error && validationAction === ValidationActions.Decorator ||
                        decoratorLeft && decoratorLeft.visible !== false
                    ),
                    'decorator-right': Boolean(decoratorRight && decoratorRight.visible !== false),
                    'with-spin-buttons': Boolean(spinButtons?.visible),
                }
            )}
            style={styles}
        >
            <InputWrapper
                name={name}
                label={label}
                helper={helper}
                error={errorMessage}
                validationAction={validationAction}
                decoratorLeft={decoratorLeft}
                decoratorRight={decoratorRight}
                required={required}
            >
                <input
                    ref={inputRef}
                    className="input"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value === null ? '' : value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        formik?.setFieldError(name, null)
                        onChange(e)
                    }}
                    disabled={disabled}
                    {...inputProps}
                />
                {spinButtons?.visible && (
                    <div className="spin-buttons">
                        <a 
                            className="spin-button spin-button-increment"
                            onClick={() => onIncrement()}
                        >
                            <FontAwesomeIcon icon={faChevronUp} />

                        </a>
                        <a 
                            className="spin-button spin-button-decrement"
                            onClick={() => onDecrement()}
                        >
                            <FontAwesomeIcon icon={faChevronDown} />

                        </a>
                    </div>
                )}
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsInput;