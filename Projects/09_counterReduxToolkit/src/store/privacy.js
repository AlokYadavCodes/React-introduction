import {createSlice} from "@reduxjs/toolkit";

const privacySlice=createSlice({
    name: "isPrivacy",
    initialState: false,
    reducers: {
        togglePrivacy: (state, action)=>{
            return !state;
        }
    }
})

export const {togglePrivacy}=privacySlice.actions;
export default privacySlice.reducer;