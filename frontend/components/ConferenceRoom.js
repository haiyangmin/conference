import React from 'react'

const ConferenceRoom = ({ name, address, seatsLeft, maxSeats }) => (
    <div>
        <h3 style={{ marginBottom: 20}}>Room Name: {name}</h3>
        <h3 style={{ marginBottom: 20}}>Location: {address}.</h3>
        <h3 style={{ marginBottom: 20}}>Seats left: {seatsLeft}.</h3>
        <h3 style={{ marginBottom: 20}}>Max seats: {maxSeats}.</h3>
    </div>
);

export default ConferenceRoom
