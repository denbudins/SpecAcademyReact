import React, {useContext, useState}  from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { loginUser } from '../../services/login';
import Loader from '../Loader/LoaderSpiner';
import {AuthContext} from "../../context/AuthContext";

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
    const [isLogedIn, setIsLogedIn] = useContext(AuthContext);
    const { register, errors, handleSubmit, setValue } = useForm();

    const[loder, setLoder] = useState(false);
    const[errorLogin, setErrorLogin] = useState('');

    const onSubmit = data  => {
        setLoder(true);
        setTimeout(()=>{
            loginUser(data).then(res => {
            if(res.message && res.token){
                localStorage.setItem('token', res.token);
                setIsLogedIn(true);
                history.replace('/');
            }else{
                setErrorLogin("Username or password are incorrect!")
                setLoder(false);
                setValue("username", data.username);
                setValue("password", data.password);
            }
        });
        }, 2000);
    }

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    name="username"
                    ref={register({ required: "Username is required" })} 
                    />
                    <ErrorMessage errors={errors} name="username" as={<FormGeneralError />}  />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    name="password"
                    ref={register({ required: "Password is required" })}     
                    />
                <ErrorMessage errors={errors} name="password" as={<FormGeneralError />} />
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
            { errorLogin && <FormGeneralError>{errorLogin}</FormGeneralError>}
        </Form>;

    return (
        <>
            {loder ? <>
                <FormSubmitSuccess>Successfull login, soon you will be redirected to homepage!</FormSubmitSuccess>
                <Loader />
                </>
            : loginForm }

        </>
    );
}

export default LoginForm;