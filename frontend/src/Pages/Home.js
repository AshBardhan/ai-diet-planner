import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
import introImage from '../Images/home-calories.png';
import aboutImage from '../Images/about-us.jpg'
import charImage from '../Images/characters.jpg'
import Button from "../Components/Button";

export default function Home(){
    
    const navigate = useNavigate();
  
    const routeChange = () =>{ 
        navigate('/onboarding');
    }

    const cards=[
        {key:'Daily Nutrition', content:'Proper nutrition planning can support athletic performance by providing the necessary nutrients for muscle growth, repair, and recovery.',photo: require ('../Images/nutrition.jpeg')},
        {key:'More Meals', content:' Splitting meals can also increase nutrient absorption and improve digestion by allowing the body to digest smaller portions more efficiently.', photo: require ('../Images/split-meals.jpg')},
        {key:'Balanced Diet', content:'Customized diet plans are tailored to an individuals unique nutritional needs, preferences, and goals, ensuring that they are receiving the right nutrients in the right amounts.',photo: require ('../Images/customise.png')},
        {key:'Pre/Post Workout Snacks', content:'A healthy diet and regular exercise can help maintain a healthy weight, reduce body fat, and boost the immune system, helping fight off infections and illnesses.',  photo: require ('../Images/workout.jpg')}
    ]

    const benefits=[
        {key:'Create your own eating style', content:'Proper nutrition planning can support athletic performance by providing the necessary nutrients for muscle growth, repair, and recovery.',photo: require ('../Images/choices.png')},
        {key:'Reduce food waste', content:' Splitting meals can also increase nutrient absorption and improve digestion by allowing the body to digest smaller portions more efficiently.', photo: require ('../Images/waste.png')},
        {key:'Drop Anxiety of what to eat', content:'Customized diet plans are tailored to an individuals unique nutritional needs, preferences, and goals, ensuring that they are receiving the right nutrients.',photo: require ('../Images/anxiety.png')},
        {key:'Easy to cook recipies', content:'A healthy diet and regular exercise can help maintain a healthy weight, reduce body fat, and boost the immune system, helping fight off infections and illnesses.',  photo: require ('../Images/recipe.png')}
    ]

    return(
        <>
            <div className="container">
                <section className="home-content">
                    <div className="home-intro">
                        <div className="intro-content">                        
                            <h1>Shaping your diets and lifestyle <span> with cutting-edge technology</span></h1>
                            <p>Say goodbye to generic diets and hello to a personalized nutrition plan. With our AI-powered system, you can finally achieve the body you've always wanted while enjoying delicious, healthy meals that are easy to prepare and follow. <br/>Get started on your journey towards a healthier, happier you today!</p>
                            <Button type="button" size="super-big" theme="primary" isInverted="true" label="Join Us &rarr;" handleClick={routeChange}/>
                        </div>
                    </div>
                    <div className="home-image">
                        <div className="intro-image">
                            <img src={introImage} alt="intro"/>
                        </div>
                    </div>
                </section> 
            </div>    
            <div className="quick-tabs">
                <div className="container">
                    <h2>Shaping your <span>habits & diet to include</span></h2>
                    <div className="quick-tabs-card">
                    {
                        cards.map((nutrientData) => (
                            <div className="card-container">
                                <div className="card-image">
                                    <img src={nutrientData.photo} alt="quick-tiles"/>
                                </div>
                                <h6 className="card-title">{nutrientData.key}</h6>
                                <p className="card-desc">{nutrientData.content}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div> 
            <div className="about-us">
                <div className="container">
                    <section className="about-container">
                        <div className="about-image-container">
                            <div className="about-image">
                                <img src={aboutImage} alt="about"/>
                            </div>
                        </div>
                        <div className="about-intro-container">
                            <div className="about-content">                        
                                <h2>Want to know<br/><span> What we do & How we do it</span></h2>
                                <p>At Shape, We believe that everyone deserves access to personalized nutrition plans that take into account their unique needs and preferences. </p>
                                <p>That's why we have developed an innovative AI-powered system that analyzes your personal data, including your dietary restrictions, fitness goals, and food preferences, to create a custom meal plan just for you.</p>
                                <p> Our team of experts in the fields of nutrition and AI work tirelessly to ensure that our algorithm stays up-to-date with the latest research and advances in the industry.</p>
                            </div>
                        </div>
                    </section>  
                </div>
            </div> 
            <div className="benefits-tabs">
                <div className="container">
                    <h2>With Shape <span>eating smart has never been easier</span></h2>
                    <div className="benefits-tabs-card">
                    {
                        benefits.map((nutrientData) => (
                            <div className="benefits-container">
                                <div className="benefits-image">
                                    <img src={nutrientData.photo} alt="benefits-tiles"/>
                                </div>
                                <div className="benefits-title">{nutrientData.key}</div>
                                <div className="benefits-desc">{nutrientData.content}</div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>  
            <div className="container">
                <section className="steps-container">
                    <div className="steps-image-container">
                        <div className="steps-image">
                            <img src={charImage} alt="steps"/>
                        </div>
                    </div>
                    <div className="steps-intro-container">
                        <div className="steps-content">                        
                            <h2>Shape your meals in <br/><span> 4 Easy Steps</span></h2>
                            <ul className="steps-list">
                                <li>
                                    <h5>
                                        1. Create
                                    </h5>
                                    <p>
                                        Tell us about yourself, your diet preferences, and your goals. We'll create meal plans specific to your needs in seconds! You always have the option to tweak your settings later.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        2. Collect
                                    </h5>
                                    <p>
                                        Review your plan to make sure everything looks good, swapping out anything you don't like. Then, use the grocery list to shop for your ingredients.                                
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                    3. Cook
                                    </h5>
                                    <p>
                                        Enjoy making and eating delicious meals without the stress of planning. Not only will you know you're eating better, you'll have more time and energy for other things.                                
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        4. Conquer
                                    </h5>
                                    <p>
                                        Make adjustments to your preferences, discover new meals, or put your favorites on repeat. Review nutrition stats, track weight progress, and achieve your goals!
                                    </p>
                                </li>
                            </ul>
                            <Button type="button" size="super-big" theme="primary" isInverted="true" label="Get Started &rarr;" handleClick={routeChange}/>
                        </div>
                    </div>
                </section>  
            </div>
        </>
    )
}