import {FILTER_DATA, GET_DATA, SEARCH_VALUE} from "./types";

export function getData(newData) {
    return {
        type: GET_DATA,
        payload: newData,
    }
}

export function filterData(searchElement){
    return {
        type: FILTER_DATA,
        payload: searchElement,
    }
}

export function searchValue(searchValue) {
    return {
        type: SEARCH_VALUE,
        payload: searchValue,
    }
}


