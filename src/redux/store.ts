import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {configureStore} from '@reduxjs/toolkit'
import {appReducer, productReducer} from "./index";

export const rootReducer = combineReducers({
products:productReducer,
    app:appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// @ts-ignore
window.store = store

