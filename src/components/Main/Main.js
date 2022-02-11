import { useState } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import "../Style/styles.css"

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const deleteAll = () => {
    setTodoList([]);
  };

  const deleteCompleted = () => {
    setTodoList(todoList => todoList.filter(todo => todo.completed === false));
  };

  return (
    <> <div id="container">
          <h1> ToDoList </h1>
          <Form todoList={todoList} setTodoList={setTodoList} />
          <List todoList={todoList} setTodoList={setTodoList} />

          <div className="btn" >
            <button onClick={deleteCompleted}  > Delete Completed </button>
            <button onClick={deleteAll}  > Clear All </button>
          </div>
        </div>
    </>
    
  );
};

export default TodoList;
