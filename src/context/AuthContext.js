import React, {useState, createContext} from 'react';

//Define context
const AuthContext = createContext();

//Define provider
const AuthProvider = (props) => {
    const [isLogedIn, setIsLogedIn] = useState(false);

    return(
        <AuthContext.Provider value={[isLogedIn, setIsLogedIn]}>
            {props.children}
        </AuthContext.Provider>
    );
}

//Define consumer
const AutoConsumer = AuthContext.Consumer;

export {AuthContext, AuthProvider, AutoConsumer};