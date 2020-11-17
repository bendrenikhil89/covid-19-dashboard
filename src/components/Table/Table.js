import React from 'react';
import "./Table.css"
import numeral from "numeral";

function Table(props) {
    return (
        <div className="table">
             <ul key="Worldwide">
                    <li style={{display:"flex", flex:"1", justifyContent:"flex-start", cursor:"pointer"}} onClick={props.click} code="worldwide">
                        Worldwide
                    </li>
                    <li style={{display:"flex", flex:"1", justifyContent:"flex-end"}}>
                        <strong>{numeral(props.totalCases).format("0,0")}</strong>
                    </li>
            </ul>
            {props.countries.map(country => (
                <ul key={country.country}>
                    <li style={{display:"flex", flex:"1", justifyContent:"flex-start", cursor:"pointer"}} onClick={props.click} code={country.countryInfo.iso2}>
                        {country.country}
                    </li>
                    <li style={{display:"flex", flex:"1", justifyContent:"flex-end"}}>
                        <strong>{numeral(country.cases).format("0,0")}</strong>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Table
