import { FunctionComponent } from 'react';
import classnames from 'classnames';
import CreatableSelect from 'react-select/creatable';

import { Props } from './index';
import { Option } from 'types/options';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsCreatableSelect: FunctionComponent<Props> = ({ formik, name, label, placeholder, helper, value, onChange, disabled, style, selectProps, validationAction, decoratorLeft, decoratorRight }) => {
    const error = formik?.errors[name]?.toString();

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-creatable-select',
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
        >
            <InputWrapper
                name={name}
                label={label}
                helper={helper}
                error={error}
            >
                <CreatableSelect
                    name={name}
                    value={value || ''}
                    isClearable
                    placeholder={placeholder}
                    onChange={(option: Option<any>) => {
                        formik?.setFieldError(name, null)
                        onChange(option)
                    }}
                    isDisabled={disabled}
                    formatCreateLabel={(inputValue: string) => `Utwórz "${inputValue}"`}
                    noOptionsMessage={() => 'Brak wyników, zacznij pisać, aby dodać nową pozycję'}
                    {...selectProps}
                />
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsCreatableSelect;