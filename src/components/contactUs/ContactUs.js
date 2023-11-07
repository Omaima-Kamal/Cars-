import React from 'react';
import '../../css/ContactUs.css';


const ContactUs = () => {
	return (
		<div className="contact-us text-center">
			<div className="fields">
				<h1>Tell Us What You Opinion</h1>
				<p className="lead">Fell Free To Contact Us Anytime</p>
				{/*  eslint-disable-next-line */}
				<form className="txt" role="form" method="post">
					<input type="text" placeholder="Username" /><br />
					<input type="text" placeholder="Email" /><br />
					<input type="text" placeholder="Cell Phone" /><br />
					<textarea placeholder="Your Messsage"></textarea><br />
					<button>Submit</button>
				</form>
			</div>
		</div>
	)
}
export default ContactUs;
