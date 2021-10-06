import { FormEvent, FunctionComponent } from 'react';
import classnames from 'classnames';
import { DefaultEditor } from 'react-simple-wysiwyg';

import { Props } from './index';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsEditorWyswig: FunctionComponent<Props> = ({ formik, name, label, placeholder, helper, value, onChange, style, styles, validationAction, decoratorLeft, decoratorRight }) => {
    const error = formik?.errors[name]?.toString();

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-editor-wyswig',
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
                <DefaultEditor 
                    value={value} 
                    onChange={(e: FormEvent<any>) => onChange(e)} 
                />
              
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsEditorWyswig;