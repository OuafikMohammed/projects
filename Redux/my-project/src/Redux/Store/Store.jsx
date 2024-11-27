import { legacy_createStore } from "redux";
import productReducer from "../Reducer/produitReducer";

const store = legacy_createStore(productReducer)
export default store;