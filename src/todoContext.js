import React, {useState, createContext, useEffect} from "react";

export const todoContext = createContext();

const getLocalTodos = () => {
    const list = localStorage.getItem('todo');
    if (list) {
        return JSON.parse(localStorage.getItem('todo'));
    }else{
        return [];
    }
}

export const TodoProvider = (props) => {
    const [todo, setTodo] = useState(getLocalTodos());

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    return (
        <todoContext.Provider value={[todo, setTodo]}>
            {props.children}
        </todoContext.Provider>
    )
}