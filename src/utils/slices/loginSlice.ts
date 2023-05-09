import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { LoginState } from "../Type"

const initialState: LoginState = { isLogged: false, token: null, error: null }

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		loginSucess: (state, action: PayloadAction<string>) => {
			state.isLogged = true
			state.error = null
			state.token = action.payload
		},
		loginFailure: (state, action: PayloadAction<string>) => {
			state.isLogged = true
			state.error = action.payload
			state.token = null
		},
		logout: (state) => {
			state.isLogged = false
			state.token = null
			state.error = null
		},
	},
})
export const { loginSucess, loginFailure, logout } = loginSlice.actions
export default loginSlice.reducer
