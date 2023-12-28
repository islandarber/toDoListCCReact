import React, { useState } from 'react';

const DisplayItems = ({ ToDos, handleDone, handleDelete, setToDos }) => {
  const handleEdit = (id) => {
    setToDos((previousTodos) =>
      previousTodos.map((item) =>
        item.id === id ? { ...item, editing: !item.editing } : item
      )
    );
  };

  const handleTitleChange = (id, newTitle) => {
    setToDos((previousTodos) =>
      previousTodos.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  return (
    <div className='tasks'>
      {ToDos.map((todo, index) => (
        <div
          className={todo.isDone ? 'doneTask' : 'taskDiv'}
          style={
            todo.priority === 'low'
              ? { border: '3px solid green' }
              : { border: '3px solid red' }
          }
          key={index}
        >
          {todo.editing ? (
            <input
              type='text'
              id='editingTask'
              placeholder={todo.title}
              value={todo.title}
              onChange={(e) => handleTitleChange(todo.id, e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEdit(todo.id)}
              autoFocus
            />
          ) : (
            <h4>{todo.title}</h4>
          )}
          <br />
          <div id='icons'>
            <span
              id='editIcon'
              onClick={() => handleEdit(todo.id)}
              className='material-symbols-outlined'
            >
              {todo.editing ? '☑️' : '✏️'}
            </span>
            <span
              id='binIcon'
              onClick={() => handleDelete(todo.id)}
              className='material-symbols-outlined'
            >
              ❌
            </span>
            <span
              id='binIcon'
              onClick={() => handleDone(todo.id)}
              className='material-symbols-outlined'
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
