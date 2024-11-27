import { createSlice } from "@reduxjs/toolkit";
const compteurSlice = createSlice({
    name: "compteur",
    initialState : {
        nombre: 0
    },
    reducers : {
        // actions
        increment: (state,action) => {
            state.nombre += 1
        },
        decrement:  (state,action) => {
            state.nombre -= 1
        },
        reset: (state,action) => {
            state.nombre = 0
        }
    }
})
export const {increment , decrement , reset} = compteurSlice.actions
export default compteurSlice.reducer
// redux toolkit genreates automatically  the actions and the reducer 