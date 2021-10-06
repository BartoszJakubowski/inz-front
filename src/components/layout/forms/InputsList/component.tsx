import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Props, Element } from './index';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';
import Control from 'components/layout/ListDetailedElementControl';

const LayoutFormsInputsList: FunctionComponent<Props> = ({ formik, name, label, value, onChange, layout, elements, onMapControls, defaultValues, canCreate, canRemove }) => {
    const error = formik?.errors[name]?.toString();

    const isValueDirty = (value: any): boolean => {
        let isDirty = false;
        Object.keys(value).forEach((valueField: any) => {
            if(value[valueField] !== '' && value[valueField] !== null && value[valueField] !== defaultValues[valueField])  {
                isDirty = true;
            }
        })

        return isDirty;
    }

    const onElementChange = (name: string, elementValue: any, index: number): void => {
        let nextValue = [...value];
        
        nextValue[index][name] = elementValue;
        nextValue = nextValue.filter(nextValueElem => isValueDirty(nextValueElem));

        onChange(nextValue);
    }

    const removeValue = (index: number): void => {
        const nextValue = [...value];
        nextValue.splice(index, 1);
        onChange(nextValue);
    }

    const getElementMarkup = (): object => {
        const elementsMarkup = {};
        elements.forEach(({ name }: Element) => {
            elementsMarkup[name] = defaultValues[name] || '';
        });

        return elementsMarkup;
    }

    // Set first value form
    if(canCreate && !value.length) {
        value = [getElementMarkup()]
    }

    // Set another value form if last is dirty
    if(canCreate && isValueDirty(value[value.length-1])) {
        value = [
            ...value,
            getElementMarkup(),
        ];
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-inputs-list',
                {
                    'error': Boolean(error),
                }
            )}
        >
            <InputWrapper
                name={name}
                label={label}
                error={error}
            >
                {value.map((valueElem: any, valueIndex: number) => (
                    <div
                        className={classnames(
                            'value-elem-container',
                            `layout-${layout}`
                        )}
                        key={valueIndex}
                    >
                        <div className="value-elem-index">
                            {valueIndex+1}.
                        </div>
                        <div className="value-elem-form">
                            {elements
                                .filter(({ visible }) => visible !== false) 
                                .map(({ name, onMapElement }: Element) => {
                                    return onMapElement(`${name}-${valueIndex}`, valueIndex, onElementChange, valueElem[name]);
                                })}
                        </div>
                        <div className="value-elem-controls">
                            {onMapControls(valueElem, valueIndex, onElementChange)
                                .filter(control => control.visible !== false)
                                .map(control => (<Control key={control.key} {...control} />))
                            }
                            {canRemove && valueIndex !== value.length -1 && (
                                <Control 
                                    label="Usuń"
                                    icon={(<FontAwesomeIcon icon={faTimesCircle} />)}
                                    onClick={() => removeValue(valueIndex)}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsInputsList;