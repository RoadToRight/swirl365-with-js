import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isDarkMode: false,
}

export const darkModeSlice = createSlice({
    name:"Darkmode",
    initialState,
    reducers:{
        toggleDarkMode:(state,action) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export const {toggleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;