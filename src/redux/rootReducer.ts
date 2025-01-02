import { combineReducers } from '@reduxjs/toolkit'

import { api } from '@/services/api/baseApi'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer
  // Add other reducers here
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
