import { FunctionComponent } from 'react';
import classnames from 'classnames';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';
import pl from 'date-fns/locale/pl';

import { Props } from './index';
import { ValidationActions } from 'components/layout/forms/InputWrapper';

import StyledComponent from './styles';
import DatePickerStyledComponent from './datePickerStyles';
import InputWrapper from 'components/layout/forms/InputWrapper';

registerLocale('pl', pl);

const LayoutFormsDatePicker: FunctionComponent<Props> = ({ formik, name, label, placeholder, helper, value, onChange, disabled, style, styles, datePickerProps, validationAction, decoratorLeft, decoratorRight }) => {
    const error = formik?.errors[name]?.toString();

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-date-picker',
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
                <DatePickerStyledComponent>
                    <DatePicker
                        className="date-picker"
                        name={name}
                        disabled={disabled}
                        placeholder={placeholder}
                        selected={value && moment(value).isValid() && moment(value).toDate()}
                        onChange={(date: Date) => {
                            formik?.setFieldError(name, null);
                            onChange(date && moment(date) || null);
                        }}
                        locale="pl"
                        autoComplete="off"
                        dateFormat={datePickerProps?.showTimeSelect === false
                            ? 'yyyy-MM-dd'
                            : 'yyyy-MM-dd HH:mm'
                        }
                        placeholderText="Wybierz datę"
                        showTimeSelect
                        timeCaption="Godzina"
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        {...datePickerProps}
                    />
                </DatePickerStyledComponent>
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsDatePicker;