import React from 'react';

const DisplayItems = ({ items, handleDone, handleDelete, handleEdit }) => {


  return (
      <div>
        {items.map((todo, index) => (
          <div className="taskDiv" key={index}>
            <h4>{todo.title}</h4>
            <div id="icons">
              <span
                id="editIcon"
                onClick={() => handleEdit(index)}
                className="material-symbols-outlined"
              >
                ✏️
              </span>

              <span
                id="binIcon"
                onClick={() => handleDelete(todo.id)}
                className="material-symbols-outlined"
              >
                ❌
              </span>

              <span
                id="binIcon"
                onClick={() => handleDone(index)}
                className="material-symbols-outlined"
              >
                ✔️
              </span>
            </div>
          </div>
        ))}
      </div>)
};

export default DisplayItems;
