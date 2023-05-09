import { configureStore } from "@reduxjs/toolkit"
//import { useDispatch } from "react-redux"
import loginReducer from "./slices/loginSlice"
import profileReducer from "./slices/profileSlice"

//WHAT TO UPDATE:
// User : Log in and Log out
// Profile : Update first and last name profil
// Transaction : update, modify, delete transactions

export const store = configureStore({
	reducer: {
		login: loginReducer,
		profile: profileReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
