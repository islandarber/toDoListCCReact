import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import DisplayItems from './components/DisplayItems';

function App() {
  // Retrieve ToDos from localStorage with error handling
  let initialToDos = [];
  try {
    const data = localStorage.getItem('ToDos');
    if (data) {
      initialToDos = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error parsing ToDos from localStorage:', error);
  }

  const [ToDos, setToDos] = useState(initialToDos);
  const [hide, setHide] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  // Save ToDos to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(ToDos));
  }, [ToDos]);

  const handleClear = () => {
    setToDos([]);
  };

  const handleHide = () => {
    setHide(!hide);
  };

  const handleDone = (id) => {
    const updatedItems = ToDos.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setToDos(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = ToDos.filter((item) => item.id !== id);
    setToDos(updatedItems);
  };

  const sortByPriority = (a, b) => {
    const priorityOrder = { high: 0, low: 1 }; // Define the priority order

    const priorityA = priorityOrder[a.priority];
    const priorityB = priorityOrder[b.priority];

    return sortOrder === 'asc' ? priorityA - priorityB : priorityB - priorityA;
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
      <div className="container">
        <h1>Get your Stuff together List 📝</h1>
        <Form setToDos={setToDos} handleClear={handleClear} toggleSortOrder={toggleSortOrder} />
        <h1>Incomplete</h1>
        <DisplayItems
          ToDos={ToDos.filter((item) => !item.isDone).sort(sortByPriority)}
          setToDos={setToDos}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
        {!hide && (
          <>
            <h1>Complete</h1>
            <DisplayItems
              ToDos={ToDos.filter((item) => item.isDone).sort(sortByPriority)}
              setToDos={setToDos}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          </>
        )}
        <div id="clearBtnDiv">
          <button id="clearBtn" onClick={handleClear}>
            Clear All Tasks
          </button>
          <button id="hideBtn" type="button" onClick={handleHide}>
            {hide ? 'Show Completed' : 'Hide Completed'}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
