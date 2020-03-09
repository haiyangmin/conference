import React from 'react'

const UpdateConferenceForm = ({ onUpdate}) => (
    <div>
        <form onSubmit={onUpdate} >
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Start time:
                <input type="text" name="start time" />
            </label>
            <label>
                End time:
                <input type="text" name="end time" />
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
            <input type="submit" value="Submit" />
        </form>
    </div>
);

export default UpdateConferenceForm
