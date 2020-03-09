import React from 'react';
import Conference from './Conference';
import ConferenceRoom from './ConferenceRoom';
import ParticipationForm from './ParticipationForm';
import UpdateConferenceForm from './UpdateConferenceForm';

const ConferenceItem = ({ conference, onParticipate, onCancel, onUpdate, openParticipationForm, openUpdateForm }) => (
    <div style={{ marginBottom: 20 }}>
        <Conference
            name={conference.name}
            startTime={conference.startTime}
            endTime={conference.endTime}
            participants={conference.participants}/>
        <ConferenceRoom
            name={conference.roomName}
            address={conference.address}
            seatsTaken={conference.roomAvailability - conference.participants.length}
            maxSeats={conference.roomAvailability} />
        <div>
            { openParticipationForm ?  <ParticipationForm>
                seatsTaken={conference.roomAvailability - conference.participants.length}
                maxSeats={conference.roomAvailability}
                onParticipate={onParticipate}
            </ParticipationForm> : null }
        </div>
        <div>
            { openUpdateForm ?  <UpdateConferenceForm>
                onUpdate={onUpdate}
            </UpdateConferenceForm> : null }
        </div>
        <div>
            { !openParticipationForm ? <button
                onClick={onParticipate}>
                Participate
            </button> : null }
        </div>
        <div>
            { !openUpdateForm  ? <button
                onClick={onUpdate}>
                Update conference
            </button> : null }
        </div>
        <button
            onClick={onCancel}>
            Cancel conference
        </button>
    </div>
);

export default ConferenceItem
