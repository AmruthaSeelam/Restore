import { configureStore } from "@reduxjs/toolkit";
import { catalogApi } from "./catalogApi";
import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from "./uiSlice";
import { basketApi } from "./basketApi";


export const store=configureStore({
    reducer:{
        [catalogApi.reducerPath]:catalogApi.reducer,
        [basketApi.reducerPath]:basketApi.reducer,
         ui: uiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(catalogApi.middleware,basketApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()