import { ChangeEvent, FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props } from './index';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsTextarea: FunctionComponent<Props> = ({ formik, name, label, placeholder, disabled, helper, value, onChange, style, styles, validationAction, decoratorLeft, decoratorRight }) => {
    const error = formik?.errors[name]?.toString();

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-textarea',
                [`style-${style}`],
                {
                    'error': Boolean(error),
                    'decorator-left': Boolean(
                        error && validationAction === ValidationActions.Decorator ||
                        decoratorLeft && decoratorLeft.visible !== false
                    ),
                    'decorator-right': Boolean(decoratorRight && decoratorRight.visible !== false),
                }
            )}
            style={styles}
        >
            <InputWrapper
                name={name}
                label={label}
                helper={helper}
                error={error}
                validationAction={validationAction}
                decoratorLeft={decoratorLeft}
                decoratorRight={decoratorRight}
            >
                <textarea
                    className="textarea"
                    name={name}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={(e: ChangeEvent) => {
                        formik?.setFieldError(name, null)
                        onChange(e)
                    }}
                />
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsTextarea;