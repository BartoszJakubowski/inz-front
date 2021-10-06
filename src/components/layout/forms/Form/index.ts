import { FormikHelpers } from 'formik';
import Component from './component';

export interface Props {
    children: any;
    errorMessage?: string;
    initialValues?: object;
    submitAction: Function;
    onSubmitData?: (values: any) => object;
    onSuccess?: (response: any, formikHelpers: FormikHelpers<any>) => any;
    onError?: (error: any, formikHelpers: FormikHelpers<any>) => any;
}

export interface State {
    errorMessage?: string;
}


export default Component;