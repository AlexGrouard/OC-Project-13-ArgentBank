import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modifyProfile } from "../../utils/apiCalls"
import { selectToken } from "../../utils/slices/loginSlice"
import {
	modifyFirstName,
	modifyLastName,
	selectProfile,
} from "../../utils/slices/profileSlice"
import styles from "./Profile.module.scss"

function Profile(): JSX.Element {
	const { firstName, lastName } = useSelector(selectProfile)
	const token = useSelector(selectToken)
	console.log("token: " + token)
	const [newFirstName, setNewFirstName] = useState(firstName)
	const [newLastName, setNewLastName] = useState(lastName)
	const dispatch = useDispatch()

	async function handleSave(e: any) {
		e.preventDefault()
		const data = await modifyProfile(token, newFirstName, newLastName)
		console.log(data)
		if (!data) alert("Error while charging user please retry")
		else {
			const { firstName, lastName } = data.body
			dispatch(modifyFirstName(firstName))
			dispatch(modifyLastName(lastName))
		}
	}
	const handleEdit = () => {
		return (
			<div className={styles.header}>
				<h1>
					Welcome back
					<br />
					<input
						type='text'
						placeholder={firstName}
						value={newFirstName}
						onChange={(e) => setNewFirstName(e.target.value)}
					/>
					<input
						type='text'
						placeholder={lastName}
						value={newLastName}
						onChange={(e) => setNewLastName(e.target.value)}
					/>
					<button className={styles.save_button} onClick={handleSave}>
						Save
					</button>
					<button className={styles.cancel_button}>Cancel</button>
				</h1>
			</div>
		)
	}
	return (
		<main className={styles.bg_dark}>
			<div className={styles.header}>
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}!
				</h1>
				<button className={styles.edit_button} onClick={handleEdit}>
					Edit Name
				</button>
			</div>
			<h2 className={styles.sr_only}>Accounts</h2>
			<section className={styles.account}>
				<div className={styles.account_content_wrapper}>
					<h3 className={styles.account_title}>Argent Bank Checking (x8349)</h3>
					<p className={styles.account_amount}>$2,082.79</p>
					<p className={styles.account_amount_description}>Available Balance</p>
				</div>
				<div className={styles.account_content_wrapper}>
					<div className={styles.cta}>
						<button className={styles.transaction_button}>
							View transactions
						</button>
					</div>
				</div>
			</section>
			<section className={styles.account}>
				<div className={styles.account_content_wrapper}>
					<h3 className={styles.account_title}>Argent Bank Savings (x6712)</h3>
					<p className={styles.account_amount}>$10,928.42</p>
					<p className={styles.account_amount_description}>Available Balance</p>
				</div>
				<div className={styles.account_content_wrapper}>
					<div className={styles.cta}>
						<button className={styles.transaction_button}>
							View transactions
						</button>
					</div>
				</div>
			</section>
			<section className={styles.account}>
				<div className={styles.account_content_wrapper}>
					<h3 className={styles.account_title}>
						Argent Bank Credit Card (x8349)
					</h3>
					<p className={styles.account_amount}>$184.30</p>
					<p className={styles.account_amount_description}>Current Balance</p>
				</div>
				<div className={styles.account_content_wrapper}>
					<div className={styles.cta}>
						<button className={styles.transaction_button}>
							View transactions
						</button>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Profile
