import React from 'react';
import Tile from '../Components/Tile';
import Button from '../Components/Button';
import crown from '../Images/crown.png';

export default function Plans() {
	return (
		<>
			<h1 style={{textAlign: 'center', fontSize: '48px', fontWeight: 'bold'}}>
				Shape your goals faster <br /> <span style={{color: '#bcbcbc'}}>Upgrade to PRO plan today</span>
			</h1>
			<div style={{display: 'flex', justifyContent: 'center', columnGap: 30}}>
				<div style={{width: '400px', textAlign: 'center'}}>
					<Tile themes={['shadow']}>
						<div style={{padding: '20px 0'}}>
							<h4 style={{marginBottom: 0, fontSize: '32px', color: '#07b14a', marginLeft: '-25px'}}>Free</h4>
							<h2 style={{fontSize: '54px', color: '#07b14a', fontWeight: 600}}>
								$0<sup style={{fontSize: '18px'}}>/mo</sup>
							</h2>
							<ul style={{listStyle: 'none', fontSize: '16px', marginBottom: '50px'}}>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Generate daily meal plans</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Schedule meal plans (2 weeks ahead)</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Track your Progress (upto 3 months)</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'red'}}>&#x2715;</span>
									<span>Print and email your plans</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'red'}}>&#x2715;</span>
									<span>Expert nutritional advice</span>
								</li>
							</ul>
							<Button size="giant" label="Get Started" />
						</div>
					</Tile>
				</div>
				<div style={{width: '400px', textAlign: 'center'}}>
					<Tile themes={['shadow']}>
						<div style={{padding: '20px 0'}}>
							<h4 style={{marginBottom: 0, fontSize: '32px', color: '#3892e3'}}>
								<img src={crown} alt="crown" width="30px" height="30px" style={{marginRight: '5px', marginLeft: '-35px'}} />
								PRO
							</h4>
							<h2 style={{fontSize: '54px', color: '#3892e3', fontWeight: 600}}>
								$30<sup style={{fontSize: '18px'}}>/mo</sup>
							</h2>
							<ul style={{listStyle: 'none', fontSize: '16px', marginBottom: '50px'}}>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Generate daily meal plans</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Schedule meal plans (Unlimited)</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Track your Progress (Unlimited)</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Print and email your plans</span>
								</li>
								<li style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
									<span style={{flexShrink: 0, width: '30px', fontSize: '20px', fontWeight: 'bold', color: 'green'}}>&#x2713;</span>
									<span>Expert nutritional advice</span>
								</li>
							</ul>
							<Button theme="primary" size="giant" isInverted="true" label="Upgrade to PRO Plan" />
						</div>
					</Tile>
				</div>
			</div>
		</>
	);
}
