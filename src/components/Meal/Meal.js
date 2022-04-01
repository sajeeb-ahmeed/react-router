import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Meal = () => {
    const { idMeal } = useParams();
    console.log(idMeal);
    const [meal, setMeal] = useState([]);
    console.log(meal);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`
        fetch(url).then(res => res.json()).then(data => setMeal(data.meals))
    }, [idMeal])
    return (
        <div className='container mx-auto row g-5 my-5'>
            <div className='col-md-4 col-12'>
                <img src={meal[0]?.strMealThumb} className='img-fluid' alt="" />
            </div>
            <div className='col-md-7 col-12'>
                <h1>Meal Name : {meal[0]?.strMeal}</h1>
                <h3>Meal Category : {meal[0]?.strCategory}</h3>
                <p>Meal Instructions : {meal[0]?.strInstructions}</p>
                <h1>Meal Measure : {meal[0]?.strMeasure11 ? meal[0]?.strMeasure11 : ' Comeing soon'}</h1>
            </div>

        </div>
    );
};

export default Meal;