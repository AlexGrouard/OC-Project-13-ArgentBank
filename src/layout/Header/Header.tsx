import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"
import {
	isLoggedIn,
	logout,
	selectIsAuthenticated,
} from "../../utils/slices/loginSlice"
import { selectProfile } from "../../utils/slices/profileSlice"
import styles from "./Header.module.scss"

function Header(): JSX.Element {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { firstName } = useSelector(selectProfile)
	const isAuthenticated = useSelector(selectIsAuthenticated)
	let profileMenu

	function signOut() {
		dispatch(logout())
		dispatch(isLoggedIn(false))
		navigate("/login")
	}

	if (isAuthenticated) {
		profileMenu = (
			<div className={styles.activeMenu}>
				<NavLink to='/profile' className={styles.main_nav_item}>
					<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;
					{firstName}
				</NavLink>
				<Link to='/login' onClick={signOut} className={styles.main_nav_item}>
					<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;Sign
					out
				</Link>
			</div>
		)
	} else {
		profileMenu = (
			<NavLink to='/login'>
				<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;Sign In
			</NavLink>
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
