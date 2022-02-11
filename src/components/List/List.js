const List = ({ todoList, setTodoList }) => {
  const handleCompleted = e => {
    const clickedTodo = e.currentTarget.value;
    const newTodoList = todoList.map(todo => {
      if (todo.id === clickedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  


  return (
    <>
      <ul className="list" >
        {todoList?.map(todo => (
          <li key={todo.id} style={{ listStyle: 'none' }}>
            <>
              <input
                type='checkbox'
                name='completed'
                value={todo.id}
                checked={todo.completed}
                onChange={handleCompleted}
              />
              {todo.text}
            </>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
