import Item from "./item";

function ToDoItems(props){
    let taskArr=props.taskArr
    let handleDeleteClick=props.handleDeleteClick
    // console.log(taskArr)
    
    if(taskArr.length===0){
        return (
            <div>
                No item present!
            </div>
        )
    }
    
    return (
        <div className='task-container'>
            {taskArr.map((item, index)=> <Item key={index} item={item} handleDeleteClick={handleDeleteClick}></Item>)}
            
        </div>
    )
}

export default ToDoItems;