import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Product} from "../api/types";
import {productsAPI} from "../api/api";
import {appActions} from "../app";

const {setStatus} = appActions

export const fetchProducts = createAsyncThunk('tasks/fetchTasks', async (param: { data?: number[] }, thunkAPI) => {
    thunkAPI.dispatch(setStatus({status:'loading'}))
    try {
        const res = await productsAPI.getProducts(param.data)
        thunkAPI.dispatch(setStatus({status:'succeeded'}))
        return {products: res.data}
    } catch (error) {
        thunkAPI.dispatch(setStatus({status:'failed'}))
        return thunkAPI.rejectWithValue(null)
    }
})

export const asyncActions = {
    fetchProducts,

}

export const slice = createSlice({
    name: 'products',
    initialState: {
        products: [] as Product[],
        total: 101,
        pageCount: 5,
        portionSize: 5,
        page: 1
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload.products
            })
    }
})


