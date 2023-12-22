import React, { useState } from 'react';

const DisplayItems = ({ ToDos, handleDone, handleDelete }) => {
  const [editableIndex, setEditableIndex] = useState(null);
  const [editableTitle, setEditableTitle] = useState('');

  const startEditing = (index, title) => {
    setEditableIndex(index);
    setEditableTitle(title);
  };

  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };

  const handleEditKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      // Update the title directly in your logic (replace the following line with your logic)
      if (e.key === 'Enter') {
        console.log(`Editing item at index ${index} with new title: ${editableTitle}`);
      }
      setEditableIndex(null);
    }
  };

  return (
    <div className=''>
      {ToDos.map((todo, index) => (
        <div className={todo.isDone ? "doneTask" : "taskDiv"} key={index}>
          {editableIndex === index ? (
            <input
              type="text"
              value={editableTitle}
              onChange={handleTitleChange}
              onKeyDown={(e) => handleEditKeyDown(e, index)}
            />
          ) : (
            <h4 onClick={() => startEditing(index, todo.title)}>
              {todo.title}
            </h4>
          )}

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
              onClick={() => handleDone(index)}
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
