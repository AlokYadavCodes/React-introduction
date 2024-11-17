import {createSlice} from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increment: (state)=>{
            state.value+=1
        },
        decrement: (state)=>{
            state.value-=1
        },
        add: (state, action)=>{
            state.value+=Number(action.payload.value)
        },
        subtract: (state,action)=>{
            state.value-=Number(action.payload.value)
        }
    }
})

export const {increment, decrement, add, subtract }= counterSlice.actions;
export default counterSlice.reducer;