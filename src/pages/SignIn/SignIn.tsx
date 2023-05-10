import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
//import { loginSucess, loginFailure, logout } from "../../utils/slices/loginSlice"
import styles from "./SignIn.module.scss"

function SignIn(): JSX.Element {
	let errorMsg = null
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [remember, setRemember] = useState(false)
	const [error, setError] = useState(false)
	const dispatch = useDispatch()

	//LOGIC:
	// take the user input from the page
	// make a post request for the API
	// get the valid token
	// dispatch the new state to the store
	// else display an error message
	// if valid and the remember button is ticked then put the token into localStorage

	useEffect(() => {
	},[])
	const handleSubmit = (e: any) => {
		e.preventDefault()
		dispatch()
	}

	if (error) {
		setError(true)
		return (errorMsg = (
			<p className={styles.error}>Invalid username or password</p>
		))
	}
	return (
		<main className={styles.bg_dark}>
			<section className={styles.sign_in_content}>
				<i className='fa fa-user-circle sign-in-icon'></i>
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
						{errorMsg}
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

export default SignIn
