import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { LoginResponse, LoginState } from "../Type"

let initialState: LoginResponse
//Si local storage est vide on initialise le state avec un token vide sinon on initialise le state avec le token de local storage
localStorage.getItem("token") === null ||
localStorage.getItem("token") === undefined
	? (initialState = { token: "" })
	: (initialState = {
			token: localStorage.getItem("token") as string,
	  })

const loginSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<LoginState>) => {
			state.token = action.payload.token
			if (action.payload.remember)
				localStorage.setItem("token", action.payload.token)
		},
		logout: (state) => {
			state = initialState
			localStorage.removeItem("token")
		},
	},
})

export const { login, logout } = loginSlice.actions
export const selectToken = (state: LoginState) => state.token
export default loginSlice.reducer
