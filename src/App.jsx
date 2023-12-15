import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import DisplayItems from './components/DisplayItems'

function App() {
  const [items, setItems] = useState([])
  localStorage.setItem('items', JSON.stringify(items));

  return (
    // <div className="container">
    //   <Form setTodos={setTodos} />
    //   <DisplayToDos items={items} setItems={setItems} />
    // </div>



    <>
      <div className="container">

        <h1>Get your Stuff together List 📝</h1>

        <Form setItems={setItems}/>
        <DisplayItems items={items}/>
      </div>

    </>
  )
}

export default App;
