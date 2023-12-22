import React from "react";
import './MealPlan.css';
import bowl from '../Images/bowl.png'
import Tile from "./Tile";
import BlockList from "./BlockList";
import CheckboxRadio from "./CheckboxRadio";
import IconButton from "./IconButton";


const MealPlan = ({ dailyMeals, onClickMeal, updateMealStatus, sendFoodAlternative, sendMealAlternative, showFood }) => {
    return(
        <>
            {
                dailyMeals.map((dailyMeal, dailyMealIndex) =>
                    (
                        <div className={`plan-card ${dailyMeal.allMealsDone ? 'selected' : ''}`} key={dailyMealIndex}>
                            <div className="plan-heading" onClick={() => onClickMeal(dailyMealIndex)}>
                                <div>
                                    <h4>{dailyMeal.day}</h4>
                                    <p style={{margin: 0}}>{dailyMeal.totalCalories || 0} Calories</p>
                                </div>
                                <div className="plan-quantity cur-p">
                                    <img src={bowl} alt="bowl"/>
                                    <span>{dailyMeal.doneCount}/{dailyMeal.meals.length} Meals&nbsp;&nbsp;&nbsp;{!dailyMeal.showMeals ? '\u25BC' : '\u25B2'}</span>
                                </div>
                            </div>
                            {
                            dailyMeal.showMeals && 
                                (
                                    <div className="plan-day-wise">
                                    {
                                        dailyMeal.meals.map((meal, mealIndex) => 
                                            (
                                            <div className={`plan-day-content`} key={mealIndex}>
                                                <div className="plan-day-refresh">
                                                    <div>
                                                        <h5>{meal.mealType}</h5>
                                                        <p style={{margin: 0}}>{meal.totalCalories} Calories</p>
                                                    </div>
                                                    <div className="plan-meal-consumed">
                                                        <CheckboxRadio
                                                            id={`mealConsumed-${dailyMealIndex}-${mealIndex}`} type="checkbox" label="Consumed"
                                                            checked={meal.isDone} onChange={() => updateMealStatus(dailyMealIndex, mealIndex)} />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <IconButton handleClick={() => sendMealAlternative(meal.mealType, dailyMealIndex, mealIndex)}>
                                                            <svg width="14" height="14" viewBox="0 0 32 32">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.678 7.869l-4.439 4.25a.4.4 0 00.283.683H32V.84a.4.4 0 00-.683-.28l-4.173 3.992A15.978 15.978 0 00.719 11.229l4.583 1.432a11.185 11.185 0 0118.376-4.792zM12.745 19.266a.4.4 0 00-.222-.068H0v11.808a.4.4 0 00.683.282l4.126-3.882a15.983 15.983 0 0026.473-6.634l-4.584-1.433a11.186 11.186 0 01-18.393 4.778l4.502-4.236a.4.4 0 00-.062-.615z" fill="currentColor"/>
                                                            </svg>
                                                        </IconButton>
                                                    </div>
                                                </div>
                                                <Tile themes={['flat']} isSelected={meal.isDone}>
                                                    <BlockList
                                                        list={
                                                            meal.foods.map((food, foodIndex) =>
                                                                (
                                                                <div className="plan-meal-refresh" onClick={() => showFood(food)} key={foodIndex}>
                                                                    <span>{food}</span>
                                                                    <IconButton handleClick={(e) => {
                                                                        e.stopPropagation();
                                                                        sendFoodAlternative(food, meal.mealType, foodIndex, dailyMealIndex, mealIndex);
                                                                    }}>
                                                                        <svg width="12" height="12" viewBox="0 0 32 32">
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M23.678 7.869l-4.439 4.25a.4.4 0 00.283.683H32V.84a.4.4 0 00-.683-.28l-4.173 3.992A15.978 15.978 0 00.719 11.229l4.583 1.432a11.185 11.185 0 0118.376-4.792zM12.745 19.266a.4.4 0 00-.222-.068H0v11.808a.4.4 0 00.683.282l4.126-3.882a15.983 15.983 0 0026.473-6.634l-4.584-1.433a11.186 11.186 0 01-18.393 4.778l4.502-4.236a.4.4 0 00-.062-.615z" fill="currentColor"/>
                                                                        </svg>
                                                                    </IconButton>
                                                                </div>
                                                                )
                                                            )
                                                        }>
                                                    </BlockList>
                                                </Tile>
                                            </div>
                                            )
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                )
            )
            }
        </>
    )
};

export default MealPlan;