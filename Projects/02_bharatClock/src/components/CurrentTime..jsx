import {useEffect, useState} from "react";

function CurrentTime(){
    const [currentTime, setCurrentTime] = useState()

    useEffect(()=>{
        const intervalId=setInterval(() => {
            setCurrentTime(new Date().toLocaleString())
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])



    return (
        <div className="lead fw-normal">
            The current time is: <span>{currentTime}</span>
        </div>
        
    )
}

export default CurrentTime;