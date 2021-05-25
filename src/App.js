import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './Header';

function App() {
  return (
    <>
    <div className='todo-app'>
      <TodoList />
    </div>
    <div>
      <Header  />
    </div>
    </>
  );
}

export default App;