import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Container, Table } from 'react-bootstrap' 
import styles from './GetCountry.module.css'

import SearchInput from '../SearchInput/SearchInput';

const GetCountry = () => {
  const [countries, setCountries] = useState([])
  
  const getCountries = async () => {
    axios.get("https://restcountries.com/v2/all")
        .then((response) => {
          setCountries(response.data)
        })
  }
  const getCountryByCapital = (capitalName) => {
    axios.get(`https://restcountries.com/v2/capital/${capitalName}`)
      .then((response) => {
      setCountries(response.data)
    })
  }


  useEffect(() => {
    getCountries();
    getCountryByCapital();
  }, []);
    
  
  return (
    <Container>

      <SearchInput onSearch={getCountryByCapital} />

          <Table striped="columns" bordered hover >
            <thead>
              <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Flag</th>
              </tr>
            </thead>
            {
              countries.map((country, id) => {
                return (
                  <tbody key={id} className={styles.tbody}>
                    <tr>
                      <td>
                        <Link to={`/country/${country.name}`} className={styles.link}>
                          {country.name}
                        </Link>
                      </td> 
                      <td><p>{country.capital}</p></td>
                      <td><p>{country.region}</p></td>
                      <td><img src={country.flag} alt={country.name} className={styles.image}  /></td>
                    </tr>
                  </tbody>
                  )
            })}
          </Table>
          
    </Container>
  )
}

export default GetCountry

