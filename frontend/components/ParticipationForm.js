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
                <input type="text" name="name" />
            </label>
            <button
                onClick={onParticipate}
                disabled={seatsTaken === maxSeats ? 'disabled' : ''}>
                Participate
            </button>
        </form>
    </div>
);

export default ParticipationForm
