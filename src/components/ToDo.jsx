import React from 'react';

const ToDoList = ({
  todos,
  updateTodo,
  toggleTodoStatus,
  deleteTodo,
  deleteAllTodos,
  markAllDone,
}) => {
  return (
    <div className="mt-4">
      {todos.length > 0 ? (
        <>
          <ul className="list-group mb-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  todo.completed ? 'bg-success' : ''
                }`}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodoStatus(todo.id)}
                    className="form-check-input me-3"
                  />
                  {todo.completed ? <s>{todo.task}</s> : todo.task}
                </div>
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => updateTodo(todo.id, prompt('Enter updated task', todo.task))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center"><br></br>
            <button className="btn btn-danger me-2" onClick={deleteAllTodos}>
              Delete All
            </button>
            <button className="btn btn-success" onClick={markAllDone}>
              Mark All Done
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">No tasks to show.</p>
      )}
    </div>
  );
};

export default ToDoList;
