import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import DisplayItems from './components/DisplayItems';

function App() {
  const data = localStorage.getItem('ToDos');
  const [ToDos, setToDos] = useState(data ? JSON.parse(data) : []);
  const [hide, setHide] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

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

  useEffect(() => {
    // Sort the array whenever ToDos or sortOrder changes
    setToDos([...ToDos].sort(sortByPriority));
  }, [ToDos, sortOrder]);

  return (
    <>
      <div className="container">
        <h1>Get your Stuff together List 📝</h1>
        <Form setToDos={setToDos} handleClear={handleClear} />
        <h1>Incomplete</h1>
        <DisplayItems
          ToDos={ToDos.filter((item) => !item.isDone)}
          setToDos={setToDos}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
        <h1>Complete</h1>
        {!hide && (
          <DisplayItems
            ToDos={ToDos.filter((item) => item.isDone)}
            setToDos={setToDos}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
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
