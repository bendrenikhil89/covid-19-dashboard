import React from 'react';
import './About.css';

function About() {
    return (
        <div className="parent-container">
            <h3 className="question q1">Are you official?</h3>
            <h3 className="answer a1">No</h3>
            <h3 className="question q2">What are your sources? How is the data gathered for this project?</h3>
            <h3 className="answer a2">We are using disease.sh API's to update our numbers. API is available for all at disease.sh/docs/</h3>
            <h3 className="question q3">Where can I find the data for this?</h3>
            <h3 className="answer a3">All the data is available through an API for further analysis and development here : disease.sh/docs</h3>
            <h3 className="question q4">Why are you putting in time and resources to do this while not gaining a single penny from it?</h3>
            <h3 className="answer a4">Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.</h3>
        </div>
    )
}

export default About
