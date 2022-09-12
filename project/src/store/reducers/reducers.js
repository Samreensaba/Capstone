import {ADD_TO_FAV, REMOVE_FROM_FAV} from '../actions'

const initialState={
    favourites:[]
}

const mainReducer= (state= initialState, action)=>{

    const{type,payload}=action

    switch(type){
        case 'ADD_TO_FAV':
        return{
            ...state,
            favourites:[...state.favourites, payload]
        }
        case 'REMOVE_FROM_FAV':
        return{
            ...state,
            favourites: state.favourites.filter((job) => job._id !== payload._id)
        }
        default:
            return state
    }
}
export default mainReducer