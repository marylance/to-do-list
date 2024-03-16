
import React from 'react';

const TodoItem = ({ task, deleteTask }) => {
  return (
    <li>
      {task}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TodoItem;
