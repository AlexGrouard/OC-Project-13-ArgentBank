export type UserId = {
	id: number
	email: string
}

export type UserProfile = {
	firstName: string
	lastName: string
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
	body: UserProfile
}

export type LoginState = {
	token: string
	remember: boolean
	isAuthenticated: boolean
}

export type ProfileState = {
	firstName: string
	lastName: string
}

export type PrivateRouteType = {
	component: any
	isAuthenticated: boolean
}
