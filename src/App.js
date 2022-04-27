import React from 'react';
import './App.css';
import Todo from './todo';
import {TodoProvider} from './todoContext';

function App() {

  return (
    <TodoProvider>
    <div className="App">
      <h1>TODO APP</h1>
      <Todo />
    </div>
    </TodoProvider>
  );
}

export default App;
