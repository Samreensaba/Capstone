import mainReducer from './reducers/reducers.js'
import {configureStore} from '@reduxjs/toolkit'



export const store = configureStore({
    reducer: mainReducer,
  });
   

export default store