import { configureStore } from '@reduxjs/toolkit'
import googleKeepList from '../slice/GoogleKeepSlice'

const store = configureStore({
    reducer: {
        googleKeepList: googleKeepList
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store