import { useState } from "react";

function AddToDo({addTask}){

  let [inputText,setInputText]=useState()
  let [inputDate,setInputDate]=useState()

  function handleTextChange(e){
    setInputText(e.target.value)
  }
  
  function handleDateChange(e){
    setInputDate(e.target.value)
  }

  function handleAddButtonClick(){
    setInputText('')
    setInputDate()
    addTask(inputText,inputDate)
  }

  return (
      <div className="row">
      <div className="col-5"><input onChange={handleTextChange} type="text" value={inputText} placeholder="Enter the task here"/></div>
      <div className="col-4"><input onChange={handleDateChange} type="date" value={inputDate}/></div>
      <div className="col-3 "><button type="button" className="btn btn-success" onClick={handleAddButtonClick}>Add</button>
      </div>
    </div>
  )
}

export default AddToDo;