import AppName from './components/AppName.jsx'
import AddToDo from './components/AddToDo.jsx'
import ToDoItem from './components/ToDoItems.jsx'
import { useState } from 'react'

function App() {

  const [taskArr,setTaskArr]=useState([
    {
      id: 1,
      task: "task1",
      date: "today1"
    },
    
    {
      id: 2,
      task: "task2",
      date: "today2"
    },
    
  ])

  function addTask(inputText,inputDate){
    if(inputText===undefined || inputText.trim()===''){
      alert("Please enter a task.")
      return
    }

    if(inputDate===undefined){
      inputDate="no date assigned"
    }

    let task={
      id: Date.now(),
      task: inputText,
      date: inputDate
    }
    setTaskArr([...taskArr,task])
  }

  function handleDeleteClick(id){
    const updatedArr=taskArr.filter((item)=>id!=item.id)
    setTaskArr(updatedArr)
  }

  return (
    <div className="to-do-container">
      <AppName></AppName>
      <AddToDo addTask={addTask}></AddToDo>
      <div className='task-container'>
        
        <ToDoItem taskArr={taskArr} handleDeleteClick={handleDeleteClick}></ToDoItem>
      </div>
      
    </div>
  )
}

export default App
