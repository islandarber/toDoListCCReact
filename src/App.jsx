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

  return (
    <>
      <div className="container">

        <h1>Get your Stuff together List 📝</h1>

        <Form setItems={setItems}/>
        <h1>Incomplete</h1>
        <DisplayItems items={items} setItems={setItems}/>
        <h1>Complete</h1>
        <DisplayItems items={items.filter((item)=> item.done === true)} setItems={setItems}/>
      </div>

    </>
  )
}

export default App;
