import React from 'react';
import './components/App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoItems from './components/TodoItems';

const App = () => {
  return (
    <div >
<Header />
<Todo />
<TodoItems />
</div>
  )
}

export default App