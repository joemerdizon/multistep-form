import { configureStore } from '@reduxjs/toolkit'
import  createOrderReducer  from './slices/createOrderSlice'

export const store = configureStore({
  reducer: {
    createOrder: createOrderReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch