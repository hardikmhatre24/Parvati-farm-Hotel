// import React, { useState } from "react"
// import { loginUser } from "../utils/ApiFunctions"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import { useAuth } from "./AuthProvider"

// const Login = () => {
// 	const [errorMessage, setErrorMessage] = useState("")
// 	const [login, setLogin] = useState({
// 		email: "",
// 		password: ""
// 	})

// 	const navigate = useNavigate()
// 	const auth = useAuth()
// 	const location = useLocation()
// 	const redirectUrl = location.state?.path || "/"

// 	const handleInputChange = (e) => {
// 		setLogin({ ...login, [e.target.name]: e.target.value })
// 	}

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		const success = await loginUser(login)
// 		if (success) {
// 			const token = success.token
// 			auth.handleLogin(token)
// 			navigate(redirectUrl, { replace: true })
// 		} else {
// 			setErrorMessage("Invalid username or password. Please try again.")
// 		}
// 		setTimeout(() => {
// 			setErrorMessage("")
// 		}, 4000)
// 	}

// 	return (
// 		<section className="container col-6 mt-5 mb-5">
// 			{errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
// 			<h2>Login</h2>
// 			<form onSubmit={handleSubmit}>
// 				<div className="row mb-3">
// 					<label htmlFor="email" className="col-sm-2 col-form-label">
// 						Email
// 					</label>
// 					<div>
// 						<input
// 							id="email"
// 							name="email"
// 							type="email"
// 							className="form-control"
// 							value={login.email}
// 							onChange={handleInputChange}
// 						/>
// 					</div>
// 				</div>

// 				<div className="row mb-3">
// 					<label htmlFor="password" className="col-sm-2 col-form-label">
// 						Password
// 					</label>
// 					<div>
// 						<input
// 							id="password"
// 							name="password"
// 							type="password"
// 							className="form-control"
// 							value={login.password}
// 							onChange={handleInputChange}
// 						/>
// 					</div>
// 				</div>

// 				<div className="mb-3">
// 					<button type="submit" className="btn btn-hotel" style={{ marginRight: "10px" }}>
// 						Login
// 					</button>
// 					<span style={{ marginLeft: "10px" }}>
// 						Don't' have an account yet?<Link to={"/register"}> Register</Link>
// 					</span>
// 				</div>
// 			</form>
// 		</section>
// 	)
// }

// export default Login



import React, { useState } from "react";
import { loginUser } from "../utils/ApiFunctions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./Login.css";

const Login = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [login, setLogin] = useState({
		email: "",
		password: ""
	});

	const navigate = useNavigate();
	const auth = useAuth();
	const location = useLocation();
	const redirectUrl = location.state?.path || "/";

	const handleInputChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const success = await loginUser(login);

		if (success) {
			const token = success.token;
			auth.handleLogin(token);
			navigate(redirectUrl, { replace: true });
		} else {
			setErrorMessage("Invalid username or password. Please try again.");
		}

		setTimeout(() => {
			setErrorMessage("");
		}, 4000);
	};

	return (
		<div className="login-page">
			<div className="login-card">
				<div className="login-header">
					<h1>Welcome Back</h1>
					<p>Sign in to continue your hotel journey</p>
				</div>

				{errorMessage && (
					<div className="alert alert-danger">
						{errorMessage}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="form-group mb-4">
						<label>Email Address</label>
						<input
							type="email"
							name="email"
							className="form-control custom-input"
							value={login.email}
							onChange={handleInputChange}
							placeholder="Enter your email"
						/>
					</div>

					<div className="form-group mb-4">
						<label>Password</label>
						<input
							type="password"
							name="password"
							className="form-control custom-input"
							value={login.password}
							onChange={handleInputChange}
							placeholder="Enter your password"
						/>
					</div>

					<button type="submit" className="login-btn">
						Login
					</button>

					<div className="register-text">
						Don't have an account?
						<Link to="/register"> Register Now</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

