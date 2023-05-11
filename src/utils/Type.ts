export type UserId = {
	id: number
	email: string
}

export type UserProfile = {
	firstName: string
	lastName: string
	id: number
	email: string
}

export type LoginResponse = {
	token: string
}

export type ProfilePostResponse = {
	status: number
	message: string
	body: UserProfile
}

export type ProfilePutResponse = {
	status: number
	message: string
	body: UserId
}

export type LoginState = {
	token: string
	remember: boolean
}

export type ProfileState = {
	firstName: string
	lastName: string
}
