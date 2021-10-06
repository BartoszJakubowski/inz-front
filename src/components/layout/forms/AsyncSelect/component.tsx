import { FunctionComponent, useState, useEffect } from 'react';
import classnames from 'classnames';
import AsyncSelect from 'react-select/async';

import { Props } from './index';
import { Option } from 'types/options';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';
import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsAsyncSelect: FunctionComponent<Props> = ({
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
    onSetOptions,
    selectProps,
    loadTimestamp,
    validationAction,
    decoratorLeft,
    decoratorRight,
}) => {
    const [preloadedOptions, setPreloadedOptions]: [any, Function] = useState([]);
    let loadTimeout = null;

    const error = formik?.errors[name]?.toString();
    let selectedDefaultOptions = defaultOptions.length > 0 && preloadedOptions.length === 0
        ? defaultOptions
        : preloadedOptions;
    selectedDefaultOptions = onSetOptions(selectedDefaultOptions);

    useEffect(() => {
        onDynamicLoad()
            .then((options: Option<any>[]) => {
                setPreloadedOptions(options)
            })
            .catch(() => {
                setPreloadedOptions([])
            });
    }, [loadTimestamp]);

    const onDynamicLoad = (input: string = ''): Promise<any> => {
        clearInterval(loadTimeout);
        return new Promise(resolve => {
            loadTimeout = setTimeout(() => {
                return resolve(
                    onLoad(input)
                        .then(response => {
                            if (!response) return [];

                            const elements = onMapResponse(response);
                            return elements
                                .map((element: any) => onMapOption(element))
                                .filter((element: any) => element);
                        })
                        .catch(() => ([]))
                );
            }, 250);
        })
    }

    if(typeof value === 'string') {
        value = selectedDefaultOptions.find(selectedDefaultOption => selectedDefaultOption.value === value) || value;
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-async-select',
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
                decoratorLeft={decoratorLeft}
                decoratorRight={decoratorRight}
            >
                <AsyncSelect
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={(option: Option<any>) => {
                        formik?.setFieldError(name, null)
                        onChange(option)
                    }}
                    isDisabled={disabled}
                    loadOptions={onDynamicLoad}
                    defaultOptions={selectedDefaultOptions}
                    cacheOptions={false}
                    noOptionsMessage={() => 'Brak wyników'}
                    loadingMessage={() => 'Pobieram dane...'}
                    isClearable={true}
                    {...selectProps}
                />
            </InputWrapper>
        </StyledComponent>
    );
}

export default LayoutFormsAsyncSelect;
