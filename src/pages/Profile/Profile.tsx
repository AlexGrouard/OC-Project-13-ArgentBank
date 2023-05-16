import { useSelector } from "react-redux"
import { selectProfile } from "../../utils/slices/profileSlice"
import styles from "./Profile.module.scss"

function Profile(): JSX.Element {
	const { firstName, lastName } = useSelector(selectProfile)
	console.log(firstName)
	return (
		<main className={styles.bg_dark}>
			<div className={styles.header}>
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}!
				</h1>
				<button className={styles.edit_button}>Edit Name</button>
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
