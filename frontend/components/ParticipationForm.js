import React from 'react'

const ParticipationForm = ({ seatsTaken,maxSeats,onParticipate}) => (
    <div>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <button
                onClick={onParticipate}
                disabled={seatsTaken === maxSeats ? 'disabled' : ''}>
                Submit
            </button>
        </form>
    </div>
);

export default ParticipationForm
