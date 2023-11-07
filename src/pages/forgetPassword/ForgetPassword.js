import React from 'react';
import '../../css/ForgetPassword.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ForgetPassword = () => {
	return (
		<div className="forgetPassword-container">
			<div className="forgetPassword-parent">
				<div className="forgetPassword-child">
					<h2 className="log">Forget Password</h2>

					<form action="#">
						<h5>Enter Your Email That You Used On Your Account <br />We are going to send an email to you to reset your password</h5>
						<div className="inputbox">
							<FontAwesomeIcon className='icon' icon={faEnvelope} />
							<input type="email" placeholder="Enter Your Email" required />
						</div>
						<div className="form-button"><a href={"/"}><button onclick="myfunction()">Send</button></a> </div>
						<div className="forget"><a href={"/login"}>Go Back To login Page</a></div>
						<div id="snackbar"></div>

					</form>
				</div>
			</div>
		</div>
	)
}

export default ForgetPassword;