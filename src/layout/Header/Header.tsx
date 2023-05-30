import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"
import { profile } from "../../utils/apiCalls"
import {
	isLoggedIn,
	login,
	logout,
	selectIsAuthenticated,
} from "../../utils/slices/loginSlice"
import {
	modifyFirstName,
	modifyLastName,
	selectProfile,
} from "../../utils/slices/profileSlice"
import styles from "./Header.module.scss"

function Header(): JSX.Element {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { firstName } = useSelector(selectProfile)
	const isAuthenticated = useSelector(selectIsAuthenticated)
	let profileMenu

	async function logIn() {
		const Localtoken = localStorage.getItem("token")
		const sessionToken = sessionStorage.getItem("token")
		const token = Localtoken || sessionToken
		if (token !== null && token !== undefined && token !== "") {
			dispatch(login({ token, remember: true, isAuthenticated: true }))
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
	useEffect(() => {
		logIn()
	})

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
					<FontAwesomeIcon icon={icon({ name: "sign-out" })} /> &nbsp;Sign out
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
