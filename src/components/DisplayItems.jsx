import React from 'react';

const DisplayItems = ({ items, setItems }) => {
  const handleClick = (index) => {
    // Create a copy of the items array
    const updatedItems = [...items];

    // Toggle the 'done' property of the clicked item
    updatedItems[index].done = !updatedItems[index].done;

    // Update the state with the modified items array
    setItems(updatedItems);
  };

  return (
      <div>
        {items.map((todo, index) => (
          <div className="taskDiv" key={index}>
            <h4 onClick={() => handleClick(index)}>{todo.title}</h4>
            <div id="icons">
              <span
                id="editIcon"
                onClick={() => handleDelete(index)}
                className="material-symbols-outlined"
              >
                ✏️
              </span>

              <span
                id="binIcon"
                onClick={() => handleDelete(index)}
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
