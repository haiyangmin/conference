import React from 'react'

const ConferenceRoom = ({ name, address, seatsTaken, maxSeats }) => (
    <div>
        <h1>{name}</h1>
        <h2>Location: {address}.</h2>
        <h2>Seats occupied: {seatsTaken}.</h2>
        <h2>Max seats: {maxSeats}.</h2>
    </div>
);

export default ConferenceRoom
