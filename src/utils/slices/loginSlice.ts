import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { LoginState,LoginResponse } from "../Type"

//ternaire if local storage vide token null sinon local storage token
//localStorage.getItem("token") === " " ? (initialState) : (initialState: LoginState = { token: localStorage.getItem("token") })
const initialState: LoginResponse = { token: "" }
const loginSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (
			state,
			action: PayloadAction<LoginState>
		) => {
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
export const selectToken = (state: { auth: LoginState }) => state.auth.token
export default loginSlice.reducer
