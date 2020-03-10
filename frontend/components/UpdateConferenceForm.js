import React from 'react'

const UpdateConferenceForm = ({ onUpdate}) => (
    <div>
        <form >
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Start time:
                <input type="datetime-local" name="start time" />
            </label>
            <label>
                End time:
                <input type="datetime-local" name="end time" />
            </label>
            <label>
                Room name:
                <input type="text" name="room name" />
            </label>
            <label>
                Address:
                <input type="text" name="address" />
            </label>
            <label>
                Max seats:
                <input type="number" name="max seats" />
            </label>
            <button
                onClick={onUpdate}>
                Submit
            </button>
        </form>
    </div>
);

export default UpdateConferenceForm
