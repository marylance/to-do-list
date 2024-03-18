import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  };

  const deleteAllTodos = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTodos([]);
    }
  };

  const markAllDone = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4 custom-heading">To-Do App</h1><br></br>
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        updateTodo={updateTodo}
        toggleTodoStatus={toggleTodoStatus}
        deleteTodo={deleteTodo}
        deleteAllTodos={deleteAllTodos}
        markAllDone={markAllDone}
      />
    </div>
  );
};

export default App;
