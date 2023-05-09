import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface ProfileState {
	firstName: string
	lastName: string
}

//the initial state of the reducer is supposed to be what is currently in the DB
const initialState = { firstName: "", lastName: "" } as ProfileState

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		modifyFirstName: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload
		},
		modifyLastName: (state, action: PayloadAction<string>) => {
			state.lastName = action.payload
		},
	},
})
export const { modifyFirstName, modifyLastName } = profileSlice.actions
export default profileSlice.reducer
