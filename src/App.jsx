import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import DisplayItems from './components/DisplayItems'

function App() {
  const data = localStorage.getItem('ToDos')
  const [ToDos, setToDos] = useState(data ? JSON.parse(data) : [])


  useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(ToDos))
  } ,[ToDos])

  const handleDone = (index) => {
    const updatedItems = [...ToDos];
    updatedItems[index].isDone = !updatedItems[index].isDone;
    setToDos(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = ToDos.filter((item) => item.id !== id);
    setToDos(updatedItems);
  };
  


  return (
    <>
      <div className="container">

        <h1>Get your Stuff together List 📝</h1>

        <Form setToDos={setToDos}/>
        <h1>Incomplete</h1>
        <DisplayItems ToDos={ToDos} setToDos={setToDos} handleDone={handleDone} handleDelete={handleDelete}/>
        <h1>Complete</h1>
        <DisplayItems ToDos={ToDos.filter((item)=> item.isDone === true)} setToDos={setToDos}/>
      </div>

    </>
  )
}

export default App;
