import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { LoginState } from "../Type"

//Si local storage est vide on initialise le state avec un token vide sinon on initialise le state avec le token de local storage
let initialState: LoginState
localStorage.getItem("token") === null ||
localStorage.getItem("token") === undefined
	? (initialState = { token: "", remember: false, isAuthenticated: false })
	: (initialState = {
			token: localStorage.getItem("token") as string,
			remember: false,
			isAuthenticated: false,
	  })

const loginSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<LoginState>) => {
			state.token = action.payload.token
			sessionStorage.setItem("token", action.payload.token)
			isLoggedIn(action.payload.isAuthenticated)
			if (action.payload.remember)
				localStorage.setItem("token", action.payload.token)
		},
		logout: (state) => {
			state.token = ""
			localStorage.clear()
			sessionStorage.clear()
		},
		isLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.isAuthenticated = action.payload
		},
	},
})

export const { login, logout, isLoggedIn } = loginSlice.actions
export const selectToken = (state: { auth: LoginState }) => state.auth.token
export const selectIsAuthenticated = (state: { auth: LoginState }) =>
	state.auth.isAuthenticated
export default loginSlice.reducer
