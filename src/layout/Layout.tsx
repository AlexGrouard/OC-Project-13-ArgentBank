import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import SignIn from "../pages/SignIn/SignIn"
import Transactions from "../pages/Transactions/Transactions"
import User from "../pages/User/User"
import Header from "./Header/Header"
import Footer from "./footer/Footer"

function Layout(): JSX.Element {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<SignIn />}></Route>
				<Route path='/user/:id' element={<User />}></Route>
				<Route path='/profile/:id' element={<Profile />}></Route>
				<Route path='/transactions/:id' element={<Transactions />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default Layout
