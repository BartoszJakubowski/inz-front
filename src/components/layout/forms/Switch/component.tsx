import { FunctionComponent } from 'react';
import classnames from 'classnames';
import Switch from 'react-switch';

import { Props } from './index';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsSwitch: FunctionComponent<Props> = ({ formik, name, label, helper, value, onChange, style, styles, validationAction, disabled }) => {
    const error = formik?.errors[name]?.toString();

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-switch',
                [`style-${style}`],
                {
                    'error': Boolean(error),
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
            >
                <Switch
                    className="switch"
                    onChange={(checked: boolean, event: MouseEvent) => {
                        formik?.setFieldError(name, null)
                        onChange(checked);
                    }}
                    checked={Boolean(value)}
                    id={name}
                    name={name}
                    disabled={disabled}
                />
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsSwitch;