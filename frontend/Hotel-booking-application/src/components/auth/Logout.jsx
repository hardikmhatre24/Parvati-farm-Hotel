// import React, { useContext } from "react"
// import { AuthContext } from "./AuthProvider"
// import { Link, useNavigate } from "react-router-dom"

// const Logout = () => {
// 	const auth = useContext(AuthContext)
// 	const navigate = useNavigate()

// 	const handleLogout = () => {
// 		auth.handleLogout()
// 		navigate("/", { state: { message: " You have been logged out!" } })
// 	}

// 	return (
// 		<>
// 			<li>
// 				<Link className="dropdown-item" to={"/profile"}>
// 					Profile
// 				</Link>
// 			</li>
// 			<li>
// 				<hr className="dropdown-divider" />
// 			</li>
// 			<button className="dropdown-item" onClick={handleLogout}>
// 				Logout
// 			</button>
// 		</>
// 	)
// }

// export default Logout


import React, { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Link, useNavigate } from "react-router-dom"

const Logout = () => {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = () => {
		auth.handleLogout()
		navigate("/", { state: { message: " You have been logged out!" } })
	}

	return (
		<>
			<li>
				<Link className="dropdown-item custom-dropdown-item" to={"/profile"}>
					👤 My Profile
				</Link>
			</li>

			<li>
				<hr className="dropdown-divider" />
			</li>

			<li>
				<button
					className="dropdown-item custom-dropdown-item logout-btn"
					onClick={handleLogout}>
					🚪 Logout
				</button>
			</li>
		</>
	)
}

export default Logout

