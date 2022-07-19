import {AppRootStateType} from "./types";

export const products = (state: AppRootStateType) => state.products.products
export const total = (state: AppRootStateType) => state.products.total
export const pageCount = (state: AppRootStateType) => state.products.pageCount
export const portionSize = (state: AppRootStateType) => state.products.portionSize
export const page = (state: AppRootStateType) => state.products.page

export const status = (state:AppRootStateType)=>state.app.status