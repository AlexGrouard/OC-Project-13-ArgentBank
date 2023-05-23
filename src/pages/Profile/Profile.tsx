import { useEffect } from "react"
import { useDispatch } from "react-redux"
import EditUser from "../../component/EditUser/EditUser"
import { profile } from "../../utils/apiCalls"
import { isLoggedIn, login } from "../../utils/slices/loginSlice"
import {
	modifyFirstName,
	modifyLastName,
} from "../../utils/slices/profileSlice"
import Transactions from "../Transactions/Transactions"
import styles from "./Profile.module.scss"

function Profile(): JSX.Element {
	const dispatch = useDispatch()
	async function logIn() {
		const Localtoken = localStorage.getItem("token")
		const sessionToken = sessionStorage.getItem("token")
		const token = Localtoken || sessionToken
		if (token !== null && token !== undefined && token !== "") {
			dispatch(login({ token, remember: true, isAuthenticated: true }))
			let data = await profile(token)
			if (!data) alert("Error while charging user please retry")
			else {
				dispatch(isLoggedIn(true))
				const { firstName, lastName } = data.body
				dispatch(modifyFirstName(firstName))
				dispatch(modifyLastName(lastName))
			}
		}
	}
	useEffect(() => {
		logIn()
	})
	return (
		<main className={styles.bg_dark}>
			<EditUser />
			<Transactions />
		</main>
	)
}

export default Profile
