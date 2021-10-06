import { ChangeEvent, FunctionComponent, useRef } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Props } from './index';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import ErrorMessage from 'components/layout/forms/InputError';
import InputHelper from 'components/layout/forms/InputHelper';

const LayoutFormsCheckbox: FunctionComponent<Props> = ({ formik, name, label, type, placeholder, helper, value, onChange, style, styles, disabled, error, validationAction, decoratorLeft, decoratorRight, spinButtons, inputProps, required }) => {
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
            <div className="input-internal-wrapper">
                <label htmlFor={name}>
                    <input
                        id={name}
                        name={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            formik?.setFieldError(name, null)
                            onChange(e)
                        }}
                        type="checkbox"
                        value={value}
                        checked={value ? true : false}
                        required={required}
                    />
                    <span className="trigger" />
                </label>
                <span className="label">
                    <span dangerouslySetInnerHTML={{ __html: label }} />
                </span>
                {helper ? <InputHelper text={helper} name="helper"/> : null}
                {errorMessage && <ErrorMessage children={errorMessage} />}
            </div>
        </StyledComponent>
    );
};

export default LayoutFormsCheckbox;