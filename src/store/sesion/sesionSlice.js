import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        isDay: false,
        error: null,
    },
    reducers:{
        setDay :  (state ,action) => {
            state.isDay = action.payload;
        },
        setError : (state ,action) => {
            state.error = action.payload;
        }
    }
})

export const {setDay, setError} = sessionSlice.actions;
export default sessionSlice.reducer;