import React, { useState } from 'react';

const DisplayItems = ({ ToDos, handleDone, handleDelete }) => {


  return (
    <div className='tasks'>
      {ToDos.map((todo, index) => (
        <div
        className={todo.isDone ? "doneTask" : "taskDiv"}
        style={todo.priority === 'low' ? { border: '3px solid green' } : {border: '3px solid red'}}
        key={index}
      >
        <span className='date_task'>{todo.date}</span>
        <h4 >
        {todo.title}
        </h4> <br />
            

          <div id="icons">
            <span
              id="editIcon"
              onClick={() => startEditing(index, todo.title)}
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
              onClick={() => handleDone(todo.id)}
              className="material-symbols-outlined"
            >
              ✔️
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayItems;
