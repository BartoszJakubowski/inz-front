import { Component, ReactNode } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import { Props, State } from './index';

import StyledComponent from './styles';

export default class LayoutFormsForm extends Component<Props> {
    static defaultProps = {
        children: null,
        errorMessage: null,
        initialValues: {},
        onSuccess: (response: object, formikHelpers: FormikHelpers<any>): any => response,
        onError: (error: object): any => error,
        onSubmitData: (values: object): object => values,
        submitAction: null,
    };
    state: State = {
        errorMessage: null,
    }

    onSubmit = async (values: object, formikHelpers: FormikHelpers<any>): Promise<any> => {
        const { submitAction, onSubmitData, onSuccess, onError } = this.props;

        try {
            const response = await submitAction({
                ...onSubmitData(values),
            });

            return onSuccess(response, formikHelpers)
        } catch (error) {
            console.error(error);
            if (Object.keys(error?.payload?.validationErrors).length > 0) {
                formikHelpers.setErrors(error.payload.validationErrors);
            } else {
                this.setState((prevState: State) => ({
                    ...prevState,
                    errorMessage: 'Błąd komunikacji',
                }));
            }

            return onError(error, formikHelpers);
        }
    }

    render = (): ReactNode => {
        const { initialValues, children, errorMessage } = this.props;

        return (
            <StyledComponent className="layout-forms-form">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: object, formikHelpers: FormikHelpers<any>) => this.onSubmit(values, formikHelpers)}
                    className="form-container"
                >
                    {formik => {
                        return (
                            <form onSubmit={formik.handleSubmit}>
                                {errorMessage && (
                                    <div className="form-error-message">
                                        {errorMessage}
                                    </div>
                                )}
                                {children({ formik, errors: {}, errorMessage })}
                            </form>
                        )
                    }}
                </Formik>
            </StyledComponent>
        )
    }
}
