import { FunctionComponent, useState, useEffect } from 'react';
import classnames from 'classnames';
import AsyncCreatableSelect from 'react-select/async-creatable';

import { Props } from './index';
import { Option } from 'types/options';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';
import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsCreatableAsyncSelect: FunctionComponent<Props> = ({
    formik,
    name,
    label,
    placeholder,
    helper,
    value,
    onChange,
    disabled,
    style,
    styles,
    defaultOptions,
    onLoad,
    onMapResponse,
    onMapOption,
    selectProps,
    validationAction,
    decoratorLeft,
    decoratorRight,
}) => {
    const [preloadedOptions, setPreloadedOptions]: [any, Function] = useState([]);
    let loadTimeout = null;

    const error = formik?.errors[name]?.toString();
    const selectedDefaultOptions = defaultOptions.length > 0
        ? defaultOptions
        : preloadedOptions;

    useEffect(() => {
        onDynamicLoad()
            .then((options: Option<any>[]) => {
                setPreloadedOptions(options)
            })
            .catch(() => {
                setPreloadedOptions([])
            });
    }, []);

    const onDynamicLoad = (input: string = ''): Promise<any> => {
        clearInterval(loadTimeout);
        return new Promise(resolve => {
            loadTimeout = setTimeout(() => {
                return resolve(
                    onLoad(input)
                        .then(response => {
                            if (!response) return [];

                            const elements = onMapResponse(response);
                            return elements.map((element: any) => onMapOption(element));
                        })
                        .catch(() => ([]))
                );
            }, 250);
        })
    }
    return (
        <StyledComponent
            className={classnames(
                'layout-forms-creatable-async-select',
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
            >
                <AsyncCreatableSelect
                    name={name}
                    value={value || ''}
                    placeholder={placeholder}
                    onChange={(option: Option<any>) => {
                        formik?.setFieldError(name, null)
                        onChange(option)
                    }}
                    isDisabled={disabled}

                    formatCreateLabel={(inputValue: string) => `Utwórz "${inputValue}"`}
                    loadOptions={onDynamicLoad}
                    defaultOptions={selectedDefaultOptions}
                    cacheOptions={false}
                    noOptionsMessage={() => 'Brak wyników, zacznij pisać, aby dodać nową pozycję'}
                    loadingMessage={() => 'Pobieram dane...'}
                    {...selectProps}
                />
            </InputWrapper>
        </StyledComponent>
    );
}

export default LayoutFormsCreatableAsyncSelect;
