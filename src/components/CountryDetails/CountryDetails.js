import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    console.log(country);


    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div>
            <h1>{countryName}</h1>
        </div>
    );
};

export default CountryDetails;