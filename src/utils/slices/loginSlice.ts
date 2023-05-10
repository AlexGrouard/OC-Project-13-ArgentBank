import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { LoginState } from "../Type"


// TODO:
// Login request :
// Login OK
// Login KO
// Logout
const initialState: LoginState = { email:"" , password:"", isLogged: false, token: null, error: null }
const loginSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
/* 		loginRequest : (state, action: PayloadAction<string>) => {
			state.email = action.payload.email
			state.password = action.payload.password
		}, */
		loginSucess : (state, action: PayloadAction<string>) => {
			state.isLogged = true
			state.error = null
			state.token = action.payload
		},
		loginFailure :  (state, action: PayloadAction<string>) => {},
		logout:  (state) => {
			state = initialState
		}
	}
})

export const { loginSucess, loginFailure, logout } = loginSlice.actions
export default loginSlice.reducer
