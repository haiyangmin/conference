import React from 'react'

const ConferenceRoom = ({ name, address, seatsLeft, maxSeats }) => (
    <div>
        <h1>Conference Room: {name}</h1>
        <h2>Location: {address}.</h2>
        <h2>Seats left: {seatsLeft}.</h2>
        <h2>Max seats: {maxSeats}.</h2>
    </div>
);

export default ConferenceRoom
