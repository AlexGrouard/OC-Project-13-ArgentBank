import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"
import styles from "./Header.module.scss"

function Header(): JSX.Element {
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
			<div className={styles.main_nav_item}>
				<NavLink to='/login'>
					<FontAwesomeIcon icon={icon({ name: "circle-user" })} /> &nbsp;Sign In
				</NavLink>
			</div>
		</nav>
	)
}

export default Header
