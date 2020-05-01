import Api from './api';

export const PostRegisterUser = (props) =>{
    const date = {
        "username": "student28",
        "password": "12345678" 
    };
    
    return fetch(`${Api}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(date),
    });
}