import { useState } from 'react';
import { v4 } from 'uuid';

function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({
    id: v4(),
    text: '',
    completed: false,
  });

  const onSave = e => {
    e.preventDefault();
    if (todo.text === '') {
      return alert('Lütfen bir şeyler yazın');
    }
    setTodoList([...todoList, todo]);
    setTodo({
      id: v4(),
      text: '',
      completed: false,
    });
  };

  return (
    <form>
      <div>
        <input
          className='input1'
          name='text'
          value={todo.text}
          placeholder='Bugün Ne Yapacaksın?'
          onChange={e => {
            setTodo({
              id: todo.id,
              text: e.currentTarget.value,
              completed: todo.completed,
            });
          }}
        ></input>
        <button onClick={onSave} >Ekle</button>
      </div>
    </form>
  );
}

export default Form;
