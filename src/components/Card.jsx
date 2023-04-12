import React from "react";

const Card = ({ todo, setTodos }) => {
  const handleDelete = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  const handleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <div className="buttons">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        {!todo.completed && (
          <button className="complete-button" onClick={handleComplete}>
            Complete
          </button>
        )}
        {todo.completed && (
          <button className="incomplete-button" onClick={handleComplete}>
            Mark Incomplete
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
