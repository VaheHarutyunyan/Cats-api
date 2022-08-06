import { combineReducers } from "redux";
import { catsReducer } from "./cats/cats-reducer";

export const rootReducer = combineReducers({
  cats: catsReducer,
});