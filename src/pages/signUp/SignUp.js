import React from 'react';
import '../../css/SignUp.css';

const SignUp = () => {
	return (
		<div className="signUp-container">
			<div className="signUp-parent">
				<div className="signUp-child">
					<h2 className="log">Sign Up</h2>
					<form action="#">
						<div className="inputbox">
							<input type="text" placeholder="First Name" />
						</div>
						<div className="inputbox">
							<input type="text" placeholder="Last Name" />
						</div>
						<div className="inputbox">
							<input type="password" placeholder="Password" />
						</div>
						<div className="inputbox">
							<input type="password" placeholder="Confirm Password" />
						</div>
						<div className="inputbox">
							<input type="email" placeholder="Email" />
						</div>
						<div className="inputbox">
							<input type="text" placeholder="Address" />
						</div>
						<div className="inputbox">
							<input type="tel" max={10} placeholder="Phone Number" />
						</div>
						<div className="form-button"><a href='cong.html'><button value="Sign Up" onclick="mysign()">SignUp</button></a> </div>
						<div className="log-in">
							<p>Already have an account? <a href={"/login"}>LogIn</a></p>
						</div>
						<div id="msg"></div>

					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp;