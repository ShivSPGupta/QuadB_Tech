import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>To-Do App</h2>
      <p>You have {todos.length} Tasks</p>

      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />

    
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>

            {item}

            <button onClick={() => handleDeleteTodo(index)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
