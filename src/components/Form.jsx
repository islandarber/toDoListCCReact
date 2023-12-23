import React from "react";
import '../App.css'
import { useState } from 'react'

const Form = ({setToDos}) => {

  const [priority, setPriority] = useState("");
  const handleChange = (e) => { 
    setPriority(e.target.value);

  }


 

 const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1000 * new Date().getMilliseconds()),
      title: e.target[0].value,
      isDone: false,
      date: new Date().toLocaleString(),
      priority: priority
    } 
    if (e.target[0].value === "" || priority === "") {
      alert("Please fill out the form correct, task and priority");
      return;
    }

    console.log(newItem);

    setToDos((prevStae)=>[...prevStae, newItem]);
    e.target[0].value = "";	
    setPriority("");
 }
 
  return (
<form onSubmit={handleSubmit}>
<div id="formDiv">
<input type="text" placeholder="What do you need to get done?" className="placeholder"/>
  <div className="radio_buttons">
    <input type="radio" id="low-priorty" name="priority" value="low" checked={priority === 'low'} onChange={(e)=>handleChange(e)}/>
      <label htmlFor="low" className="low__prior">Low Priority</label><br/>
      <input type="radio" id="high-priorty" name="priority" value="high" checked={priority === 'high'} onChange={(e)=>handleChange(e)}/>
      <label htmlFor="high" className="high__prior">High priority</label>
  </div>
<button id='addBtn' type="submit"><span className="material-symbols-outlined">
  +
  </span></button>

</div>

</form>
  )
};

export default Form;