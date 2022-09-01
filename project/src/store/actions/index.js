export const addToFav = (job)=>({
    type: 'ADD_TO_FAV',
    payload: job
})

export const removeFromFav = (job)=>({
    type: 'REMOVE_FROM_FAV',
    payload: job
})