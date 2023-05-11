import axios from "axios"
import type {
	LoginResponse,
	ProfilePostResponse,
	ProfilePutResponse,
	UserProfile,
} from "./Type"

const url = "http://localhost:3001/api/v1"

export async function loginApi(
	email: string,
	password: string
): Promise<LoginResponse> {
	try {
		const { data } = await axios.post(`${url}/user/login`, {
			email,
			password,
		})
		return data.body
	} catch (error) {
		const response: LoginResponse = { token: "error" }
		return response
	}
}

export async function profile(token: string): Promise<UserProfile | undefined> {
	try {
		const { data } = await axios.post(
			`${url}/user/profile`,
			{},
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		console.log(data)
		return data.body
	} catch (error) {
		console.log(error)
	}
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
