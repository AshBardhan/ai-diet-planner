import React from 'react';
import './MealPlanner.css';
import axios from 'axios';
import MealPlan from '../Components/MealPlan';
import {Days} from '../shared/days';
import {useEffect} from 'react';
import {mealTypes} from '../shared/mealTypes';
import {API_URL} from '../shared/global';
import {Parser} from 'html-to-react';
import Modal from '../Components/Modal';
import Tile from '../Components/Tile';

const MealPlanner = () => {
	const [mealList, setMealList] = React.useState([]);
	const [selectedFood, setSelectedFood] = React.useState({
		name: '',
		isLoading: false,
		content: '',
	});
	const [showModal, setShowModal] = React.useState(false);
	const htmlParser = new Parser();

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const nutrientList = [
		{key: 'Calories', value: '3000-3200 kcal'},
		{key: 'Carbs', value: '250-400g', color: '#e7a722'},
		{key: 'Fat', value: '80-150g', color: '#52C0BC'},
		{key: 'Protein', value: '200-350g', color: '#976fe8'},
	];

	const onClickMeal = (dailyMealId) => {
		setMealList((oldMealList) => {
			const newMealList = oldMealList.map((oldDailyMeal) => {
				if (oldDailyMeal.id === dailyMealId) {
					return {
						...oldDailyMeal,
						showMeals: !oldDailyMeal.showMeals,
					};
				}
				return oldDailyMeal;
			});
			return newMealList;
		});
	};

	const sendFoodAlternative = (food, mealType, foodIndex, dailyMealIndex, mealIndex) => {
		axios
			.post(`${API_URL}/send-food-alt`, {food, mealType})
			.then((response) => {
				setMealList((oldMealList) => {
					const newMealList = oldMealList.map((oldDailyMeal) => {
						return {
							...oldDailyMeal,
							meals: oldDailyMeal.meals.map((oldMeal) => {
								if (oldMeal.id === mealIndex && oldDailyMeal.id === dailyMealIndex) {
									return {
										...oldMeal,
										isDone: false,
									};
								}
								return oldMeal;
							}),
						};
					});
					newMealList[dailyMealIndex].meals[mealIndex].foods[foodIndex] = response.data[0];
					newMealList[dailyMealIndex].meals[mealIndex].totalCalories = getNewCalorieValue(newMealList[dailyMealIndex].meals[mealIndex].totalCalories);
					newMealList[dailyMealIndex].allMealsDone = newMealList[dailyMealIndex].meals.every((meal) => meal.isDone);
					newMealList[dailyMealIndex].doneCount = newMealList[dailyMealIndex].meals.filter((meal) => meal.isDone).length;
					newMealList[dailyMealIndex].totalCalories = sum(newMealList[dailyMealIndex].meals, 'totalCalories');
					return newMealList;
				});
			})
			.catch((error) => console.log(error));
	};

	const getNewCalorieValue = (num) => {
		let max = num + 10;
		let min = num - 10;
		let range = max - min;
		return Math.floor(Math.random() * range) + min;
	};

	const sendMealAlternative = (mealType, dailyMealIndex, mealIndex) => {
		axios
			.post(`${API_URL}/send-meal-alt`, {mealType})
			.then((response) => {
				setMealList((oldMealList) => {
					const newMealList = oldMealList.map((oldDailyMeal) => {
						return {
							...oldDailyMeal,
							meals: oldDailyMeal.meals.map((oldMeal) => {
								if (oldMeal.id === mealIndex && oldDailyMeal.id === dailyMealIndex) {
									return {
										...oldMeal,
										isDone: false,
									};
								}
								return oldMeal;
							}),
						};
					});
					newMealList[dailyMealIndex].meals[mealIndex].foods = response.data;
					newMealList[dailyMealIndex].meals[mealIndex].totalCalories = getNewCalorieValue(newMealList[dailyMealIndex].meals[mealIndex].totalCalories);
					newMealList[dailyMealIndex].allMealsDone = newMealList[dailyMealIndex].meals.every((meal) => meal.isDone);
					newMealList[dailyMealIndex].doneCount = newMealList[dailyMealIndex].meals.filter((meal) => meal.isDone).length;
					newMealList[dailyMealIndex].totalCalories = sum(newMealList[dailyMealIndex].meals, 'totalCalories');
					return newMealList;
				});
			})
			.catch((error) => console.log(error));
	};

	const updateMealStatus = (dailyMealIndex, mealIndex) => {
		setMealList((oldMealList) => {
			const newMealList = oldMealList.map((oldDailyMeal) => {
				return {
					...oldDailyMeal,
					meals: oldDailyMeal.meals.map((oldMeal) => {
						if (oldMeal.id === mealIndex && oldDailyMeal.id === dailyMealIndex) {
							return {
								...oldMeal,
								isDone: !oldMeal.isDone,
							};
						}
						return oldMeal;
					}),
				};
			});
			newMealList[dailyMealIndex].allMealsDone = newMealList[dailyMealIndex].meals.every((meal) => meal.isDone);
			newMealList[dailyMealIndex].doneCount = newMealList[dailyMealIndex].meals.filter((meal) => meal.isDone).length;
			return newMealList;
		});
	};

	const showFood = async (food) => {
		setSelectedFood((selectedFood) => {
			return {
				...selectedFood,
				name: food,
				isLoading: true,
			};
		});
		openModal();
		await axios.post(`${API_URL}/get-recipe`, {food}).then((response) => {
			setSelectedFood((selectedFood) => {
				return {
					...selectedFood,
					content: response.data,
					isLoading: false,
				};
			});
		});
	};

	const sum = (items, prop) => items.reduce((a, b) => a + b[prop], 0);

	useEffect(() => {
		axios
			.get(`${API_URL}/send-weekly-meal`)
			.then((response) => {
				setMealList(
					Days.map((day, index) => {
						let _mealList = {
							day: `${day}`,
							id: index,
							allMealsDone: false,
							doneCount: 0,
							showMeals: true,
							meals: mealTypes.map((mealType, mealIndex) => {
								return {
									mealType: `${mealType}`,
									id: mealIndex,
									isDone: false,
									...response.data[`${day}`][`${mealType}`],
								};
							}),
						};
						_mealList.totalCalories = sum(_mealList.meals, 'totalCalories');
						return _mealList;
					})
				);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div className="container">
				<div className="dashboard">
					<h2>Daily Nutrition Requirements</h2>
					<p>
						Our program takes a comprehensive approach to nutrition, considering not only the quantity of food you consume but also the quality of the nutrients you consume. We provide you
						with a personalized meal plan that is balanced, delicious, and tailored to your specific needs. Our program will give you the knowledge and tools you need to succeed.
					</p>
					<div className="daily-nutrition-wrapper">
						<div className="chart-container">
							<div className="chart">
								<div
									className="chart-info"
									style={{top: '110px', right: '45px'}}>
									Carbs
									<br />
									40%
								</div>
								<div
									className="chart-info"
									style={{top: '180px', left: '85px'}}>
									Fat
									<br />
									35%
								</div>
								<div
									className="chart-info"
									style={{top: '60px', left: '55px'}}>
									Protein
									<br />
									25%
								</div>
							</div>
						</div>
						<div className="nutrients-container">
							<Tile>
								<div className="nutrients-list">
									{nutrientList.map((nutrientData) => (
										<div className="stat-pair stat-pair--vertical">
											<div
												className="stat-value"
												style={{color: nutrientData.color}}>
												{nutrientData.value}
											</div>
											<div
												className="stat-key"
												style={{color: nutrientData.color}}>
												{nutrientData.key}
											</div>
										</div>
									))}
								</div>
							</Tile>
						</div>
					</div>
					<h2>Weekly Meal Planner</h2>
					<p>
						Welcome to our weekly diet program, designed to provide you with delicious and nutritious meals tailored to your specific dietary needs. We provide a personalized meal plan to
						you for the week, complete with recipes and grocery lists. Our program takes into account your dietary restrictions, preferences, and health goals, ensuring that you receive
						meals that are both satisfying and beneficial for your body.
					</p>
					<MealPlan
						dailyMeals={mealList}
						onClickMeal={onClickMeal}
						updateMealStatus={updateMealStatus}
						sendFoodAlternative={sendFoodAlternative}
						sendMealAlternative={sendMealAlternative}
						showFood={showFood}
					/>

					<Modal
						show={showModal}
						onHide={closeModal}>
						{selectedFood.isLoading ? (
							<div>Loading Food Details...</div>
						) : (
							<>
								<h3>Recipe for '{selectedFood.name}'</h3>
								<div className="recipe-content">{htmlParser.parse(selectedFood.content)}</div>
							</>
						)}
					</Modal>
				</div>
			</div>
		</>
	);
};

export default MealPlanner;
