import * as productsSelectors from './selectors'
import {asyncActions, slice} from "./products-reducer";
import {appSlice} from "./app-reducer";


const productActions = {
    ...asyncActions,
    ...slice.actions
}

const productReducer = slice.reducer
const appReducer = appSlice.reducer

export {
    productsSelectors,
    productActions,
    productReducer,
    appReducer
}
