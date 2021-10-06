import { FunctionComponent, useEffect, useState } from 'react';
import classnames from 'classnames';
import { toast } from 'react-toastify';

import { Props } from './index';

import Form from 'components/layout/forms/Form';
import InputRow from 'components/layout/forms/InputRow';
import Input from 'components/layout/forms/Input';
import StyledComponent from './styles';
import LayoutContainer, { Sizes } from 'components/layout/LayoutContainer';
import Button, { ButtonTypes, ButtonStyles, ButtonLayouts } from 'components/layout/Button';

const PublicPageLoginSectionLogin: FunctionComponent<Props> = ({ headline, buttons, actions }) => {
    const [isSuccess, setIsSuccess]: [boolean, Function] = useState(false);

    return (
        <>
            <StyledComponent
                className={classnames(
                    'public-page-login-section-login',
                )}
            >
                <LayoutContainer size={Sizes.Large}>
                    <h3 className="headline">{headline}</h3>
                    <div className="login-form-wrapper">
                        {isSuccess && (
                            <div className="success-info">
                                <p 
                                    className="succcess-info-text"
                                    dangerouslySetInnerHTML={{ __html: "Gitara siema"}}
                                />
                            </div>
                        )}
                        {!isSuccess && (
                            <Form
                                // submitAction={actions.login}
                                onSuccess={() => setIsSuccess(true)}
                                onError={() => {
                                    toast.error("Wystąpił błąd, spróbuj ponownie później")
                                }}
                            >
                                {({ formik }) => {
                                    return (
                                        <>
                                            <InputRow>
                                                <Input
                                                    name="userName"
                                                    type="userName"
                                                    placeholder={"Nazwa użytkownika"}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.userName}
                                                />
                                            </InputRow>
                                            <InputRow>
                                                <Input
                                                    name="password"
                                                    type="password"
                                                    placeholder={"Hasło"}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.password}
                                                />
                                            </InputRow>
                                            <Button 
                                                type={ButtonTypes.Submit}
                                                children={"Zaloguj"}
                                                style={ButtonStyles.Primary}
                                                layout={ButtonLayouts.Wide}
                                            />
                                        </>
                                    )
                                }}
                            </Form>
                        )}
                        <div className="no-account">Nie masz jeszcze konta? Kliknij <a href="/rejestracja">tutaj</a> i się zarejestruj!</div>
                    </div>
                </LayoutContainer>
            </StyledComponent>
        </>
    )
};

export default PublicPageLoginSectionLogin;