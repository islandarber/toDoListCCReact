import React from "react";
import '../App.css'

const Form = ({setToDos, handleClear}) => {


 

 const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1000 * new Date().getMilliseconds()),
      title: e.target[0].value,
      isDone: false,
      date: new Date().toLocaleString()
    } 
    if (e.target[0].value === "") {
      alert("Please enter a task");
      return;
    }
    setToDos((prevStae)=>[...prevStae, newItem]);
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

</form>
  )
};

export default Form;