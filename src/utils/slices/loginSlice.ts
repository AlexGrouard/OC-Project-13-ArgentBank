import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { LoginState } from "../Type"


// TODO:
// Login request :
// Login OK
// Login KO
// Logout
const initialState: 
const loginSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginRequest : (state) => {},
		loginSucess : (state, action: PayloadAction<string>) => {},
		loginFailure :  (state, action: PayloadAction<string>) => {},
		logout:  (state) => {
			state = initialState
		}
	}
})
/* const initialState: LoginState = { isLogged: false, token: null, error: null }

const loginSlice = createSlice({
	name: "auth",
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
}) */
export const { loginRequest, loginSucess, loginFailure, logout } = loginSlice.actions
export default loginSlice.reducer
