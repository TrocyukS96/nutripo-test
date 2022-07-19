import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RequestStatusType} from "./types";


export const appSlice = createSlice({
    name: 'app',
    initialState:{
        status:'idle' as RequestStatusType
    },
    reducers: {
        setStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
    },

})

