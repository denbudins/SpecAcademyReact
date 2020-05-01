import Api from './api';

export const getTodos = () =>{
    return fetch(`${Api}/todos`).then(res => res.json());
}