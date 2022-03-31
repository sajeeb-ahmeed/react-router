import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const url = `https://restcountries.com/v3.1/all`
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [countries])
    return (
        <div>
            <h1>countires component</h1>
            {
                countries.map(country => <p className='btn btn-outline-dark m-4'>
                    <Link className='underline-none' key={country.area} to={`/country/${country.name.common}`}>{country.name.common}</Link></p>)
            }
        </div>
    );
};

export default Countries;