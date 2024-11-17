import {createStore} from "redux";

const INITIAL_COUNT={count:  1, countIsPrivate: false}
const countStore=createStore(countReducer)


function countReducer(count=INITIAL_COUNT, action){
    let newCount=count;
    if (action.type==='INCREMENT'){
        newCount={...newCount, count: newCount.count+1}
    } else if (action.type==='DECREMENT'){
        newCount= {...newCount, count: newCount.count-1}
    } else if (action.type==='ADD'){
        newCount={...newCount, count: newCount.count+ Number(action.payload.value)}
    } else if (action.type==='SUBTRACT'){
        newCount={...newCount, count: newCount.count - Number(action.payload.value)}
    } else if (action.type==='TOGGLE_PRIVACY'){
        newCount={...newCount, countIsPrivate: !newCount.countIsPrivate}
    }
    return newCount;
}


export default countStore;