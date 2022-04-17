import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
})