import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import { api } from '@/services/api'

const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
