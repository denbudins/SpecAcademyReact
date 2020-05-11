import React, { useState } from 'react';
// If the component that needs to acces router props is not direct child
// of the Route component, then you need to import and define useHistory.
// After that you can access history so you can programatically go to the
// desired route.
import { useHistory } from 'react-router-dom';

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const LoginForm = (props) => {
    const history = useHistory();

    const loginForm =
        <Form onSubmit={handleSubmit}>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    required />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    required />
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {loginForm}
        </>
    );
}

export default LoginForm;