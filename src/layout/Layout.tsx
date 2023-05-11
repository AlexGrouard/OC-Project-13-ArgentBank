import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import SignIn from "../pages/SignIn/SignIn"
import Header from "./Header/Header"
import Footer from "./footer/Footer"

function Layout(): JSX.Element {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<SignIn />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default Layout
