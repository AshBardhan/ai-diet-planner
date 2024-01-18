import React from 'react';
import './PhysicalProfile.scss';
import Input from './Input';
import CheckboxRadio from './CheckboxRadio';
import Button from './Button';
import SelectBox from './Selectbox';

export default function PhysicalProfile({onFormSubmit}) {
	const [state, setState] = React.useState({
		fullName: 'John Doe',
		age: 31,
		gender: 'male',
		height: 183,
		weight: 78,
		bodyFatPerc: 18,
		workoutRoutine: 2,
		fitnessGoals: 2,
	});

	const workoutRoutineOptions = [
		{value: 0, label: 'Never'},
		{value: 1, label: 'Low: 1-2 times a week'},
		{value: 2, label: 'Moderate: 3-5 times a week'},
		{value: 3, label: 'Advanced: 5+ times a week'},
	];

	const fitnessGoalOptions = [
		{value: 0, label: 'Weight Loss'},
		{value: 1, label: 'Maintainance'},
		{value: 2, label: 'Muscle Growth'},
	];

	const primaryDietOptions = [
		{value: 0, label: 'Anything'},
		{value: 1, label: 'Non Vegetarian'},
		{value: 2, label: 'Vegetarian'},
		{value: 2, label: 'Vegan'},
	];

	const handleChange = (evt) => {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmit();
	};
	const inputStyle = {
		maxWidth: '100%',
	};

	return (
		<>
			<div className="profile-form">
				<h3>Personal Information</h3>
				<p>Our Personal Lifestyle and Fitness Assessment Form uses this information to better understand your health and fitness goals, and create a customized plan that fits your needs.</p>
				<form onSubmit={handleSubmit}>
					<Input label="Name" id="name" name="fullName" value={state.fullName} inlineStyle={inputStyle} onChange={handleChange} />
					<Input label="Age" id="age" type="number" name="age" value={state.age} inlineStyle={inputStyle} onChange={handleChange} />
					<label style={{display: 'inline-block', color: '#1f2532', fontSize: '16px', fontWeight: 500, marginBottom: '5px'}}>Gender</label>
					<div className="profile-flex-wrapper" style={{marginBottom: '20px'}}>
						<div className="profile-flex-child">
							<CheckboxRadio id="male" name="gender" type="radio" label="Male" value="male" checked={state.gender === 'male'} onChange={handleChange} />
						</div>
						<div className="profile-flex-child">
							<CheckboxRadio id="female" name="gender" type="radio" label="Female" value="female" checked={state.gender === 'female'} onChange={handleChange} />
						</div>
					</div>

					<div className="profile-flex-wrapper">
						<div className="profile-flex-child">
							<Input label="Height (in cm)" id="height" name="height" type="number" value={state.height} inlineStyle={inputStyle} onChange={handleChange} />
						</div>
						<div className="profile-flex-child">
							<Input label="Weight (in kg)" id="weight" name="weight" type="number" value={state.weight} inlineStyle={inputStyle} onChange={handleChange} />
						</div>
					</div>
					<Input label="Body Fat (in %age)" id="bodyFatPerc" name="bodyFatPerc" type="number" value={state.bodyFatPerc} inlineStyle={inputStyle} onChange={handleChange} />
					<SelectBox label="Workout Routine" name="workoutRoutine" id="workoutRoutine" options={workoutRoutineOptions} value={state.workoutRoutine} inlineStyle={inputStyle} onChange={handleChange} />
					<SelectBox label="Fitness Goals" name="fitnessGoals" id="fitnessGoals" options={fitnessGoalOptions} value={state.fitnessGoals} inlineStyle={inputStyle} onChange={handleChange} />
					<SelectBox label="Choose your primary diet" name="primaryDiet" id="primaryDiet" options={primaryDietOptions} value={state.primaryDiet} inlineStyle={inputStyle} onChange={handleChange} />

					<div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
						<Button type="submit" size="big" theme="primary" isInverted="true" label="Confirm Details" />
					</div>
				</form>
			</div>
		</>
	);
}
