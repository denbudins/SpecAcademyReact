import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const RegisterForm = (props) => {
    const history = useHistory();

    const registerForm =
        <Form onSubmit={handleSubmit}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    required />
                <FormInputValidation></FormInputValidation>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    required />
                <FormInputValidation></FormInputValidation>
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
        </>
    );
}

export default RegisterForm;