import React from 'react'
import '../../css/LogIn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


const login = () => {
	return (
		<div className="login-container">
			<div className="login-parent">
				<div className="login-child">
					<h2 className="log">Log In</h2>

					<form action="#">
						<div className="inputbox">
							<FontAwesomeIcon className='icon' icon={faEnvelope} />
							<input type="email" placeholder="Email" required />
						</div>
						<div className="inputbox">
							<FontAwesomeIcon className='icon' icon={faLock} />
							<input type="password" placeholder="Password" required />
						</div>
						<div className="forget">
							<label for="">
								<input type="checkbox" />Remember Me
								<a href={"/forgetPassword"}>Forget Password?</a></label>
						</div>
						<div className="form-button"><button><a href={"/loggedIn"}>Login</a></button> </div>
						<div className="signup">
							<p>Don't have an account? <a href={"/signUp"}>SignUp</a></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default login;
