import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"
import { logout, selectToken } from "../../utils/slices/loginSlice"
import { selectProfile } from "../../utils/slices/profileSlice"
import styles from "./Header.module.scss"

function Header(): JSX.Element {
	const token = useSelector(selectToken)
	const dispatch = useDispatch()
	let profileMenu
	const { firstName } = useSelector(selectProfile)
	function signOut() {
		dispatch(logout())
	}
	console.log(token)
	if (!token) {
		profileMenu = (
			<NavLink to='/login'>
				<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;Sign In
			</NavLink>
		)
	} else {
		profileMenu = (
			<div className={styles.activeMenu}>
				<NavLink to='/profiles'>
					<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;
					{firstName}
				</NavLink>
				<button onClick={signOut}>
					<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;Sign
					out
				</button>
			</div>
		)
	}
	return (
		<nav className={styles.main_nav}>
			<Link to='/'>
				<img
					className={styles.main_nav_logo_image}
					src={Logo}
					alt='Argent Bank Logo'
				/>
				<h1 className={styles.sr_only}>Argent Bank</h1>
			</Link>
			<div className={styles.main_nav_item}></div>
			{profileMenu}
		</nav>
	)
}

export default Header
