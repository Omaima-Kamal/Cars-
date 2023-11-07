import React from 'react';
import '../../css/LoggedIn.css';

const LoggedIn = () => {
	return (
		<div className="loggedIn-container">
			<div className="loggedIn-parent">
				<div className="loggedIn-child">
					<h2 className="log">LogIn</h2>
					<form action="#">
						<h3 className="loggedIn">Logged In Successfully</h3>
						<div className="forget"><a href={"/home"}>Go Back To Home Page</a></div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoggedIn;