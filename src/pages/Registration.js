import React, {useState} from "react";
import { Redirect } from 'react-router-dom';
 

import {PostRegisterUser} from "../services/apiWorks";

const Registration = (props) => {
    const [login, setLogin] = useState('');
    const [messeg, setmMsseg] = useState('');
    
    function RegisterUser(){
        PostRegisterUser().then(res => setLogin(res.ok));
        login ? setmMsseg('') : setmMsseg('Greška prilikom registracije!');
    }

    function ClearMesseg(){
        setmMsseg('');
    }

    return(
        <>
            <h2>Registration </h2>
            <input type="text" id="userName" placeholder="Username" onFocus={ClearMesseg}></input>
            <input type="text" id="password" placeholder="Password" onFocus={ClearMesseg}></input>
            <button onClick={RegisterUser}>Register</button>
            {login ? <Redirect to="/login"/> : <p>{messeg}</p>}
        </>
    );
}

export default Registration;