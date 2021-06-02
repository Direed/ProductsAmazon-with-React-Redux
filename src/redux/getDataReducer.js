import {FILTER_DATA, GET_DATA} from "./types";

const initialState = {
    data: [],
    filterMas: [],
}

export const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, data: [...action.payload], filterMas: [...action.payload]}
        case FILTER_DATA:
            if(action.payload === ''){
                return {...state, filterMas: [...state.data]}
            } else {
                const filterData  = state.data.filter((item) => {
                    return item.name.indexOf(action.payload) !== -1;
                })
                return {...state, filterMas: [...filterData]}
            }
        default: return state;
    }
}