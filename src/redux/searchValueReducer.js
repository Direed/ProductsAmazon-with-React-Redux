import {SEARCH_VALUE} from "./types";

const initialState = {
    value: '',
}

export const searchValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VALUE:
            return {...state, value: action.payload}
        default: return state;
    }
}