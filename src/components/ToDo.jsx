import React from "react";

const ToDo = ({ task, completed }) => {
  return (
    <div>
      ToDo
      <tr>
        <td>{task}</td>
        <td>
          {completed ? (
            <button>Mark Incomplete</button>
          ) : (
            <button>Mark Completed</button>
          )}
        </td>
      </tr>
    </div>
  );
};

export default ToDo;
