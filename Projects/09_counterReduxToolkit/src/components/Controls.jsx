import {useDispatch} from "react-redux";
import {useRef} from "react";
import {increment, decrement, add , subtract} from "../store/counter.js";

function Controls() {
    const addRef = useRef(null);
    const subtractRef = useRef(null);

    const dispatch = useDispatch();

    return (
        <>
            <div className='controls-container'>
                <button type="button" onClick={()=>{dispatch(decrement())}} className="btn btn-primary btn-sm">Decrement</button>
                <button type="button" onClick={()=>{dispatch(increment())}} className="btn btn-primary btn-sm">Increment</button>
            </div>
            <div className='input-container'>
                <div className="input-group mb-3">
                    <input ref={addRef} type="text" className="form-control" placeholder="Add to count.."/>
                <button
                    onClick={(e)=> {
                        dispatch(add({value:addRef.current.value}))
                        addRef.current.value=''
                    }}
                    className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
            <div className="input-group mb-3">
                <input ref={subtractRef} type="text" className="form-control" placeholder="Subtract from count.."/>
                <button
                    onClick={(e)=> {
                        dispatch(subtract({value:subtractRef.current.value}))
                        subtractRef.current.value=''
                    }}
                    className="btn btn-outline-secondary" type="button" id="button-addon2">Subtract</button>
            </div>
            </div>
        </>
    )
}

export default Controls;