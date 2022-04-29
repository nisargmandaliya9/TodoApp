import React, {useState, useContext} from 'react';
import { todoContext } from './todoContext';

const Todo = () => {

    const [work, setWork] = useState('');
    const [desc, setDesc] = useState('');
    const [todo, setTodo] = useContext(todoContext);

    const AddTodo = (e) => {
        e.preventDefault();
        const allInputdata = { id: Math.random()*100, work: work, desc: desc }
        if(!work || !desc){
            alert("Work or Description can't be blank!")
        } else {
            setTodo((prevTodo => [...prevTodo, allInputdata]));
            setWork('');
            setDesc('');
        }
    }

    const Delete = (id) => {
        const updateTodo = todo.filter((elem) => {
            return id !== elem.id;
        });
        // console.log(updateTodo);
        setTodo(updateTodo);
    }

    const EditTodo = (id) => {

        const updateTodo = todo.filter((elem) => {
            return id !== elem.id;
        });

        const toEditTodo = todo.find((elem) => {
            return elem.id === id;
        });
        // console.log(toEditTodo);
        setTodo(updateTodo);
        setWork(toEditTodo.work);
        setDesc(toEditTodo.desc);
    }

    return (
        <>
            <div>
                    <input 
                        name='work' 
                        placeholder='Enter your work' 
                        value={work}
                        onChange={(e) => {setWork(e.target.value)}}
                    />
                    <input
                        name='description' 
                        placeholder='Enter your work description' 
                        value={desc}
                        onChange={(e) => {setDesc(e.target.value)}}
                    />
                    <button onClick={AddTodo}>Add Todo</button>
            </div>
            <div>
                <ol>
                    { todo.map(todos => <p key={todos.id} >{"Work: "+ todos.work + " => Description: " + todos.desc} <button onClick={() => EditTodo(todos.id)}>Edit</button> <button onClick={() => Delete(todos.id)}>Delete</button> </p>) }
                </ol>
            </div>
    </>
    )
}

export default Todo