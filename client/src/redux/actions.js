import axios from 'axios';
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export let GET_GAMES = 'GET_GAME';
export let GET_GENRES = 'GET_GENRES';
export let ADD_GAME = 'ADD_GAME';
export let GET_DETAILS = 'GET_DETAILS';
export let GET_BY_NAME = 'GET_BY_NAME';
export let GET_PLATFORM = 'GET_PLATFORM';
export let FILTER_GENRES = 'FILTER_GENRES';
export let FILTER_RATING = 'FILTER_RATING';
export let FILTER_ALPHABETICALLY = 'FILTER_ALPHABETICALLY';
export let GET_DB = 'GET_DB';


export const getGames = () => {
    return async (dispatch) => {
        try {
            let response = (await axios('/videogames')).data
            return dispatch({
                type:GET_GAMES,
                payload: response 
            })
        } catch (error) {
            return error
        }
    }
}

export const getGenres = () => {
    return async (dispatch) => {
    try {
        let response = (await axios('/genres')).data
        return dispatch({
            type: GET_GENRES,
            payload: response
        })
    } catch (error) {
        return error
    }
    }
}

export const addGame = (payload) => {
    return async () => {
        try {
            let response = await axios.post('/videogames', payload)
            return response
        } catch (error) {
            return alert('Game not created')
        }
    }
}

export const getDetails = (id) => {
    return async (dispatch) => {
        try {
            let response = (await axios(`/videogames/${id}`)).data
            return dispatch({
                type: GET_DETAILS,
                payload: response
            })
        } catch (error) {
            return error
        }
    }
}

export const getByName = (payload) => {
    return async (dispatch) => {
        try {
            let response = (await axios(`/videogames?name=${payload}`)).data
            return dispatch({
                type: GET_BY_NAME,
                payload: response
            })
        } catch (error) {
            return alert('¡Game not found!')
        }
    }
}

export const getPlatform = () => {
    return async (dispatch) => {
        try {
            let response = (await axios('/platform')).data
            return dispatch({
                type: GET_PLATFORM,
                payload: response
            })
        } catch (error) {
            return error
        }
    }
}

export const getDb = () => {
    return async (dispatch) => {
        try {
            let response = (await axios('/db')).data
            return dispatch({
                type: GET_DB,
                payload: response
            })
        } catch (error) {
            return error
        }
    }
}


export const filterGenres = (payload) => {
        return {
            type:FILTER_GENRES,
            payload
        }        
}

export const filterAlphabetically = (payload) => {
    return {
        type:FILTER_ALPHABETICALLY,
        payload
    }
}

export const filterRating = (payload) => {
    return {
        type:FILTER_RATING,
        payload
    }
}
