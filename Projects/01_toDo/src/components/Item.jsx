function Item({item,handleDeleteClick}){
    
    return(
        <div className="row" id={item.id}>
            <div className="col-5">{item.task}</div>
            <div className="col-4"> {item.date}</div>
            <div className="col-3 delete-btn-container"><button type="button" className="btn btn-danger" onClick={()=>{handleDeleteClick(item.id)}}>Delete</button></div>
        </div>
    )
}

export default Item;