import React from 'react';
import './Account.scss';
import Tile from '../Components/Tile';
import Button from '../Components/Button';
import PhysicalProfile from '../Components/PhysicalProfile';
import profilePicture from '../Images/profile.jpg';
import {useNavigate} from 'react-router-dom';

export default function Account() {
	const navigate = useNavigate();

	const routeChange = (url) => {
		navigate(url);
	};

	return (
		<>
			<div className="container">
				<h1>Your Profile</h1>
				<div className="account-wrapper">
					<div className="account-image">
						<img src={profilePicture} alt="profile" />
					</div>
					<div className="account-form">
						<PhysicalProfile onFormSubmit={() => routeChange('/meal-planner')} />
					</div>
					<div className="account-sidebar">
						<Tile>
							<h2>Current Plan</h2>
							<p>You are currently using our FREE Version</p>
							<Button theme="positive" size="big" isInverted="true" label="Buy PRO Plan" handleClick={() => routeChange('/plans')} />
						</Tile>
					</div>
				</div>
			</div>
		</>
	);
}
