import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import DisplayItems from './components/DisplayItems'

function App() {
  
  const data = localStorage.getItem('ToDos')
  const [ToDos, setToDos] = useState(data ? JSON.parse(data) : [])
  const [hide , setHide] = useState(false);
  
  
    const handleClear = () => {
      setToDos([]);
    }
  
    const handleHide = (e) => {
      setHide(!hide);
      if (hide) {
        e.target.innerText = "Hide Completed";
      } else {
        e.target.innerText = "Show Completed";
      }

    }

  useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(ToDos))
  } ,[ToDos])

  const handleDone = (id) => {
    console.log('im clicked');
    const updatedItems = ToDos.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    })
    console.log(updatedItems);
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

        <Form setToDos={setToDos} handleClear={handleClear}/>
        <h1>Incomplete</h1>
        <DisplayItems ToDos={ToDos.filter((item)=> item.isDone === false)} setToDos={setToDos} handleDone={handleDone} handleDelete={handleDelete}/>
        <h1>Complete</h1>
        {!hide &&(<DisplayItems ToDos={ToDos.filter((item)=> item.isDone === true)} setToDos={setToDos} handleDone={handleDone} handleDelete={handleDelete}/>)}
        <div id="clearBtnDiv">
        <button id="clearBtn" onClick={()=> handleClear()}>Clear All Tasks</button>
        <button id="hideBtn" type="button" onClick={(e)=> handleHide(e)}>Hide Completed</button>

        </div>


      </div>

    </>
  )
}

export default App;
