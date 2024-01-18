import React from 'react';
import './Header.scss';
import logo from '../Images/logo-white.png';
import Navbar from './Navbar';

export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header-content">
					<div className="header-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="navbar-container">
						<Navbar></Navbar>
					</div>
				</div>
			</div>
		</div>
	);
}
