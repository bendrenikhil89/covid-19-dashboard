import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "../../components/InfoBox/InfoBox";
import LineGraph from "../LineGraph/LineGraph";
import Table from "../../components/Table/Table";
import { sortData, prettyPrintStat } from "../../util/util";
import numeral from "numeral";
import Map from "../../components/Map/Map";
import "leaflet/dist/leaflet.css";
import './Landing.css';

function Landing() {
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
    const [mapZoom, setMapZoom] = useState(4);
  
    useEffect(() => {
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setCountryInfo(data);
        });
    }, []);
  
    useEffect(() => {
      const getCountriesData = () => {
        fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => ({
              name: country.country,
              value: country.countryInfo.iso2,
            }));
            let sortedData = sortData(data);
            setCountries(countries);
            setMapCountries(data);
            setTableData(sortedData);
          });
      };
  
      getCountriesData();
    }, []);
  
    const onCountryChange = (e) => {
      //const countryCode = e.target.value;
      const countryCode = e.target.attributes.code.value;
  
      const url =
        countryCode === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
       fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setInputCountry(countryCode);
          setCountryInfo(data);
          countryCode === "worldwide" ? setMapCenter([20.5937, 78.9629]) : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
        });
    };

    return (
        <>
            <div className="main-container">
                <div className="box1">
                    <div className="childbox1">
                      
                         <div className="dashboard__stats">
                        <InfoBox
                            onClick={(e) => setCasesType("cases")}
                            title="Covid-19 Cases"
                            isRed
                            active={casesType === "cases"}
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={numeral(countryInfo.cases).format("0.0a")}
                            faClass="fas fa-chart-line fontawesome-icon"
                        />
                        <InfoBox
                            onClick={(e) => setCasesType("recovered")}
                            title="Recovered"
                            active={casesType === "recovered"}
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={numeral(countryInfo.recovered).format("0.0a")}
                            faClass="fas fa-heart fontawesome-icon"
                        />
                        <InfoBox
                            onClick={(e) => setCasesType("deaths")}
                            title="Deaths"
                            isRed
                            active={casesType === "deaths"}
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={numeral(countryInfo.deaths).format("0.0a")}
                            faClass="fas fa-heart-broken fontawesome-icon"
                        />
                        </div>
                    </div>
                    <div className="childbox2">
                    <Map
                      countries={mapCountries}
                      casesType={casesType}
                      center={mapCenter}
                      zoom={mapZoom}
                    />
                    </div>
                </div>
                <div className="box2">
                    <div className="childbox3">
                        <h3>Live Cases by Country</h3>
                        <Table countries={tableData} click={onCountryChange} totalCases={countryInfo.cases} />
                    </div>
                    <div className="childbox4">
                        <h3>Worldwide new {casesType}</h3>
                        <LineGraph casesType={casesType} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;
