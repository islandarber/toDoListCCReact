import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import DisplayItems from './components/DisplayItems'

function App() {
  const [items, setItems] = useState([])
  // if (localStorage.getItem('items')) {
  //   items = JSON.parse(localStorage.getItem('items'))
  // }

  localStorage.setItem('items', JSON.stringify(items))

  const handleDone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isDone = !updatedItems[index].isDone;
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isEditing = !updatedItems[index].isEditing;
    setItems(updatedItems);
  };

  return (
    <>
      <div className="container">

        <h1>Get your Stuff together List 📝</h1>

        <Form setItems={setItems}/>
        <h1>Incomplete</h1>
        <DisplayItems items={items} setItems={setItems} handleDone={handleDone} handleDelete={handleDelete} handleEdit={handleEdit}/>
        <h1>Complete</h1>
        <DisplayItems items={items.filter((item)=> item.isDone === true)} setItems={setItems}/>
      </div>

    </>
  )
}

export default App;
