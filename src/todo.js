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
            return id === elem.id;
        });
        // console.log(toEditTodo);
        setTodo(updateTodo);
        setWork(toEditTodo.work);
        setDesc(toEditTodo.desc);
    }

    return (
        <>
            <div>
                <h1 className="heading">TODO APP</h1>
                    <input 
                        name='work' 
                        placeholder='Enter your work' 
                        className='work'
                        value={work}
                        onChange={(e) => {setWork(e.target.value)}}
                    />
                    <input
                        name='description' 
                        placeholder='Enter work description' 
                        className='desc'
                        value={desc}
                        onChange={(e) => {setDesc(e.target.value)}}
                    />
                    <button onClick={AddTodo} className="addtodo">Add Work</button>
            </div>
            <div>
                    <ul>
                        {
                        todo.map(todos =>
                            <li key={todos.id} className='work-desc'>
                                <b className='ur_work'>{todos.work}</b>
                                <b className='ur_desc'>{" Description: " + todos.desc}</b>
                                <button onClick={() => EditTodo(todos.id)} className='btn1'>Edit</button>
                                <button onClick={() => Delete(todos.id)} className='btn2'>Delete</button>
                            </li>)
                        }
                    </ul>
            </div>
    </>
    )
}

export default Todo
