import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Mealdb = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    // console.log(meals);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url).then(res => res.json()).then(data => setMeals(data.meals))
    }, [searchText])

    const resturant = e => {
        setSearchText(e.target.value)
    }
    return (
        <div>

            <div className='container my-4 '>
                <input className='px-4 py-2' onChange={resturant} type="text" />
            </div>
            {
                meals.map(meal => <Link className='btn btn-outline-dark m-3' key={meal.idMeal}
                    to={`/mealsdb/${meal.strMeal}`}>{meal.strMeal}
                </Link>)

            }
            <Outlet></Outlet>
            <h1> {meals.strMeal}</h1>
        </div>
    );
};

export default Mealdb;