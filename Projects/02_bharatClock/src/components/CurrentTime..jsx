function CurrentTime(){
    let currTime=new Date().toLocaleString();
    
    return (
        <div className="lead fw-normal">
            The current time is: <span>{currTime}</span>
        </div>
        
    )
}

export default CurrentTime;