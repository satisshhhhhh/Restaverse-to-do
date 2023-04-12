import React from "react";
import "../styles/completed.css";
import binIcon from "../assets/bin.png";

const Completed = ({ todos, setTodos }) => {
  const handleIncomplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: false };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="completed-container">
      <h1>Completed Todos</h1>
      <div className="todo-list">
        {todos.filter((todo) => todo.completed).length === 0 ? (
          <p>No completed todos yet</p>
        ) : (
          todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <div key={todo.id} className="todo">
                <img
                  src={binIcon}
                  alt="delete"
                  className="delete-icon"
                  onClick={() => handleDelete(todo.id)}
                />
                <span>{todo.text}</span>
                <button onClick={() => handleIncomplete(todo.id)}>
                  Incomplete
                </button>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Completed;
