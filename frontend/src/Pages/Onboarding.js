import React from "react";
import './Onboarding.css';
import PhysicalProfile from "../Components/PhysicalProfile";
import { useNavigate } from "react-router-dom";

export default function Onboarding(){
    const navigate = useNavigate();

    const routeChange = () =>{ 
        navigate('/meal-planner');
    }

    return(
        <>
        <div className="container">
            <div style={{display: 'flex', justifyContent: 'center'}}>
               <PhysicalProfile onFormSubmit={routeChange}/>
            </div>
        </div>
        </>
    )
}