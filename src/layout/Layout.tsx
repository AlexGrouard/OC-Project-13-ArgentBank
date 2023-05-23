import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import SignIn from "../pages/SignIn/SignIn"
import { Private } from "../utils/Routing/private"
import { Public } from "../utils/Routing/public"
import Header from "./Header/Header"
import Footer from "./footer/Footer"

function Layout(): JSX.Element {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Public Child={SignIn} />} />
				<Route path='/profile' element={<Private Child={Profile} />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default Layout
