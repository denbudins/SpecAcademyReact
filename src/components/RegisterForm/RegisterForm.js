import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, ErrorMessage } from "react-hook-form";

import {registerUser} from '../../services/register';
import Loader from '../Loader/LoaderSpiner';

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
    const { register, errors, handleSubmit, setValue } = useForm({
        validateCriteriaMode: "all"
    });

    const[errorUser, setErrorUser] = useState('');
    const[errorPass, setErrorPass] = useState('');
    const[loder, setLoder] = useState(false);

    const onSubmit = data  => {
        setLoder(true);
        setTimeout(()=>{
        registerUser(data).then(res => {
            if(res.error){
                setErrorPass('Password should be at least 8 characters long');
                setErrorUser('');
                setLoder(false);
                setValue("username", data.username);
                setValue("password", data.password);
            }else if(res.message){
                setErrorUser('Username already used');
                setErrorPass('');
                setLoder(false);
                setValue("username", data.username);
                setValue("password", data.password);
            }else{
                setErrorUser('');
                setErrorPass('');
                history.push('/login');
            }
        });
        }, 2000);
    }

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    name="username"
                    ref={register({ required: "Username is required",
                    minLength: {
                            value: 5,
                            message: "Username must have minimum 5 characters."
                    }
                    })}    
                    />
                    <ErrorMessage errors={errors} name="username" as={<FormInputValidation />} />
                    {errorUser && <FormInputValidation>{errorUser}</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    name="password"
                    ref={register({ required: "Password is required",
                    minLength: {
                            value: 8,
                            message: "Password must have minimum 8 characters."
                    }
                    })}     
                    />
                <ErrorMessage errors={errors} name="password" as={<FormInputValidation />} />
                {errorPass && <FormInputValidation>{errorPass}</FormInputValidation>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {loder ? <>
                <FormSubmitSuccess>Successfull registration, soon you will be redirected to login!</FormSubmitSuccess>
                <Loader />
                </>
            : registerForm }
        </>
    );
}

export default RegisterForm;