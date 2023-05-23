import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectToken } from "../slices/loginSlice"

export const Private = ({ Child }: { Child: React.FC }): JSX.Element => {
	const token = useSelector(selectToken)
	return token ? <Child /> : <Navigate to='/login' />
}
