import { configureStore } from "@reduxjs/toolkit";
import compteurReducer from './features/compteur/countSlice'
// on peut nommer compteurReducer par n'importe quel nom car elle est exporte par defaut


const store = configureStore({
    reducer: {
        compteur : compteurReducer,
    }
})
export default store ;