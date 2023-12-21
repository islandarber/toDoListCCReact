import React from "react";
import '../App.css'

const Form = ({setItems}) => {
 

 const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1000 * new Date().getMilliseconds()),
      title: e.target[0].value,
      isDone: false,
      date: new Date().toLocaleString()
    } 
    setItems((prevStae)=>[...prevStae, newItem]);
    e.target[0].value = "";	
 }
 
  return (
<form onSubmit={handleSubmit}>
<div id="formDiv">
<input type="text" placeholder="What do you need to get done?" id="item"/>
<button id='addBtn' type="submit"><span className="material-symbols-outlined">
  +
  </span></button>

</div>

<div id="clearBtnDiv">
  <button id="clearBtn">Clear All Tasks</button>
  <button id="hideBtn" type="button">Hide Completed</button>

</div>
</form>
  )
};

export default Form;