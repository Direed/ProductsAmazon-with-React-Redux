import {combineReducers} from "redux";
import {getDataReducer} from "./getDataReducer";
import {searchValueReducer} from "./searchValueReducer";


export const rootReducer = combineReducers({
    dataValue: getDataReducer,
    searchValue: searchValueReducer,
})