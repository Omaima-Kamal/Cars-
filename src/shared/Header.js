import React from 'react'
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href={"/"}>Cars</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href={"/"}><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
						<Nav.Link href={"/login"}>Log In</Nav.Link>
						<Nav.Link href={"/contactUs"}>Contact Us</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	)
}
export default Header;
