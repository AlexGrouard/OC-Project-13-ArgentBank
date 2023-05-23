import { useSelector } from "react-redux"
import EditUser from "../../component/EditUser/EditUser"
import { selectProfile } from "../../utils/slices/profileSlice"
import Transactions from "../Transactions/Transactions"
import styles from "./Profile.module.scss"

function Profile(): JSX.Element {
	const { firstName, lastName } = useSelector(selectProfile)

	const handleEdit = () => {
		return <EditUser />
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
			<Transactions />
		</main>
	)
}

export default Profile
