import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modifyProfile } from "../../utils/apiCalls"
import { selectToken } from "../../utils/slices/loginSlice"
import {
	modifyFirstName,
	modifyLastName,
	selectProfile,
} from "../../utils/slices/profileSlice"
import styles from "./EditUser.module.scss"

function EditUser(): JSX.Element {
	const { firstName, lastName } = useSelector(selectProfile)
	const token = useSelector(selectToken)
	const [newFirstName, setNewFirstName] = useState(firstName)
	const [newLastName, setNewLastName] = useState(lastName)
	const [edit, setEdit] = useState(false)
	const dispatch = useDispatch()

	const handleEdit = () => {
		setEdit(true)
	}
	const handleCancel = () => {
		setEdit(false)
	}

	async function handleSave(e: any) {
		e.preventDefault()
		const data = await modifyProfile(token, newFirstName, newLastName)
		if (!data) alert("Error while charging user please retry")
		else {
			const { firstName, lastName } = data.body
			dispatch(modifyFirstName(firstName))
			dispatch(modifyLastName(lastName))
		}
		setEdit(false)
	}
	if (edit) {
		return (
			<div className={styles.header}>
				<h1>
					Welcome back
					<br />
					<div className={styles.input_wrapper}>
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
					</div>
					<button className={styles.save_button} onClick={handleSave}>
						Save
					</button>
					<button className={styles.cancel_button} onClick={handleCancel}>
						Cancel
					</button>
				</h1>
			</div>
		)
	} else
		return (
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
		)
}

export default EditUser
