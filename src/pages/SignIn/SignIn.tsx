import styles from "./SignIn.module.scss"
function SignIn(): JSX.Element {
	//LOGIC:
	// take the user input from the page
	// Encyrpt the password
	// Request the encrypted password from the api for the user imputed
	// compare the 2 encrypted data
	// if similar update the state with the valid token
	// else display an error message
	// if valid and the remember button is ticked then put the token into localStorage
	return (
		<main className={styles.bg_dark}>
			<section className={styles.sign_in_content}>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Sign In</h1>
				<form>
					<div className={styles.input_wrapper}>
						<label>
							Username
							<input type='text' name='username' />
						</label>
					</div>
					<div className={styles.input_wrapper}>
						<label>
							Password
							<input type='password' name='password' />
						</label>
					</div>
					<div className={styles.input_remember}>
						<label>
							<input type='checkbox' name='remember-me' />
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
