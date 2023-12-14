import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])


  return (
    <>
      <div className="container">

        <h1>Get your Stuff together List 📝</h1>

        <form>
          <div id="formDiv">
          <input type="text" placeholder="What do you need to get done?" id="item"/>
          <button id='addBtn' type="submit"><span className="material-symbols-outlined">
            +
            </span></button>

          </div>

          <div id="clearBtnDiv">
            <button id="clearBtn">Clear All Tasks</button>
            <button id="hideBtn" type="button" onclick="hideCompleted()">Hide Completed</button>

          </div>
        </form>


        <div id="taskSections">

          <div id="toDoItemsDiv">
            <h2>TO DO:</h2>
            <div className="myListItems">
            </div>
          </div>

          <div id="completedItemsDiv">
            <h2>COMPLETED:</h2>
            <div className="myCompletedItems">
            </div>
          </div>

        </div>


        </div>

    </>
  )
}

export default App
