import React from 'react'
import '../css/Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<table style={{
				width: "100%",
				borderCollapse: "collapse",
				marginLeft: " 40px",
				marginTop: "20px",
			}}>
				<tr>
					<th>Sitemap</th>
					<th>Media</th>
					<th>About Us</th>
				</tr>
				<tr>
					<td>Used Cars for Sale</td>
					<td>Newsroom</td>
					<td>Who We Are</td>
				</tr>
				<tr>
					<td>Car App</td>
					<td>Car Blog</td>
					<td>Our Team</td>
				</tr>
				<tr>
					<td>Lease a Car</td>
					<td>Investor Relations</td>
					<td>Careers</td>
				</tr>
				<tr>
					<td>Model Comparison</td>
					<td>Developer Blog</td>
					<td>FAQs</td>
				</tr>
				<tr>
					<td>Car Loan Calculator</td>
					<td></td>
					<td>Contact Us</td>
				</tr>
				<tr>
					<td>Car Lease Calculator</td>
				</tr>
			</table>
			<ul className="social w3-hide-small">
				<li><img src={require("../assets/social/facebook.png")} alt="Facebook" /></li>
				<li><img src={require("../assets/social/instagram-sketched.png")} alt="Instgram" /></li>
				<li><img src={require("../assets/social/twitter.png")} alt="Twitter" /></li>
				<li><img src={require("../assets/social/whatsapp.png")} alt="Whatsapp" /></li>
				<li><img src={require("../assets/social/youtube.png")} alt="Youtube" /></li>
				<li><img src={require("../assets/social/google-plus.png")} alt="Google+" /></li>
			</ul>

			<div className="copyright">
				&copy;2023<span> Cars Models</span> - Find Your Car
			</div>
		</div>
	)
}
export default Footer;
