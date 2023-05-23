import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginApi, profile } from "../../utils/apiCalls"
import { isLoggedIn, login } from "../../utils/slices/loginSlice"
import {
	modifyFirstName,
	modifyLastName,
} from "../../utils/slices/profileSlice"
import Profile from "../Profile/Profile"
import styles from "./SignIn.module.scss"

function SignIn(): JSX.Element {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [remember, setRemember] = useState(false)
	const [errorMsg, setError] = useState("")
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const dispatch = useDispatch()

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const { token } = await loginApi(email, password)
		if (token === "error") {
			console.log("error detected")
			setError("Invalid username or password")
		} else {
			setIsAuthenticated(true)
			dispatch(login({ token, remember, isAuthenticated }))
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

	if (isAuthenticated) {
		return <Profile />
	} else {
		return (
			<main className={styles.bg_dark}>
				<section className={styles.sign_in_content}>
					<FontAwesomeIcon icon={icon({ name: "circle-user" })} />
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className={styles.input_wrapper}>
							<label>
								Username
								<input
									type='text'
									name='username'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</label>
						</div>
						<div className={styles.input_wrapper}>
							<label>
								Password
								<input
									type='password'
									name='password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
							{errorMsg && <p className={styles.error}> {errorMsg} </p>}
						</div>
						<div className={styles.input_remember}>
							<label>
								<input
									type='checkbox'
									name='remember-me'
									onChange={(e) => setRemember(true)}
								/>
								Remember me
							</label>
						</div>
						<button className={styles.sign_in_button}>Sign In</button>
					</form>
				</section>
			</main>
		)
	}
}

export default SignIn
