import { SEARCH_CHANGE, MOVIES_FETCH, MOVIES_FAILURE } from "../constants"

export const searchChange = text => {
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const getMovies = text => async dispatch => {
    try {
        const url = `http://api.tvmaze.com/search/shows?q=${text}`;
        const res = await fetch(url, {method: 'GET'})
        const data = await res.json()
        dispatch({type: MOVIES_FETCH, payload: data})
    } catch (error) {
        dispatch({type: MOVIES_FAILURE, payload: error})
    }
}