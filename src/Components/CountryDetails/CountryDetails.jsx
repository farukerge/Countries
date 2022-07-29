import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

import { Card, Button,Container } from 'react-bootstrap';
import styles from './CountryDetails.module.css'

const CountryDetails = () => {
    const [country, setCountry] = useState([]);
    const { countryName } = useParams();


    
  useEffect(() => {
    const getCountryByName = async () => {
        axios.get(`https://restcountries.com/v2/name/${countryName}`)
        .then((response) => {
          setCountry(response.data)
        })
    };

    getCountryByName();
  }, [countryName]);
  return (
    
    <Container className={styles.wrap}>
        {country?.map((country, index) => (
            <Card key={index} >
                <Card.Img variant="top" src={country.flag} style={{ width: "100%" , height:"12rem"}} />
                 <Card.Body>
                    <Card.Title><h4>{ country.name }</h4></Card.Title>
                    <Card.Text>
                        <h6><span>Capital: </span> {country.capital}</h6>
                        <h6><span>Region: </span> {country.region}</h6>
                        <h6><span>Sub Region: </span> {country.subregion}</h6>
                        <h6><span>Population: </span> {new Intl.NumberFormat().format(country.population)}</h6>
                    </Card.Text>
                    <Link to={"/"}>
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>
      ))}
    </Container>
  )
}

export default CountryDetails