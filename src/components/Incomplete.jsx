import React from "react";
import "../styles/incomplete.css";

const Incomplete = ({ todos, setTodos }) => {
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      text: event.target.todoInput.value,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    event.target.reset();
  };

  return (
    <div className="incomplete-container">
      <h1>Incomplete Todos</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name="todoInput" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <div key={todo.id} className="todo">
              <span>{todo.text}</span>
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Incomplete;
