import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type {
	LoginResponse,
	ProfilePostResponse,
	ProfilePutResponse,
} from "./Type"

const url = "http://localhost:3001"

export const login = createAsyncThunk(
	"auth/login",
	async ({ email, password }: { email: string; password: string }) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${url}/user/login`, {
				email,
				password,
			})
			return data.token
		} catch (error) {
			console.log(error)
		}
	}
)

export const profile = async (token: string) => {
	const response = await axios.post<ProfilePostResponse>(
		`${url}/user/profile`,
		{ token }
	)
	return response.data
}

export const modifyProfile = async (
	token: string,
	firstName: string,
	lastName: string
) => {
	const response = await axios.put<ProfilePutResponse>(`${url}/user/profile`, {
		token,
		firstName,
		lastName,
	})
	return response.data
}
