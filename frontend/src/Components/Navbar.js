import React from 'react';
import './Navbar.scss';
import {Link, useLocation} from 'react-router-dom';

export default function Navbar() {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					{currentPath === '/meal-planner' || currentPath === '/account' ? null : (
						<li>
							<Link to="/onboarding">Get Started</Link>
						</li>
					)}
					{currentPath === '/' || currentPath === '/onboarding' ? null : (
						<li>
							<Link to="/meal-planner">Meal Planner</Link>
						</li>
					)}
					{currentPath === '/' || currentPath === '/onboarding' ? null : (
						<li>
							<Link to="/account">Profile</Link>
						</li>
					)}
					<li>
						<Link to="/plans">Plan</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
