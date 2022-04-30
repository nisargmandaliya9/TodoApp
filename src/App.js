import React from 'react';
import './App.css';
import Todo from './todo';
import {TodoProvider} from './todoContext';

function App() {

  return (
    <TodoProvider>
    <div className="App">
      <Todo />
    </div>
    </TodoProvider>
  );
}

export default App;
