import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import SignIn from "../pages/SignIn/SignIn"
import Header from "./Header/Header"
//import PrivateRoute from "./PrivateRoute"
import Footer from "./footer/Footer"

function Layout(): JSX.Element {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<SignIn />} />
				<Route path='/profile' element={<Profile />} />
				{/* 				<PrivateRoute path='/profile'>
					} />
				</PrivateRoute> */}
			</Routes>
			<Footer />
		</Router>
	)
}

export default Layout
