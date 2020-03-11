import React from 'react';
import Participants from './Participants';

const Conference = ({ name, startTime, endTime, participants }) => {
    return (<div>
        <h2 style={{ marginBottom: 20}}>Conference Name: { name }</h2>
        <h3 style={{ marginBottom: 20 }}>Start Time: { startTime }.</h3>
        <h3 style={{ marginBottom: 20 }}>End Time: { endTime }.</h3>
        <Participants participants={ participants }/>
    </div>);
};

export default Conference;
