import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../components/User/userSlice'

export const store = configureStore({
    reducer : {
        users :  userSlice,
    }
})