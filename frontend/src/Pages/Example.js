import React from 'react';
import axios from 'axios';
import CheckboxRadio from '../Components/CheckboxRadio';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
import Tile from '../Components/Tile';
import {API_URL} from '../shared/global';

const Example = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [output, setOutput] = React.useState('');
	const [checkboxValue, setCheckedValue] = React.useState(false);
	let [radioValue, setRadioValue] = React.useState('radio 1');
	const [prompt, setPrompt] = React.useState('');
	const [showModal, setShowModal] = React.useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const handleChange = (event) => {
		setPrompt(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setOutput('');
		await axios
			.post(`${API_URL}/gpt`, {prompt})
			.then((resp) => setOutput(<div>{resp.data}</div>))
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	};

	const onCheckboxChange = (e) => {
		setCheckedValue(!checkboxValue);
	};

	const onRadioChange = (e) => {
		setRadioValue((radioValue) => {
			radioValue = e.target.value;
			return radioValue;
		});
	};

	const handleClick = () => {
		console.log('Tik Tok');
	};

	return (
		<>
			<Tile themes={['shadow']}>
				<form onSubmit={handleSubmit}>
					<Input
						label="Prompt"
						id="hello"
						value={prompt}
						onChange={handleChange}
					/>
					<Button
						type="submit"
						theme="primary"
						isInverted="true"
						label="Submit"
						handleClick={handleClick}
					/>
				</form>

				<br />

				<Tile>
					{isLoading && <div>Loading...</div>}
					{!isLoading && output && <div>{output}</div>}
				</Tile>
			</Tile>

			<br />
			<br />

			<Tile themes={['shadow']}>
				I'm shadow tile
				<CheckboxRadio
					id="checkbox 1"
					type="checkbox"
					label="this is a checkbox"
					checked={checkboxValue}
					onChange={onCheckboxChange}
				/>
				<br />
				<Tile>
					<CheckboxRadio
						id="world 1"
						type="radio"
						label="radio 1"
						value="radio 1"
						checked={radioValue === 'radio 1'}
						onChange={onRadioChange}
					/>
					<CheckboxRadio
						id="world 2"
						type="radio"
						label="radio 2"
						value="radio 2"
						checked={radioValue === 'radio 2'}
						onChange={onRadioChange}
					/>
					<CheckboxRadio
						id="world 3"
						type="radio"
						label="radio 3"
						value="radio 3"
						checked={radioValue === 'radio 3'}
						onChange={onRadioChange}
					/>
				</Tile>
			</Tile>

			<br />
			<br />

			<Tile
				themes={['small', 'clickable']}
				handleClick={openModal}>
				Hi! I am small but clickable
			</Tile>

			<br />
			<br />

			<Modal
				show={showModal}
				onHide={closeModal}>
				<div>Hello World</div>
			</Modal>
		</>
	);
};

export default Example;
