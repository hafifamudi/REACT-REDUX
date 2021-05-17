import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import './App.css'
import TodoItem from './components/TodoItem';
import Input from './components/Input';

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem 
                key={item.id}
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
