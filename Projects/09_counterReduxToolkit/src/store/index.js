import {configureStore, createSlice} from "@reduxjs/toolkit";
import counterSliceReducer from "./counter.js";
import privacySliceReducer from "./privacy.js";

const countStore=configureStore({
    reducer: {
        counter: counterSliceReducer,
        isPrivacy: privacySliceReducer
    }
})

export default countStore;