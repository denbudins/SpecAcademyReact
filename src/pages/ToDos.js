import React, {useState, useEffect} from 'react';
import {getTodos} from '../services/todos';

const ToDo = () => {
    const [todos,setTodos] = useState('');
    
    useEffect(() => {
        getTodos().then(res => setTodos(res));
    });

    return(
        <ul>
            {todos ? todos.map(podatak => <li>{podatak.title}</li>) : <div>Loading...</div>}
        </ul>
    );
}

export default ToDo;