import { FunctionComponent } from 'react';
import classnames from 'classnames';
import ReactSlider from 'react-slider';

import { Props } from './index';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';

import InputWrapper from 'components/layout/forms/InputWrapper';

const LayoutFormsSlider: FunctionComponent<Props> = ({ formik, name, label, helper, value, onChange, style, styles, disabled, error, validationAction, decoratorLeft, decoratorRight, sliderProps, legend }) => {
    const errorMessage = formik?.errors[name]?.toString() || error;

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-slider',
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
                error={errorMessage}
                validationAction={validationAction}
                decoratorLeft={decoratorLeft}
                decoratorRight={decoratorRight}
            >
                <ReactSlider 
                    className="react-slider"
                    value={value}
                    onChange={onChange}
                    {...sliderProps}
                />
            </InputWrapper>
            {legend && (
                <div className="legend">
                    <div className="legend-elem legend-elem-start">
                        {legend.min} {legend.unit}
                    </div>
                    <div className="legend-elem legend-elem-end">
                        {legend.max} {legend.unit}
                    </div>
                </div>
            )}
        </StyledComponent>
    );
};

export default LayoutFormsSlider;