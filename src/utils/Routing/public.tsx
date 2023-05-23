import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectToken } from "../slices/loginSlice"

export const Public = ({ Child }: { Child: React.FC }): JSX.Element => {
	const token = useSelector(selectToken)
	console.log("Public Token" + token)
	return token ? <Navigate to='/profile' /> : <Child />
}
