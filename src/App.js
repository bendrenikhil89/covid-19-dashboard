import React, {useState, useEffect} from 'react';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import './App.css';

import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  const getCountriesData = async() => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then(response => response.json())
    .then(data =>{
      const countries = data.map((country) => {
        return {
          name: country.country,
          value: country.countryInfo.iso2
        }
      });
      setCountries(countries);
    })
  }

  const onCountryChange = async(event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  useEffect(() =>{
    getCountriesData();
  }, [])

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem key="worldwide" value="worldwide">Worldwide</MenuItem>
              {
                countries.map(country => {
                  return <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
              <InfoBox title="Coronavirus cases" cases="12123" total="1513513" />
              <InfoBox title="Recoveries" cases="43251" total="2421" />
              <InfoBox title="Deaths" cases="1252242" total="6547" />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
