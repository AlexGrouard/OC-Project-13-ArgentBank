import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./slices/loginSlice"
import profileReducer from "./slices/profileSlice"

export const store = configureStore({
	reducer: {
		auth: loginReducer,
		profile: profileReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
