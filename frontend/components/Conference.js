import React from 'react'
import Participants from './Participants';

const Conference = ({ name, startTime, endTime, participants}) => (
    <div>
        <h1>{name}</h1>
        <h2>Start time: {startTime}.</h2>
        <h2>End time: {endTime}.</h2>
        <h2>participants:</h2>
        <Participants participants={participants}/>
    </div>
);

export default Conference
