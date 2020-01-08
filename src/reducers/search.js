import { SEARCH_CHANGE, MOVIES_FETCH, MOVIES_FAILURE } from "../constants";

const initialState = {
    movie: 'stargate',
    data: [],
    error: false
}

export default function(state = initialState, {type, payload}){
    switch(type){
        case SEARCH_CHANGE: {
            return {
                ...state,
                error: false,
                movie: payload
            }
        }
        case MOVIES_FETCH: {
            return {
                ...state,
                error: false,
                data: payload
            }
        }
        case MOVIES_FAILURE: {
            return {
                ...state,
                error: true
            }
        }
        default: return state
    }
}