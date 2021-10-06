import { FunctionComponent } from 'react';
import classnames from 'classnames';
import Select from 'react-select';

import { Props } from './index';
import { Option } from 'types/options';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsSelect: FunctionComponent<Props> = ({ formik, name, label, placeholder, helper, value, onChange, disabled, style, styles, options, validationAction, decoratorLeft, decoratorRight }) => {
    const error = formik?.errors[name]?.toString();

    if(options.length > 0 && typeof value === 'string') {
        const selectedOption = options.find((option: Option<any>) => option.value === value);
        value = selectedOption || value;
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-select',
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
                <Select
                    name={name}
                    options={options}
                    value={value || ''}
                    placeholder={placeholder}
                    onChange={(option: Option<any>) => {
                        formik?.setFieldError(name, null)
                        onChange(option)
                    }}
                    isDisabled={disabled}
                    noOptionsMessage={() => 'Brak wyników'}
                    isClearable={true}
                />
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsSelect;