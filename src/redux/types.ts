import {rootReducer, store} from "./store";

export type RootReducerType = typeof rootReducer
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
