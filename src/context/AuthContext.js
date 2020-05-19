import React, {useState, createContext, useEffect} from 'react';

//Define context
const AuthContext = createContext();

//Define provider
const AuthProvider = (props) => {
    const [isLogedIn, setIsLogedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('token') !== null && isLogedIn === false) setIsLogedIn(true);
    }, [isLogedIn]);

    return(
        <AuthContext.Provider value={[isLogedIn, setIsLogedIn]}>
            {props.children}
        </AuthContext.Provider>
    );
}

//Define consumer
const AutoConsumer = AuthContext.Consumer;

export {AuthContext, AuthProvider, AutoConsumer};