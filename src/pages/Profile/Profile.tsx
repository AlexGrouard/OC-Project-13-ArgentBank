import EditUser from "../../component/EditUser/EditUser"
import Transactions from "../Transactions/Transactions"
import styles from "./Profile.module.scss"

function Profile(): JSX.Element {
	return (
		<main className={styles.bg_dark}>
			<EditUser />
			<Transactions />
		</main>
	)
}

export default Profile
